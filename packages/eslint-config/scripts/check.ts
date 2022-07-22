import chalk from 'chalk'
import { sync as mkdirpSync } from 'mkdirp'
import { E_NAMESPACE, PATH_DIST } from '@ttionya/eslint-config/libs/constants'
import Check from '@ttionya/eslint-config/libs/utils/check'
import {
  ICheckResult,
  ICheckResultOutput,
  ICheckResultOutputRecord,
} from '@ttionya/eslint-config/typings/check'

const args = process.argv.slice(2)
const check = new Check()
const checkResult = check.getCheckResultRecord()

generateManifest()
checkControl()

/**
 * 创建 manifest 文件
 */
function generateManifest(): void {
  // 新建 dist 目录
  mkdirpSync(PATH_DIST)

  // 创建 manifest 文件
  check.generateManifest(checkResult)
}

/**
 * 循环 checkResult
 */
function forEachCheckResult(
  checkResultOutputRecord: ICheckResultOutputRecord,
  fn: ({
    namespace,
    checkResultOutput,
    checkResultKey,
  }: {
    namespace: E_NAMESPACE
    checkResultOutput: ICheckResultOutput
    checkResultKey: keyof ICheckResult
  }) => void
): void {
  Object.keys(checkResultOutputRecord).forEach((namespace) => {
    const typedNamespace = namespace as E_NAMESPACE
    const checkResultOutput = checkResultOutputRecord[typedNamespace]!

    Object.keys(checkResultOutput).forEach((checkResult) => {
      fn({
        namespace: typedNamespace,
        checkResultOutput,
        checkResultKey: checkResult as keyof ICheckResult,
      })
    })
  })
}

/**
 * 根据控制内容进行验证
 */
function checkControl(): void {
  const control = args.length ? args[0] : ''
  const manifestContent = check.getManifestContent(checkResult)

  if (control === '--strict') {
    // 严格模式，只要有非预期的内容，则直接报错
    forEachCheckResult(manifestContent, ({ checkResultOutput, checkResultKey }) => {
      const item = checkResultOutput[checkResultKey]

      if (!item.expected && item.list!.length) {
        process.exit(1001)
      }
    })
  } else if (control === '--output') {
    // 输出模式，只输出有问题的项，不报错
    const result: Partial<Record<E_NAMESPACE, Partial<ICheckResultOutput>>> = {}
    let hasUnexpected = false

    forEachCheckResult(manifestContent, ({ namespace, checkResultOutput, checkResultKey }) => {
      const item = checkResultOutput[checkResultKey]

      if (!item.expected && item.list!.length) {
        hasUnexpected = true

        result[namespace] = result[namespace] || {}
        result[namespace]![checkResultKey] = item
      }
    })

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!hasUnexpected) {
      console.log(chalk.green('all pass'))
    } else {
      console.log(chalk.yellow(JSON.stringify(result, null, 2)))
    }
  }
}
