/**
 * ESLint rules.
 * https://github.com/ttionya/Linter/tree/master/packages/eslint-config#readme
 *
 * Author: ttionya <git@ttionya.com>
 * Version: __VERSION__
 *
 * 本文件由脚本自动生成，请勿修改
 */
module.exports = {
  root: true,

  env: {
    browser: true,
    commonjs: true,
    es2022: true,
    node: true,
  },

  extends: ['eslint:recommended'],

  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
    ecmaFeatures: {
      // 不允许 return 语句出现在 global 环境下
      globalReturn: false,
      // 使用全局严格模式
      impliedStrict: true,
      // 启用 jsx 支持
      jsx: true,
    },
  },

  // 标示行内注释未使用的情况
  reportUnusedDisableDirectives: true,

  rules: {
    /**
     * setter 必须有对应的 getter，getter 可以没有对应的 setter
     * @see {@link https://eslint.org/docs/latest/rules/accessor-pairs}
     * @category Base
     */
    'accessor-pairs': [
      'error',
      {
        setWithoutGet: true,
        getWithoutSet: false,
        enforceForClassMembers: true,
      },
    ],

    /**
     * 数组的方法除了 forEach 之外，回调函数必须有返回值
     * @see {@link https://eslint.org/docs/latest/rules/array-callback-return}
     * @category Base
     */
    'array-callback-return': [
      'error',
      {
        allowImplicit: false,
        checkForEach: false,
      },
    ],

    /**
     * 箭头函数体必须由大括号包裹
     * @see {@link https://eslint.org/docs/latest/rules/arrow-body-style}
     * @category Base
     * @reason 自由一些
     * @fixable
     */
    'arrow-body-style': 'off',

    /**
     * 将 var 定义的变量视为块作用域，禁止在块外使用
     * @see {@link https://eslint.org/docs/latest/rules/block-scoped-var}
     * @category Base
     * @reason 禁止使用 var
     */
    'block-scoped-var': 'off',

    /**
     * 变量名必须是 camelCase 风格的
     * @see {@link https://eslint.org/docs/latest/rules/camelcase}
     * @category Base
     * @reason 很多时候不是 camelCase 风格的
     */
    camelcase: 'off',

    /**
     * 注释的首字母必须大写
     * @see {@link https://eslint.org/docs/latest/rules/capitalized-comments}
     * @category Base
     * @fixable
     */
    'capitalized-comments': 'off',

    /**
     * 在类的非静态方法中，必须存在对 this 的引用
     * @see {@link https://eslint.org/docs/latest/rules/class-methods-use-this}
     * @category Base
     */
    'class-methods-use-this': 'off',

    /**
     * 限制函数的循环复杂度
     * @see {@link https://eslint.org/docs/latest/rules/complexity}
     * @category Base
     */
    complexity: [
      'error',
      {
        max: 20,
      },
    ],

    /**
     * 禁止函数在不同分支返回不同类型的值
     * @see {@link https://eslint.org/docs/latest/rules/consistent-return}
     * @category Base
     */
    'consistent-return': 'off',

    /**
     * 限制 this 的别名
     * @see {@link https://eslint.org/docs/latest/rules/consistent-this}
     * @category Base
     */
    'consistent-this': 'off',

    /**
     * switch 必须使用 default，即使为空也要有注释
     * @see {@link https://eslint.org/docs/latest/rules/default-case}
     * @category Base
     */
    'default-case': 'error',

    /**
     * switch 语句中的 default 必须在最后
     * @see {@link https://eslint.org/docs/latest/rules/default-case-last}
     * @category Base
     */
    'default-case-last': 'error',

    /**
     * 有默认值的参数必须放在函数参数的末尾
     * @see {@link https://eslint.org/docs/latest/rules/default-param-last}
     * @category Base
     */
    'default-param-last': 'error',

    /**
     * 禁止使用 foo['bar']，必须写成 foo.bar
     * @see {@link https://eslint.org/docs/latest/rules/dot-notation}
     * @category Base
     * @reason 有时可以统一属性写法
     * @fixable
     */
    'dot-notation': 'off',

    /**
     * 必须使用 === 或 !==，禁止使用 == 或 !=
     * @see {@link https://eslint.org/docs/latest/rules/eqeqeq}
     * @category Base
     * @fixable
     */
    eqeqeq: ['error', 'always'],

    /**
     * 函数赋值给变量的时候，函数名必须与变量名一致
     * @see {@link https://eslint.org/docs/latest/rules/func-name-matching}
     * @category Base
     */
    'func-name-matching': [
      'error',
      'always',
      {
        considerPropertyDescriptor: false,
        includeCommonJSModuleExports: false,
      },
    ],

    /**
     * 函数必须有名字
     * @see {@link https://eslint.org/docs/latest/rules/func-names}
     * @category Base
     */
    'func-names': 'off',

    /**
     * 必须只使用函数声明或只使用函数表达式
     * @see {@link https://eslint.org/docs/latest/rules/func-style}
     * @category Base
     */
    'func-style': 'off',

    /**
     * setter 和 getter 必须写在一起
     * @see {@link https://eslint.org/docs/latest/rules/grouped-accessor-pairs}
     * @category Base
     */
    'grouped-accessor-pairs': ['error', 'getBeforeSet'],

    /**
     * for in 内部必须有 hasOwnProperty
     * @see {@link https://eslint.org/docs/latest/rules/guard-for-in}
     * @category Base
     */
    'guard-for-in': 'error',

    /**
     * 禁止使用指定的标识符
     * @see {@link https://eslint.org/docs/latest/rules/id-denylist}
     * @category Base
     */
    'id-denylist': 'off',

    /**
     * 限制变量名长度
     * @see {@link https://eslint.org/docs/latest/rules/id-length}
     * @category Base
     */
    'id-length': 'off',

    /**
     * 限制变量名必须匹配指定的正则表达式
     * @see {@link https://eslint.org/docs/latest/rules/id-match}
     * @category Base
     */
    'id-match': 'off',

    /**
     * 变量必须在定义的时候赋值
     * @see {@link https://eslint.org/docs/latest/rules/init-declarations}
     * @category Base
     */
    'init-declarations': 'off',

    /**
     * 单行注释必须写在上一行
     * @see {@link https://eslint.org/docs/latest/rules/line-comment-position}
     * @category Base
     */
    'line-comment-position': 'off',

    /**
     * 类的成员之间需要空行
     * @see {@link https://eslint.org/docs/latest/rules/lines-between-class-members}
     * @category Base
     * @fixable
     */
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: false,
      },
    ],

    /**
     * 使用简写的逻辑赋值运算符
     * @see {@link https://eslint.org/docs/latest/rules/logical-assignment-operators}
     * @category Base
     * @fixable
     */
    'logical-assignment-operators': 'off',

    /**
     * 限制一个文件中类的数量
     * @see {@link https://eslint.org/docs/latest/rules/max-classes-per-file}
     * @category Base
     */
    'max-classes-per-file': 'off',

    /**
     * 代码块嵌套的深度禁止超过 6 层
     * @see {@link https://eslint.org/docs/latest/rules/max-depth}
     * @category Base
     */
    'max-depth': ['error', 6],

    /**
     * 限制一个文件最多的行数
     * @see {@link https://eslint.org/docs/latest/rules/max-lines}
     * @category Base
     */
    'max-lines': 'off',

    /**
     * 限制函数块中的代码行数
     * @see {@link https://eslint.org/docs/latest/rules/max-lines-per-function}
     * @category Base
     */
    'max-lines-per-function': 'off',

    /**
     * 回调函数嵌套禁止超过 6 层，多了请用 async await 替代
     * @see {@link https://eslint.org/docs/latest/rules/max-nested-callbacks}
     * @category Base
     */
    'max-nested-callbacks': ['error', 6],

    /**
     * 限制函数的参数数量
     * @see {@link https://eslint.org/docs/latest/rules/max-params}
     * @category Base
     */
    'max-params': 'off',

    /**
     * 限制函数块中的语句数量
     * @see {@link https://eslint.org/docs/latest/rules/max-statements}
     * @category Base
     */
    'max-statements': 'off',

    /**
     * 限制一行中的语句数量
     * @see {@link https://eslint.org/docs/latest/rules/max-statements-per-line}
     * @category Base
     */
    'max-statements-per-line': 'off',

    /**
     * 约束多行注释的格式
     * @see {@link https://eslint.org/docs/latest/rules/multiline-comment-style}
     * @category Base
     * @fixable
     */
    'multiline-comment-style': 'off',

    /**
     * new 后面的类名必须首字母大写
     * @see {@link https://eslint.org/docs/latest/rules/new-cap}
     * @category Base
     */
    'new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: false,
        properties: true,
      },
    ],

    /**
     * 禁止使用 alert confirm prompt
     * @see {@link https://eslint.org/docs/latest/rules/no-alert}
     * @category Base
     */
    'no-alert': 'error',

    /**
     * 禁止使用 Array 构造函数时传入的参数超过一个
     * @see {@link https://eslint.org/docs/latest/rules/no-array-constructor}
     * @category Base
     * @reason 参数为一个时表示创建一个指定长度的数组，比较常用，参数为多个时容易出现问题

     */
    'no-array-constructor': 'error',

    /**
     * 禁止将 await 写在循环里，因为这样就无法同时发送多个异步请求了
     * @see {@link https://eslint.org/docs/latest/rules/no-await-in-loop}
     * @category Base
     */
    'no-await-in-loop': 'error',

    /**
     * 禁止使用位运算
     * @see {@link https://eslint.org/docs/latest/rules/no-bitwise}
     * @category Base
     */
    'no-bitwise': 'off',

    /**
     * 禁止使用 caller 或 callee
     * @see {@link https://eslint.org/docs/latest/rules/no-caller}
     * @category Base
     * @reason 已废弃的语法
     */
    'no-caller': 'error',

    /**
     * 禁止使用 console
     * @see {@link https://eslint.org/docs/latest/rules/no-console}
     * @category Base
     */
    'no-console': 'off',

    /**
     * 禁止出现不影响值的表达式
     * @see {@link https://eslint.org/docs/latest/rules/no-constant-binary-expression}
     * @category Base
     */
    'no-constant-binary-expression': 'error',

    /**
     * 禁止将常量作为分支条件判断中的条件表达式，但允许作为循环条件判断中的条件表达式
     * @see {@link https://eslint.org/docs/latest/rules/no-constant-condition}
     * @category Base
     * @recommended
     * @reason 循环中可以根据条件中断循环
     */
    'no-constant-condition': [
      'error',
      {
        checkLoops: false,
      },
    ],

    /**
     * 禁止在构造函数中返回值
     * @see {@link https://eslint.org/docs/latest/rules/no-constructor-return}
     * @category Base
     */
    'no-constructor-return': 'error',

    /**
     * 禁止使用 continue
     * @see {@link https://eslint.org/docs/latest/rules/no-continue}
     * @category Base
     */
    'no-continue': 'off',

    /**
     * 禁止在正则表达式中出现形似除法操作符的开头，如 let a = /=foo/
     * @see {@link https://eslint.org/docs/latest/rules/no-div-regex}
     * @category Base
     * @reason 有代码高亮在不会出现歧义
     * @fixable
     */
    'no-div-regex': 'off',

    /**
     * 禁止重复导入模块
     * @see {@link https://eslint.org/docs/latest/rules/no-duplicate-imports}
     * @category Base
     */
    'no-duplicate-imports': [
      'error',
      {
        includeExports: false,
      },
    ],

    /**
     * 禁止在 else 内使用 return，必须改为提前结束
     * @see {@link https://eslint.org/docs/latest/rules/no-else-return}
     * @category Base
     * @reason else 中使用 return 可以使代码结构更清晰
     * @fixable
     */
    'no-else-return': 'off',

    /**
     * 不允许有空函数
     * @see {@link https://eslint.org/docs/latest/rules/no-empty-function}
     * @category Base
     */
    'no-empty-function': 'error',

    /**
     * 不允许有空的静态块
     * @see {@link https://eslint.org/docs/latest/rules/no-empty-static-block}
     * @category Base
     */
    'no-empty-static-block': 'error',

    /**
     * 禁止使用 foo == null，必须使用 foo === null
     * @see {@link https://eslint.org/docs/latest/rules/no-eq-null}
     * @category Base
     */
    'no-eq-null': 'error',

    /**
     * 禁止使用 eval
     * @see {@link https://eslint.org/docs/latest/rules/no-eval}
     * @category Base
     */
    'no-eval': [
      'error',
      {
        allowIndirect: true,
      },
    ],

    /**
     * 禁止修改原生对象
     * @see {@link https://eslint.org/docs/latest/rules/no-extend-native}
     * @category Base
     * @reason 修改原生对象可能会与将来版本的 js 冲突
     */
    'no-extend-native': 'error',

    /**
     * 禁止出现没必要的 bind
     * @see {@link https://eslint.org/docs/latest/rules/no-extra-bind}
     * @category Base
     * @fixable
     */
    'no-extra-bind': 'error',

    /**
     * 禁止出现没必要的 label
     * @see {@link https://eslint.org/docs/latest/rules/no-extra-label}
     * @category Base
     * @fixable
     */
    'no-extra-label': 'error',

    /**
     * 禁止不必要的分号
     * @see {@link https://eslint.org/docs/latest/rules/no-extra-semi}
     * @category Base
     * @recommended
     */
    'no-extra-semi': 'off',

    /**
     * 禁止难以理解的类型转换
     * @see {@link https://eslint.org/docs/latest/rules/no-implicit-coercion}
     * @category Base
     * @fixable
     */
    'no-implicit-coercion': [
      'error',
      {
        boolean: true,
        number: true,
        string: true,
        disallowTemplateShorthand: false,
        allow: ['!!', '~', '+'],
      },
    ],

    /**
     * 禁止在全局作用域下定义变量或申明函数
     * @see {@link https://eslint.org/docs/latest/rules/no-implicit-globals}
     * @category Base
     */
    'no-implicit-globals': 'off',

    /**
     * 禁止在 setTimeout 或 setInterval 中传入字符串
     * @see {@link https://eslint.org/docs/latest/rules/no-implied-eval}
     * @category Base
     */
    'no-implied-eval': 'error',

    /**
     * 禁止在代码后添加单行注释
     * @see {@link https://eslint.org/docs/latest/rules/no-inline-comments}
     * @category Base
     */
    'no-inline-comments': 'off',

    /**
     * 禁止在 if 代码块内出现函数声明和用 var 定义变量
     * @see {@link https://eslint.org/docs/latest/rules/no-inner-declarations}
     * @category Base
     * @recommended
     * @reason var 定义的变量存在变量提升
     */
    'no-inner-declarations': ['error', 'both'],

    /**
     * 禁止在类之外的地方使用 this
     * @see {@link https://eslint.org/docs/latest/rules/no-invalid-this}
     * @category Base
     * @reason 只允许在 class 和构造函数中使用 this
     */
    'no-invalid-this': [
      'error',
      {
        capIsConstructor: false,
      },
    ],

    /**
     * 禁止使用特殊空白符（比如全角空格），除非是出现在字符串、正则表达式或模版字符串中
     * @see {@link https://eslint.org/docs/latest/rules/no-irregular-whitespace}
     * @category Base
     * @recommended
     */
    'no-irregular-whitespace': [
      'error',
      {
        skipStrings: true,
        skipComments: true,
        skipRegExps: true,
        skipTemplates: true,
      },
    ],

    /**
     * 禁止使用 __iterator__
     * @see {@link https://eslint.org/docs/latest/rules/no-iterator}
     * @category Base
     * @reason __iterator__ 是一个已废弃的属性，使用 [Symbol.iterator] 替代
     */
    'no-iterator': 'error',

    /**
     * 禁止 label 名称与已定义的变量重复
     * @see {@link https://eslint.org/docs/latest/rules/no-label-var}
     * @category Base
     */
    'no-label-var': 'error',

    /**
     * 禁止使用 label
     * @see {@link https://eslint.org/docs/latest/rules/no-labels}
     * @category Base
     */
    'no-labels': [
      'error',
      {
        allowLoop: false,
        allowSwitch: false,
      },
    ],

    /**
     * 禁止使用没必要的 {} 作为代码块
     * @see {@link https://eslint.org/docs/latest/rules/no-lone-blocks}
     * @category Base
     */
    'no-lone-blocks': 'error',

    /**
     * 禁止 else 中只有一个单独的 if
     * @see {@link https://eslint.org/docs/latest/rules/no-lonely-if}
     * @category Base
     * @reason 单独的 if 可以把逻辑表达得更清楚
     * @fixable
     */
    'no-lonely-if': 'off',

    /**
     * 禁止在循环内的函数内部出现循环体条件语句中定义的变量
     * @see {@link https://eslint.org/docs/latest/rules/no-loop-func}
     * @category Base
     */
    'no-loop-func': 'off',

    /**
     * 禁止魔法数字
     * @see {@link https://eslint.org/docs/latest/rules/no-magic-numbers}
     * @category Base
     * @reason 不处理魔法数字
     */
    'no-magic-numbers': 'off',

    /**
     * 禁止在缩进中使用混合空格和制表符
     * @see {@link https://eslint.org/docs/latest/rules/no-mixed-spaces-and-tabs}
     * @category Base
     * @recommended
     */
    'no-mixed-spaces-and-tabs': 'off',

    /**
     * 禁止连续赋值
     * @see {@link https://eslint.org/docs/latest/rules/no-multi-assign}
     * @category Base
     */
    'no-multi-assign': [
      'error',
      {
        ignoreNonDeclaration: false,
      },
    ],

    /**
     * 禁止使用 \ 来换行字符串
     * @see {@link https://eslint.org/docs/latest/rules/no-multi-str}
     * @category Base
     */
    'no-multi-str': 'error',

    /**
     * 禁止 if 里有否定的表达式
     * @see {@link https://eslint.org/docs/latest/rules/no-negated-condition}
     * @category Base
     */
    'no-negated-condition': 'off',

    /**
     * 禁止使用嵌套的三元表达式
     * @see {@link https://eslint.org/docs/latest/rules/no-nested-ternary}
     * @category Base
     */
    'no-nested-ternary': 'off',

    /**
     * 禁止直接 new 一个类而不赋值
     * @see {@link https://eslint.org/docs/latest/rules/no-new}
     * @category Base
     * @reason new 应该作为创建一个类的实例的方法，所以不能不赋值
     */
    'no-new': 'error',

    /**
     * 禁止使用 new Function
     * @see {@link https://eslint.org/docs/latest/rules/no-new-func}
     * @category Base
     */
    'no-new-func': 'error',

    /**
     * 禁止 new 内置函数
     * @see {@link https://eslint.org/docs/latest/rules/no-new-native-nonconstructor}
     * @category Base
     */
    'no-new-native-nonconstructor': 'error',

    /**
     * 禁止直接 new Object
     * @see {@link https://eslint.org/docs/latest/rules/no-new-object}
     * @category Base
     */
    'no-new-object': 'error',

    /**
     * 禁止使用 new 来生成 String, Number 或 Boolean
     * @see {@link https://eslint.org/docs/latest/rules/no-new-wrappers}
     * @category Base
     */
    'no-new-wrappers': 'error',

    /**
     * 禁止使用八进制的转义符
     * @see {@link https://eslint.org/docs/latest/rules/no-octal-escape}
     * @category Base
     */
    'no-octal-escape': 'error',

    /**
     * 禁止对函数的参数重新赋值
     * @see {@link https://eslint.org/docs/latest/rules/no-param-reassign}
     * @category Base
     */
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],

    /**
     * 禁止使用 ++ 或 --
     * @see {@link https://eslint.org/docs/latest/rules/no-plusplus}
     * @category Base
     */
    'no-plusplus': 'off',

    /**
     * 禁止在 Promise 的回调函数中直接 return
     * @see {@link https://eslint.org/docs/latest/rules/no-promise-executor-return}
     * @category Base
     */
    'no-promise-executor-return': 'error',

    /**
     * 禁止使用 __proto__
     * @see {@link https://eslint.org/docs/latest/rules/no-proto}
     * @category Base
     * @reason __proto__ 是已废弃的语法
     */
    'no-proto': 'error',

    /**
     * 禁止使用 hasOwnProperty, isPrototypeOf 或 propertyIsEnumerable
     * @see {@link https://eslint.org/docs/latest/rules/no-prototype-builtins}
     * @category Base
     * @recommended
     * @reason hasOwnProperty 常用
     */
    'no-prototype-builtins': 'off',

    /**
     * 禁止重复定义
     * @see {@link https://eslint.org/docs/latest/rules/no-redeclare}
     * @category Base
     * @recommended
     * @reason 禁止使用 var
     */
    'no-redeclare': 'off',

    /**
     * 禁止导出指定的变量名
     * @see {@link https://eslint.org/docs/latest/rules/no-restricted-exports}
     * @category Base
     */
    'no-restricted-exports': 'off',

    /**
     * 禁止使用指定的全局变量
     * @see {@link https://eslint.org/docs/latest/rules/no-restricted-globals}
     * @category Base
     */
    'no-restricted-globals': 'off',

    /**
     * 禁止导入指定的模块
     * @see {@link https://eslint.org/docs/latest/rules/no-restricted-imports}
     * @category Base
     */
    'no-restricted-imports': 'off',

    /**
     * 禁止使用指定的对象属性
     * @see {@link https://eslint.org/docs/latest/rules/no-restricted-properties}
     * @category Base
     */
    'no-restricted-properties': 'off',

    /**
     * 禁止使用指定的语法
     * @see {@link https://eslint.org/docs/latest/rules/no-restricted-syntax}
     * @category Base
     */
    'no-restricted-syntax': 'off',

    /**
     * 禁止在 return 语句里赋值
     * @see {@link https://eslint.org/docs/latest/rules/no-return-assign}
     * @category Base
     */
    'no-return-assign': ['error', 'except-parens'],

    /**
     * 禁止在 return 语句里使用 await
     * @see {@link https://eslint.org/docs/latest/rules/no-return-await}
     * @category Base
     */
    'no-return-await': 'error',

    /**
     * 禁止出现 javascript:
     * @see {@link https://eslint.org/docs/latest/rules/no-script-url}
     * @category Base
     * @reason 有可能需要出现这样的场景
     */
    'no-script-url': 'off',

    /**
     * 禁止将自己与自己比较
     * @see {@link https://eslint.org/docs/latest/rules/no-self-compare}
     * @category Base
     */
    'no-self-compare': 'error',

    /**
     * 禁止使用逗号操作符
     * @see {@link https://eslint.org/docs/latest/rules/no-sequences}
     * @category Base
     */
    'no-sequences': [
      'error',
      {
        allowInParentheses: true,
      },
    ],

    /**
     * 禁止变量名与上层作用域内的已定义的变量重复
     * @see {@link https://eslint.org/docs/latest/rules/no-shadow}
     * @category Base
     * @reason 很多时候函数的形参和传参是同名的
     */
    'no-shadow': 'off',

    /**
     * 禁止在普通字符串中出现模版字符串里的变量形式
     * @see {@link https://eslint.org/docs/latest/rules/no-template-curly-in-string}
     * @category Base
     * @reason 防止出错
     */
    'no-template-curly-in-string': 'error',

    /**
     * 禁止使用三元表达式
     * @see {@link https://eslint.org/docs/latest/rules/no-ternary}
     * @category Base
     */
    'no-ternary': 'off',

    /**
     * 禁止 throw 字面量，必须 throw 一个 Error 对象
     * @see {@link https://eslint.org/docs/latest/rules/no-throw-literal}
     * @category Base
     */
    'no-throw-literal': 'error',

    /**
     * 禁止将 undefined 赋值给变量
     * @see {@link https://eslint.org/docs/latest/rules/no-undef-init}
     * @category Base
     * @fixable
     */
    'no-undef-init': 'error',

    /**
     * 禁止使用 undefined
     * @see {@link https://eslint.org/docs/latest/rules/no-undefined}
     * @category Base
     */
    'no-undefined': 'off',

    /**
     * 禁止变量名出现下划线
     * @see {@link https://eslint.org/docs/latest/rules/no-underscore-dangle}
     * @category Base
     */
    'no-underscore-dangle': 'off',

    /**
     * 禁止混淆多行表达式
     * @see {@link https://eslint.org/docs/latest/rules/no-unexpected-multiline}
     * @category Base
     * @recommended
     */
    'no-unexpected-multiline': 'off',

    /**
     * 循环内必须对循环条件中的变量有修改
     * @see {@link https://eslint.org/docs/latest/rules/no-unmodified-loop-condition}
     * @category Base
     */
    'no-unmodified-loop-condition': 'error',

    /**
     * 必须使用 !a 替代 a ? false : true
     * @see {@link https://eslint.org/docs/latest/rules/no-unneeded-ternary}
     * @category Base
     * @fixable
     */
    'no-unneeded-ternary': [
      'error',
      {
        defaultAssignment: true,
      },
    ],

    /**
     * 禁止在第一轮循环时就一定会退出循环的情况出现
     * @see {@link https://eslint.org/docs/latest/rules/no-unreachable-loop}
     * @category Base
     */
    'no-unreachable-loop': [
      'error',
      {
        ignore: [],
      },
    ],

    /**
     * 禁止无用的表达式
     * @see {@link https://eslint.org/docs/latest/rules/no-unused-expressions}
     * @category Base
     */
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
        enforceForJSX: false,
      },
    ],

    /**
     * 禁止类出现未使用的私有成员
     * @see {@link https://eslint.org/docs/latest/rules/no-unused-private-class-members}
     * @category Base
     */
    'no-unused-private-class-members': 'error',

    /**
     * 已定义的变量必须使用
     * @see {@link https://eslint.org/docs/latest/rules/no-unused-vars}
     * @category Base
     * @recommended
     */
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        varsIgnorePattern: '^_',
        ignoreRestSiblings: false,
        argsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        caughtErrors: 'none',
      },
    ],

    /**
     * 变量必须先定义后使用
     * @see {@link https://eslint.org/docs/latest/rules/no-use-before-define}
     * @category Base
     * @reason 存在函数后调用的问题，特别是类中 field 无法直接使用当前类的类型
     */
    'no-use-before-define': 'off',

    /**
     * 禁止出现没必要的 call 或 apply
     * @see {@link https://eslint.org/docs/latest/rules/no-useless-call}
     * @category Base
     */
    'no-useless-call': 'error',

    /**
     * 禁止出现没必要的计算键名
     * @see {@link https://eslint.org/docs/latest/rules/no-useless-computed-key}
     * @category Base
     * @fixable
     */
    'no-useless-computed-key': [
      'error',
      {
        enforceForClassMembers: true,
      },
    ],

    /**
     * 禁止出现没必要的字符串连接
     * @see {@link https://eslint.org/docs/latest/rules/no-useless-concat}
     * @category Base
     */
    'no-useless-concat': 'error',

    /**
     * 禁止出现没必要的 constructor
     * @see {@link https://eslint.org/docs/latest/rules/no-useless-constructor}
     * @category Base
     */
    'no-useless-constructor': 'error',

    /**
     * 禁止解构赋值时出现同样名字的的重命名，比如 let { foo: foo } = bar
     * @see {@link https://eslint.org/docs/latest/rules/no-useless-rename}
     * @category Base
     * @fixable
     */
    'no-useless-rename': [
      'error',
      {
        ignoreImport: false,
        ignoreExport: false,
        ignoreDestructuring: false,
      },
    ],

    /**
     * 禁止没必要的 return
     * @see {@link https://eslint.org/docs/latest/rules/no-useless-return}
     * @category Base
     * @fixable
     */
    'no-useless-return': 'error',

    /**
     * 禁止使用 var
     * @see {@link https://eslint.org/docs/latest/rules/no-var}
     * @category Base
     * @fixable
     */
    'no-var': 'error',

    /**
     * 禁止使用 void
     * @see {@link https://eslint.org/docs/latest/rules/no-void}
     * @category Base
     */
    'no-void': [
      'error',
      {
        allowAsStatement: true,
      },
    ],

    /**
     * 禁止注释中出现 TODO 和 FIXME
     * @see {@link https://eslint.org/docs/latest/rules/no-warning-comments}
     * @category Base
     */
    'no-warning-comments': 'off',

    /**
     * 必须使用 a = {b} 而不是 a = {b: b}
     * @see {@link https://eslint.org/docs/latest/rules/object-shorthand}
     * @category Base
     * @fixable
     */
    'object-shorthand': 'off',

    /**
     * 禁止变量申明时用逗号一次申明多个
     * @see {@link https://eslint.org/docs/latest/rules/one-var}
     * @category Base
     * @fixable
     */
    'one-var': ['error', 'never'],

    /**
     * 必须使用 x = x + y 而不是 x += y
     * @see {@link https://eslint.org/docs/latest/rules/operator-assignment}
     * @category Base
     * @fixable
     */
    'operator-assignment': 'off',

    /**
     * 限制语句之间的空行规则
     * @category Base
     * @fixable
     */
    'padding-line-between-statements': 'off',

    /**
     * 回调函数必须使用箭头函数
     * @see {@link https://eslint.org/docs/latest/rules/prefer-arrow-callback}
     * @category Base
     * @fixable
     */
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],

    /**
     * 申明后不再被修改的变量必须使用 const 来申明
     * @see {@link https://eslint.org/docs/latest/rules/prefer-const}
     * @category Base
     * @fixable
     */
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],

    /**
     * 必须使用解构赋值
     * @see {@link https://eslint.org/docs/latest/rules/prefer-destructuring}
     * @category Base
     * @fixable
     */
    'prefer-destructuring': 'off',

    /**
     * 使用 ES2016 的语法 ** 替代 Math.pow
     * @see {@link https://eslint.org/docs/latest/rules/prefer-exponentiation-operator}
     * @category Base
     * @fixable
     */
    'prefer-exponentiation-operator': 'off',

    /**
     * 使用 ES2018 中的正则表达式命名组
     * @see {@link https://eslint.org/docs/latest/rules/prefer-named-capture-group}
     * @category Base
     */
    'prefer-named-capture-group': 'off',

    /**
     * 禁用 parseInt 而使用二进制、八进制、十六进制
     * @see {@link https://eslint.org/docs/latest/rules/prefer-numeric-literals}
     * @category Base
     * @fixable
     */
    'prefer-numeric-literals': 'off',

    /**
     * 使用 Object.hasOwn() 而不是 Object.prototype.hasOwnProperty.call()
     * @see {@link https://eslint.org/docs/latest/rules/prefer-object-has-own}
     * @category Base
     * @fixable
     */
    'prefer-object-has-own': 'error',

    /**
     * 必须使用 ... 而不是 Object.assign，除非 Object.assign 的第一个参数是一个变量
     * @see {@link https://eslint.org/docs/latest/rules/prefer-object-spread}
     * @category Base
     * @fixable
     */
    'prefer-object-spread': 'error',

    /**
     * Promise 的 reject 中必须传入 Error 对象，而不是字面量
     * @see {@link https://eslint.org/docs/latest/rules/prefer-promise-reject-errors}
     * @category Base
     */
    'prefer-promise-reject-errors': 'off',

    /**
     * 优先使用正则表达式字面量，而不是 RegExp 构造函数
     * @see {@link https://eslint.org/docs/latest/rules/prefer-regex-literals}
     * @category Base
     */
    'prefer-regex-literals': [
      'error',
      {
        disallowRedundantWrapping: false,
      },
    ],

    /**
     * 必须使用 ...args 而不是 arguments
     * @see {@link https://eslint.org/docs/latest/rules/prefer-rest-params}
     * @category Base
     */
    'prefer-rest-params': 'off',

    /**
     * 必须使用 ... 而不是 apply
     * @see {@link https://eslint.org/docs/latest/rules/prefer-spread}
     * @category Base
     */
    'prefer-spread': 'off',

    /**
     * 必须使用模版字符串而不是字符串连接
     * @see {@link https://eslint.org/docs/latest/rules/prefer-template}
     * @category Base
     * @fixable
     */
    'prefer-template': 'off',

    /**
     * parseInt 必须传入第二个参数
     * @see {@link https://eslint.org/docs/latest/rules/radix}
     * @category Base
     */
    radix: ['error', 'as-needed'],

    /**
     * 禁止将 await 或 yield 的结果做为运算符的后面项
     * @see {@link https://eslint.org/docs/latest/rules/require-atomic-updates}
     * @category Base
     */
    'require-atomic-updates': [
      'error',
      {
        allowProperties: false,
      },
    ],

    /**
     * async 函数中必须存在 await 语句
     * @see {@link https://eslint.org/docs/latest/rules/require-await}
     * @category Base
     */
    'require-await': 'off',

    /**
     * 正则表达式中必须要加上 u 标志
     * @see {@link https://eslint.org/docs/latest/rules/require-unicode-regexp}
     * @category Base
     */
    'require-unicode-regexp': 'off',

    /**
     * 导入必须按规则排序
     * @see {@link https://eslint.org/docs/latest/rules/sort-imports}
     * @category Base
     * @fixable
     */
    'sort-imports': 'off',

    /**
     * 对象字面量的键名必须排好序
     * @see {@link https://eslint.org/docs/latest/rules/sort-keys}
     * @category Base
     */
    'sort-keys': 'off',

    /**
     * 变量申明必须排好序
     * @see {@link https://eslint.org/docs/latest/rules/sort-vars}
     * @category Base
     * @fixable
     */
    'sort-vars': 'off',

    /**
     * 注释的斜线或 * 后必须有空格
     * @see {@link https://eslint.org/docs/latest/rules/spaced-comment}
     * @category Base
     * @fixable
     */
    'spaced-comment': ['error', 'always'],

    /**
     * 根据情况使用严格模式
     * @see {@link https://eslint.org/docs/latest/rules/strict}
     * @category Base
     * @fixable
     */
    strict: ['error', 'safe'],

    /**
     * 创建 Symbol 时必须传入参数
     * @see {@link https://eslint.org/docs/latest/rules/symbol-description}
     * @category Base
     */
    'symbol-description': 'error',

    /**
     * var 必须在作用域的最前面
     * @see {@link https://eslint.org/docs/latest/rules/vars-on-top}
     * @category Base
     */
    'vars-on-top': 'error',

    /**
     * 必须使用 if (foo === 5) 而不是 if (5 === foo)
     * @see {@link https://eslint.org/docs/latest/rules/yoda}
     * @category Base
     * @fixable
     */
    yoda: [
      'error',
      'never',
      {
        onlyEquality: true,
      },
    ],
  },
}
