import chalk from 'chalk'
import { sync as rimrafSync } from 'rimraf'
import { sync as mkdirpSync } from 'mkdirp'
import { NAMESPACE, PATH_DIST } from '@ttionya/eslint-config/libs/constants'
import Generator from '@ttionya/eslint-config/libs/utils/generator'
import Check from '@ttionya/eslint-config/libs/utils/check'

const generator = new Generator()
const check = new Check()

// 移除 dist 目录
rimrafSync(PATH_DIST)

// 新建 dist 目录
mkdirpSync(PATH_DIST)

// 生成配置文件
NAMESPACE.forEach((namespace) => generator.generate(namespace))

// 生成清单文件
check.generateManifest(check.getCheckResultRecord())

console.log(chalk.green('done'))
