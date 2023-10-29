import deepmerge from 'deepmerge'
import type { Config } from 'prettier'

/**
 * Define config
 *
 * @param {Config} config
 * @returns {Config}
 */
export const defineConfig = <T extends Config>(config: T): T => config

/**
 * Merge two configs
 *
 * @param {Config} config1
 * @param {Config} config2
 * @param {deepmerge.Options} options
 * @returns {Config}
 */
export const mergeConfig = <T extends Config>(
  config1: T,
  config2: T,
  options?: deepmerge.Options
): T => {
  return deepmerge<T, T>(config1, config2, options)
}

/**
 * Merge multiple configs
 *
 * @param {Config[]} configs
 * @param {deepmerge.Options} options
 * @returns {Config}
 */
export const mergeConfigs = <T extends Config>(configs: T[], options?: deepmerge.Options): T => {
  return deepmerge.all<T>(configs, options)
}
