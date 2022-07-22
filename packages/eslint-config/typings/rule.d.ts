export interface IRuleMeta {
  docs?: {
    description?: string
    url?: string
    recommended?: boolean | 'error' | 'warn' | 'strict'
  }
  deprecated?: boolean
}

export interface IRuleModule {
  meta?: IRuleMeta
}

export type IRuleModuleRecord = Record<string, IRuleModule>

export type IRuleModuleMap = Map<string, IRuleModule>
