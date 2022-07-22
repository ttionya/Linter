import pkg from '@ttionya/eslint-config/package.json'
import { ICheckResultOutput } from '@ttionya/eslint-config/typings/check'

export const eslintrcMeta = `
/**
 * ${pkg.description}
 * ${pkg.homepage}
 *
 * Author: ${pkg.author}
 *
 * 本文件由脚本自动生成，请勿修改
 */
`

export const checkResultOutputMeta: ICheckResultOutput = {
  common: {
    description: 'Normal rules',
    descriptionCN: '正常规则',
    expected: true,
  },
  prettier: {
    description:
      'Unchanged non-recommended rules that were turned off by "eslint-config-prettier".',
    descriptionCN: '未变动的被 “eslint-config-prettier” 关闭的非推荐规则。',
    expected: true,
  },
  prettierConflict: {
    description:
      'Non-recommended rules that conflict with rules that should be turned off by "eslint-config-prettier".',
    descriptionCN: '与应该被 “eslint-config-prettier” 关闭的规则冲突的非推荐规则。',
    expected: false,
  },
  prettierMissing: {
    description:
      'Recommended rules that should be turned off by "eslint-config-prettier" but are missing from the project.',
    descriptionCN: '应该被 “eslint-config-prettier” 关闭，但是在项目中缺失的推荐规则。',
    expected: false,
  },
  invalid: {
    description: 'Invalid rules.',
    descriptionCN: '无效规则。',
    expected: false,
  },
  deprecated: {
    description: 'Deprecated rules that should not exist in the project.',
    descriptionCN: '项目中不应该存在的被废弃的规则。',
    expected: false,
  },
  overwriteRecommended: {
    description: 'Recommended rules that have been overwritten default configuration.',
    descriptionCN: '重写了默认配置的推荐规则。',
    expected: true,
  },
  recommended: {
    description:
      'Recommended rules that do not exist in the project, meaning that the default configuration is used.',
    descriptionCN: '项目中不存在的推荐规则，意味着使用了默认配置。',
    expected: true,
  },
  missing: {
    description: 'Rules that should exist in the project but are missing.',
    descriptionCN: '项目中应该存在但是缺少的规则。',
    expected: false,
  },
}
