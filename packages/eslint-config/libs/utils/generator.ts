import fs from 'fs'
import path from 'path'
import prettier from 'prettier'
import {
  E_NAMESPACE,
  NAMESPACE_RULES,
  PATH_DIST,
  PATH_TESTS,
  FILE_ESLINTRC,
  eslintrcMeta,
} from '../constants'
import type { IRule, IRuleMeta } from '@ttionya/eslint-config/typings/rule'

const root = path.join(__dirname, '../..')

export default class Generator {
  private namespace!: E_NAMESPACE

  /**
   * 生成配置文件到 dist 目录
   */
  public generate(namespace: E_NAMESPACE): void {
    this.namespace = namespace

    const ruleMetaList = this.getRuleMetaList()

    const eslintrcContent = this.getEslintrcContent()
    const rulesContent = this.getRulesContent(ruleMetaList)
    const content =
      eslintrcMeta + eslintrcContent.replace(/rules:\s*\{}/, `rules: { ${rulesContent} }`)

    // 使用 prettier 格式化并写入文件
    this.writeFileWithPrettier(content)
  }

  /**
   * 获得 .eslintrc 模板文本
   */
  private getEslintrcContent(): string {
    const template = `${PATH_TESTS}/${this.namespace}/eslintrc.tpl`

    return fs.readFileSync(template, 'utf-8')
  }

  /**
   * 获得当前配置的规则列表
   */
  private getRuleMetaList(): IRuleMeta[] {
    const ruleRecord = NAMESPACE_RULES[this.namespace]!

    return Object.entries(ruleRecord)
      .map(([ruleNameWithoutPrefix, rule]) => {
        const rulePath = `${PATH_TESTS}/${this.namespace}/${ruleNameWithoutPrefix}/${FILE_ESLINTRC}.js`

        return this.getRuleMeta(rulePath, rule)
      })
      .flat()
  }

  /**
   * 获得单条规则的规则集合
   */
  private getRuleMeta(rulePath: string, rule: IRule): IRuleMeta[] {
    // 规则注释
    const fileContent = fs.readFileSync(rulePath, 'utf-8')
    const ruleComments = /\/\*\*.*\*\//gms.exec(fileContent)
    const ruleComment = ruleComments ? ruleComments[0] : ''

    // 规则集合
    return Object.entries(rule.rules).map(([ruleName, ruleValue]) => ({
      name: ruleName,
      value: ruleValue,
      comment: ruleComment,
    }))
  }

  /**
   * 获得当前配置组合过的规则文本，包含注释
   */
  private getRulesContent(ruleMetaList: IRuleMeta[]): string {
    return ruleMetaList
      .map((rule) => `\n\n${rule.comment}\n'${rule.name}': ${JSON.stringify(rule.value, null, 2)},`)
      .join('')
  }

  /**
   * 使用 prettier 格式化并写入文件
   */
  private writeFileWithPrettier(content: string): void {
    const config = prettier.resolveConfig.sync(root)

    const formattedContent = prettier.format(content, {
      ...config,
      parser: 'babel',
    })

    fs.writeFileSync(`${PATH_DIST}/${this.namespace}.js`, formattedContent, 'utf-8')
  }
}
