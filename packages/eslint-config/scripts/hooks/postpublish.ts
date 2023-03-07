import chalk from 'chalk'
import { sync as rimrafSync } from 'rimraf'
import { PATH_DIST, DIR_DIST } from '@ttionya/eslint-config/libs/constants'
import { globSync } from '@ttionya/eslint-config/libs/utils/glob'

removeDistFromRoot()

/**
 * 移除发布时移动到根目录的输出文件
 */
function removeDistFromRoot(): void {
  const distFiles = globSync(`${PATH_DIST}/*`)

  distFiles.forEach((path) => {
    const pathAtRoot = path.replace(`/${DIR_DIST}`, '')

    rimrafSync(pathAtRoot)

    console.log(`${chalk.blue(pathAtRoot)} has been deleted.`)
  })
}
