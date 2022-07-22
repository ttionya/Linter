import path from 'path'
import chalk from 'chalk'
import { readFileSync } from 'fs'
import { ESLint, Linter } from 'eslint'
import { assert } from 'chai'
import { E_NAMESPACE, NAMESPACE } from './constants/namespace'
import {
  PATH_ROOT,
  PATH_TESTS,
  PATH_DIST,
  FILE_GOOD,
  FILE_BAD,
  FILE_ESLINTRC,
  FILE_EXT,
} from './constants/path'
import { globSync } from './utils/glob'

const ruleTestFileExt = FILE_EXT.join('|')

;((): void => {
  checkTestFilesExists()

  NAMESPACE.forEach(async (namespace): Promise<void> => {
    const ruleNamespacePath = `${PATH_TESTS}/${namespace}`

    const eslint = new ESLint({
      baseConfig: getESLintConfig(namespace),
      ignore: false,
      useEslintrc: false,
    })

    const goodResult = await eslint.lintFiles(getReportPattern(FILE_GOOD, ruleNamespacePath))
    const badResult = await eslint.lintFiles(getReportPattern(FILE_BAD, ruleNamespacePath))

    describe(namespace, () => {
      describe('good', () => {
        goodReportTest(goodResult)
      })

      describe('bad', () => {
        badReportTest(badResult)
      })
    })
  })
})()

/**
 * 验证测试文件是否都存在
 */
function checkTestFilesExists(): void {
  const ruleFiles = [FILE_GOOD, FILE_BAD, FILE_ESLINTRC]
  const lostFiles: string[] = []

  NAMESPACE.forEach((namespace) => {
    const ruleList = globSync(`${PATH_TESTS}/${namespace}/*/`)

    ruleList.forEach((rulePath) => {
      ruleFiles.forEach((fileName) => {
        const file = globSync(`${rulePath}/${fileName}.+(${ruleTestFileExt})`)

        if (!file.length) {
          lostFiles.push(`${chalk.blue(rulePath)} missing ${chalk.red(fileName)} file.`)
        }
      })
    })
  })

  if (lostFiles.length) {
    console.error(lostFiles.join('\n'))

    process.exit(1)
  }
}

/**
 * 返回用例的查询模式
 */
function getReportPattern(fileName: string, ruleNamespacePath: string): string[] {
  return [`${ruleNamespacePath}/**/${fileName}.+(${ruleTestFileExt})`]
}

/**
 * 测试正确用例
 */
function goodReportTest(goodReports: ESLint.LintResult[]): void {
  goodReports.forEach((goodReport) => {
    const { filePath, errorCount } = goodReport

    const ruleName = path.basename(path.dirname(filePath))

    it(ruleName, () => {
      assert.equal(errorCount, 0, `${filePath} should have no error.`)
    })
  })
}

/**
 * 测试错误用例
 */
function badReportTest(badReports: ESLint.LintResult[]): void {
  badReports.forEach((badReport) => {
    const { filePath, errorCount } = badReport

    const ruleName = path.basename(path.dirname(filePath))
    const shouldErrorCount = getBadReportErrorCount(filePath)

    it(ruleName, () => {
      assert.notEqual(shouldErrorCount, -1, `Can't read ${filePath} error count.`)
      assert.equal(
        errorCount,
        shouldErrorCount,
        `${filePath} should have ${shouldErrorCount} errors.`
      )
    })
  })
}

/**
 * 获得错误用例具体错误数
 */
function getBadReportErrorCount(filePath: string): number {
  const badReportContent = readFileSync(filePath, 'utf-8')
  const match = /\/\/ errorCount (\d+)/.exec(badReportContent)

  if (match) {
    return +match[1]
  }

  return -1
}

/**
 * 获得指定 namespace 的 ESLint 配置
 */
function getESLintConfig(namespace: E_NAMESPACE): Linter.Config {
  // eslint-disable-next-line @typescript-eslint/no-require-imports,@typescript-eslint/no-var-requires
  const eslintrc = require(`${PATH_DIST}/${namespace}.js`) as Linter.Config

  // 额外对 ts 的规则添加 parserOptions
  if (namespace === E_NAMESPACE.TYPESCRIPT) {
    eslintrc.parserOptions = {
      ...eslintrc.parserOptions,
      // * HACK 此处直接指向了 top level 的 tsconfig 文件
      project: '../../tsconfig.json',
      tsconfigRootDir: PATH_ROOT,
    }
  }

  return eslintrc
}
