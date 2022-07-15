import glob from 'glob'

/**
 * 转换 glob 的模式
 * 只能识别 / 而不能识别 \
 */
export const transformGlobPattern = (pattern: string): string => {
  return pattern.replace(/\\/g, '/')
}

/**
 * 经过转换的 globSync 方法
 */
export const globSync = (pattern: string): string[] => {
  return glob.sync(transformGlobPattern(pattern))
}
