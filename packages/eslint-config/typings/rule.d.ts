/* RuleModule */
export interface IRuleModuleMeta {
  docs?: {
    description?: string
    url?: string
    recommended?: boolean | 'error' | 'warn' | 'strict'
  }
  deprecated?: boolean
}

export interface IRuleModule {
  meta?: IRuleModuleMeta
}

export type IRuleModuleRecord = Record<string, IRuleModule>

export type IRuleModuleMap = Map<string, IRuleModule>

/* Rule */
export type IRuleConfig = string | number | any[]

export interface IRule {
  rules: {
    [key: string]: IRuleConfig
  }
}

export type IRuleRecord = Record<string, IRule>

export interface IRuleMeta {
  name: string
  value: IRuleConfig
  comment: string
}
