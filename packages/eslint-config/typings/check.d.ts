import { E_NAMESPACE } from '@ttionya/eslint-config/libs/constants'

export interface ICheckResult {
  // 正常规则
  common: string[]
  // prettier 规则：无 + prettier 规则 + 非以下情况
  prettier: string[]
  // prettier 有冲突的规则：有 + prettier 规则 + 非推荐规则
  prettierConflict: string[]
  // prettier 缺失的规则：无 + prettier 规则 + 推荐规则
  prettierMissing: string[]
  // 不存在的规则：有 + 规则不存在
  invalid: string[]
  // 废弃的规则：有 + 废弃
  deprecated: string[]
  // 重写了推荐规则：有 + 推荐规则
  overwriteRecommended: string[]
  // 推荐规则：无 + 推荐规则
  recommended: string[]
  // 缺失的规则：无 + 规则存在
  missing: string[]
}

export type ICheckResultRecord = Partial<Record<E_NAMESPACE, ICheckResult>>

export type ICheckResultOutput = Record<
  keyof ICheckResult,
  {
    description: string
    descriptionCN: string
    expected: boolean
    list?: string[]
  }
>

export type ICheckResultOutputRecord = Partial<Record<E_NAMESPACE, ICheckResultOutput>>
