import fs from 'fs'
import chalk from 'chalk'
import pkg from '@ttionya/eslint-config/package.json'
import { PATH_DIST, DIR_DIST } from '@ttionya/eslint-config/libs/constants'
import { globSync } from '@ttionya/eslint-config/libs/utils/glob'

copyDistToRoot()

/**
 * 复制输出文件夹的文件到根目录
 * 同时会标记版本号
 */
function copyDistToRoot(): void {
  const distFiles = globSync(`${PATH_DIST}/*`)

  distFiles.forEach((path) => {
    const content = fs.readFileSync(path, 'utf-8')
    const replacedContent = content.replace('__VERSION__', pkg.version)

    fs.writeFileSync(path.replace(DIR_DIST, ''), replacedContent, 'utf-8')

    console.log(`${chalk.blue(path)} has replaced.`)
  })
}
