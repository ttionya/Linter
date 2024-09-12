import path from 'path'
import fs from 'fs'
import { builtinRules as baseRuleRecord } from 'eslint/use-at-your-own-risk'
import { rules as typescriptRuleRecord } from '@typescript-eslint/eslint-plugin'
import { rules as prettierRuleRecord } from 'eslint-config-prettier'
import {
  E_NAMESPACE,
  NAMESPACE,
  PATH_TESTS,
  PATH_DIST,
  FILE_ESLINTRC,
  DEPRECATED_WHITE_LIST,
  checkResultOutputMeta,
} from '../constants'
import { globSync } from './glob'
import type {
  IRuleModule,
  IRuleModuleRecord,
  IRuleModuleMap,
} from '@ttionya/eslint-config/typings/rule'
import type {
  ICheckResult,
  ICheckResultRecord,
  ICheckResultOutput,
  ICheckResultOutputRecord,
} from '@ttionya/eslint-config/typings/check'

export default class Check {
  // 规则前缀
  public rulesPrefix!: Record<E_NAMESPACE, string>

  // 规则 Map，保存所有规则集
  public rulesMap!: Record<E_NAMESPACE, IRuleModuleMap>

  private result: ICheckResultRecord = {}

  private pathManifest = `${PATH_DIST}/manifest.json`

  constructor() {
    const checkAdapter = new CheckAdapter(this)

    // 填充数据
    checkAdapter.initData()
  }

  /**
   * 返回当前规则集合
   */
  public getCheckResultRecord(): ICheckResultRecord {
    NAMESPACE.forEach((namespace) => {
      const result: ICheckResult = {
        common: [],
        prettier: [],
        prettierConflict: [],
        prettierMissing: [],
        invalid: [],
        deprecated: [],
        overwriteRecommended: [],
        recommended: [],
        missing: [],
      }

      const existRuleList = globSync(`${PATH_TESTS}/${namespace}/*/`).map((path) =>
        path.slice(0, -1)
      )

      existRuleList.forEach((rulePath) => {
        const rulesMap = this.rulesMap[namespace]
        const ruleName = this.rulesPrefix[namespace] + path.basename(rulePath)
        const ruleValid = !!globSync(`${rulePath}/${FILE_ESLINTRC}.*`).length

        if (!rulesMap.has(ruleName)) {
          // 规则不存在
          result.invalid!.push(ruleName)
        } else {
          const ruleModule = rulesMap.get(ruleName)!

          if (this.isDeprecated(ruleName, ruleModule)) {
            // 规则已经被废弃
            result.deprecated!.push(ruleName)
          } else if (this.isRecommended(ruleModule)) {
            // 推荐规则被覆盖
            result.overwriteRecommended!.push(ruleName)
          } else if (this.isPrettierRule(ruleName)) {
            // prettier 规则冲突
            result.prettierConflict!.push(ruleName)
          } else if (ruleValid) {
            // 正常规则
            result.common!.push(ruleName)
          }

          if (ruleValid) {
            // 规则合法时，将处理过的规则从 rulesMap 中删除
            rulesMap.delete(ruleName)
          }
        }
      })

      this.rulesMap[namespace].forEach((ruleModule, ruleName) => {
        if (this.isRecommended(ruleModule)) {
          if (this.isPrettierRule(ruleName)) {
            // prettier 规则缺失，没有替换掉推荐规则
            result.prettierMissing!.push(ruleName)
          } else {
            // 推荐规则
            result.recommended!.push(ruleName)
          }
        } else if (this.isPrettierRule(ruleName)) {
          // prettier 规则
          result.prettier!.push(ruleName)
        } else if (this.isDeprecated(ruleName, ruleModule)) {
          // 不做记录
        } else {
          // 剩余都是缺失的规则
          result.missing!.push(ruleName)
        }
      })

      this.result[namespace] = result
    })

    return this.result
  }

