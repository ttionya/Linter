import baseRules from '@ttionya/eslint-config/tests/base'
import typescriptRules from '@ttionya/eslint-config/tests/typescript'
import { IRuleRecord } from '@ttionya/eslint-config/typings/rule'

export enum E_NAMESPACE {
  BASE = 'base',
  TYPESCRIPT = 'typescript',
  VUE = 'vue',
  REACT = 'react',
}

export const NAMESPACE = [
  E_NAMESPACE.BASE,
  E_NAMESPACE.TYPESCRIPT,
  // E_NAMESPACE.VUE,
  // E_NAMESPACE.REACT,
]

export const NAMESPACE_RULES: Partial<Record<E_NAMESPACE, IRuleRecord>> = {
  [E_NAMESPACE.BASE]: baseRules,
  [E_NAMESPACE.TYPESCRIPT]: typescriptRules,
}
