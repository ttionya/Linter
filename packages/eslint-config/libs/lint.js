const path = require('path')

const testsPath = path.join(__dirname, '../tests')
const config = getConfig({
  base: require(path.join(testsPath, 'base')),
  typescript: require(path.join(testsPath, 'typescript')),
})

module.exports = config

/**
 * 获得配置
 * @param {Object} usedNamespaceMap
 * @return {Object}
 */
function getConfig(usedNamespaceMap) {
  return Object.entries(usedNamespaceMap).reduce((last, [namespaceName, rulesMap]) => {
    const template = require(`${testsPath}/${namespaceName}/eslintrc.tpl`)

    // 注入规则
    if (template.rules) {
      template.rules = getRules(rulesMap)
    } else if (template.overrides?.length) {
      template.overrides[0].rules = getRules(rulesMap)
    }

    return { ...last, ...template }
  }, {})
}

/**
 * 获得规则对象
 * @param {Object} rulesMap
 * @return {Object}
 */
function getRules(rulesMap) {
  return Object.entries(rulesMap).reduce((last, [_, rule]) => ({ ...last, ...rule.rules }), {})
}
