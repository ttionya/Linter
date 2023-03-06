import chalk from 'chalk'
import { sync as mkdirpSync } from 'mkdirp'
import parser from 'yargs-parser'
import { E_NAMESPACE, PATH_DIST } from '@ttionya/eslint-config/libs/constants'
import Check from '@ttionya/eslint-config/libs/utils/check'
import type {
  ICheckResult,
  ICheckResultOutput,
  ICheckResultOutputRecord,
} from '@ttionya/eslint-config/typings/check'

const argv = parser.detailed(process.argv.slice(2), {
  configuration: {
    'boolean-negation': false,
  },
}).argv

const check = new Check()
const checkResult = check.getCheckResultRecord()
const manifestContent = check.getManifestContent(checkResult)

if (argv['strict']) {
  // 严格模式，只要有非预期的内容，则直接报错
  checkStrict(manifestContent)
} else if (argv['output']) {
  // 输出模式，只输出有问题的项，不报错
  checkOutput(manifestContent)
} else {
  // 默认生成 manifest 文件
  generateManifest(manifestContent)
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
 * 验证严格模式
 */
function checkStrict(manifestContent: ICheckResultOutputRecord): void {
  forEachCheckResult(manifestContent, ({ checkResultOutput, checkResultKey }) => {
    const item = checkResultOutput[checkResultKey]

    if (!item.expected && item.list!.length) {
      process.exit(1001)
    }
  })
}

/**
 * 验证输出模式
 */
function checkOutput(manifestContent: ICheckResultOutputRecord): void {
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

  if (!hasUnexpected) {
    if (!argv['noExpect']) {
      console.log(chalk.green('all pass'))
    }
  } else {
    if (!argv['noUnexpected']) {
      console.log(chalk.yellow(JSON.stringify(result, null, 2)))
    }
  }
}

/**
 * 创建 manifest 文件
 */
function generateManifest(manifestContent: ICheckResultOutputRecord): void {
  // 新建 dist 目录
  mkdirpSync(PATH_DIST)

  // 创建 manifest 文件
  check.generateManifestByContent(manifestContent)
}
