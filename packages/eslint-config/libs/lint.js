const path = require('path')
const { lstatSync } = require('fs')
const { sync: globSync } = require('glob')

const root = path.join(__dirname, '..')
const USED_NAMESPACE_NAME = ['base', 'typescript']

const output = USED_NAMESPACE_NAME.reduce((data, namespaceName) => {
  const template = require(path.join(root, `tests/${namespaceName}/template.js`))

  // 注入规则
  if (template.rules) {
    template.rules = getRules(namespaceName)
  } else if (template.overrides?.length) {
    template.overrides[0].rules = getRules(namespaceName)
  }

  return { ...data, ...template }
}, {})

module.exports = output

/**
 * 获得规则对象
 * @param {string} namespaceName
 * @return {Object}
 */
function getRules(namespaceName) {
  const ruleList = globSync(getGlobPath(path.join(root, `tests/${namespaceName}/*`)))

  return ruleList
    .filter((rulePath) => {
      return lstatSync(rulePath).isDirectory()
    })
    .map((rulePath) => {
      return require(`${rulePath}/.eslintrc.js`).rules
    })
    .reduce((last, current) => {
      return { ...last, ...current }
    }, {})
}

/**
 * 获得 glob 使用的 path，必须使用 / 而不能是 \
 * @param {string} path
 * @return {string}
 */
function getGlobPath(path) {
  return path.replace(/\\/g, '/')
}
