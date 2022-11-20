import baseRules from '@ttionya/eslint-config/tests/base'
import typescriptRules from '@ttionya/eslint-config/tests/typescript'
import babelRules from '@ttionya/eslint-config/tests/babel'
import { IRuleRecord } from '@ttionya/eslint-config/typings/rule'

export enum E_NAMESPACE {
  BASE = 'base',
  TYPESCRIPT = 'typescript',
  BABEL = 'babel',
}

export const NAMESPACE = [E_NAMESPACE.BASE, E_NAMESPACE.TYPESCRIPT, E_NAMESPACE.BABEL]

export const NAMESPACE_RULES: Partial<Record<E_NAMESPACE, IRuleRecord>> = {
  [E_NAMESPACE.BASE]: baseRules,
  [E_NAMESPACE.TYPESCRIPT]: typescriptRules,
  [E_NAMESPACE.BABEL]: babelRules,
}
