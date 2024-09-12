/**
 * 废弃配置的白名单
 *
 * ESLint 在 v8.53.0 版本废弃了格式化相关的选项，但从 2024-10-05 开始 ESLint 8 将停止维护
 * 所以无需再去适配这些废弃的配置
 *
 * 这里列出的是在 recommended 中或者修改了默认配置的规则名称
 */
export const DEPRECATED_WHITE_LIST = [
  'lines-between-class-members',
  'no-extra-semi',
  'no-mixed-spaces-and-tabs',
  'spaced-comment',
  '@typescript-eslint/lines-between-class-members',
]