  /**
   * 返回清单文件内容
   */
  public getManifestContent(checkResultRecord: ICheckResultRecord): ICheckResultOutputRecord {
    return Object.keys(checkResultRecord).reduce((p, namespace) => {
      const typedNamespace = namespace as E_NAMESPACE
      const checkResult = checkResultRecord[typedNamespace]!

      p[typedNamespace] = Object.keys(checkResult).reduce((p, key) => {
        const typedKey = key as keyof ICheckResult

        p[typedKey] = {
          ...checkResultOutputMeta[typedKey],
          list: checkResult[typedKey],
        }

        return p
      }, {} as ICheckResultOutput)

      return p
    }, {} as ICheckResultOutputRecord)
  }

  /**
   * 生成清单文件到 dist 目录
   */
  public generateManifest(checkResultRecord: ICheckResultRecord): void {
    const manifestContent = this.getManifestContent(checkResultRecord)

    this.generateManifestByContent(manifestContent)
  }

  /**
   * 生成清单文件到 dist 目录（直接使用完成转换的内容生成）
   */
  public generateManifestByContent(manifestContent: ICheckResultOutputRecord): void {
    const stringifyContent = JSON.stringify(manifestContent, null, 2)

    fs.writeFileSync(this.pathManifest, stringifyContent, 'utf-8')
  }

  /**
   * 判断当前规则是否是推荐规则
   */
  private isRecommended(ruleModule: IRuleModule): boolean {
    const recommended = ruleModule.meta?.docs?.recommended

    return !!recommended && [true, 'error', 'warn', 'recommended'].includes(recommended)
  }

  /**
   * 判断当前规则是否废弃
   */
  private isDeprecated(ruleName: string, ruleModule: IRuleModule): boolean {
    return !!ruleModule.meta?.deprecated && !DEPRECATED_WHITE_LIST.includes(ruleName)
  }

  /**
   * 判断当前规则是否是 prettier 的规则
   */
  private isPrettierRule(ruleName: string): boolean {
    return prettierRuleRecord[ruleName] === 0 || prettierRuleRecord[ruleName] === 'off'
  }
}

interface IAdapterResult {
  prefix: string
  ruleModuleRecord: IRuleModuleRecord
}

class CheckAdapter {
  private readonly checkInstance: Check

  private readonly emptyRuleRecord = {}

  constructor(checkInstance: Check) {
    this.checkInstance = checkInstance
  }

  public initData(): void {
    const checkInstance = this.checkInstance

    for (const namespace in E_NAMESPACE) {
      if (!Object.hasOwn(E_NAMESPACE, namespace)) continue

      const typedNamespace = E_NAMESPACE[namespace as keyof typeof E_NAMESPACE]

      const { prefix, ruleModuleRecord } = this[typedNamespace]()

      checkInstance.rulesPrefix = { ...checkInstance.rulesPrefix, [typedNamespace]: prefix }
      checkInstance.rulesMap = {
        ...checkInstance.rulesMap,
        [typedNamespace]: this.fillRecordToMap(prefix, ruleModuleRecord),
      }
    }
  }

  /**
   * 将规则集合填充到 Map 中
   */
  private fillRecordToMap(prefix: string, ruleModuleRecord: IRuleModuleRecord): IRuleModuleMap {
    const map = new Map<string, IRuleModule>()

    Object.entries(ruleModuleRecord).forEach(([ruleName, ruleModule]) => {
      map.set(prefix + ruleName, ruleModule)
    })

    return map
  }

  private [E_NAMESPACE.BASE](): IAdapterResult {
    const baseRules: IRuleModuleRecord = {}

    baseRuleRecord.forEach((ruleModule, ruleName) => {
      baseRules[ruleName] = ruleModule
    })

    return { prefix: '', ruleModuleRecord: baseRules }
  }

  private [E_NAMESPACE.TYPESCRIPT](): IAdapterResult {
    return { prefix: '@typescript-eslint/', ruleModuleRecord: typescriptRuleRecord }
  }

  private [E_NAMESPACE.BABEL](): IAdapterResult {
    return { prefix: '', ruleModuleRecord: this.emptyRuleRecord }
  }
}
