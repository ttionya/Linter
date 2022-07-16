import baseRules from '@ttionya/eslint-config/tests/base'
import typescriptRules from '@ttionya/eslint-config/tests/typescript'

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

export const NAMESPACE_RULES = {
  [E_NAMESPACE.BASE]: baseRules,
  [E_NAMESPACE.TYPESCRIPT]: typescriptRules,
}
