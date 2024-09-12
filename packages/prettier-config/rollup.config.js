import path from 'node:path'
import typescript from '@rollup/plugin-typescript'
import { glob } from 'glob'

export default glob.sync('src/*.ts').map(generateConfig)

function generateConfig(file) {
  const distDir = 'dist'
  const basename = path.basename(file).replace(path.extname(file), '')

  return {
    input: file,
    output: [
      {
        file: `${distDir}/${basename}.cjs`,
        format: 'cjs',
      },
      {
        file: `${distDir}/${basename}.mjs`,
        format: 'esm',
      },
    ],
    external: ['deepmerge'],
    plugins: [
      typescript({
        declarationDir: distDir,
      }),
    ],
  }
}
