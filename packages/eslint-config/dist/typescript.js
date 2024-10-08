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
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.mts', '*.cts'],

      plugins: ['@typescript-eslint'],

      extends: ['plugin:@typescript-eslint/recommended'],

      parser: '@typescript-eslint/parser',

      rules: {
        /**
         * 函数重载签名必须连续
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md}
         * @category TypeScript
         */
        '@typescript-eslint/adjacent-overload-signatures': 'error',

        /**
         * 限制数组类型必须使用 Array<T> 或 T[]
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/array-type.md}
         * @category TypeScript
         * @fixable
         */
        '@typescript-eslint/array-type': [
          'error',
          {
            default: 'array-simple',
            readonly: 'array-simple',
          },
        ],

        /**
         * 禁止使用 tslint 注释
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/ban-tslint-comment.md}
         * @category TypeScript
         * @reason 使用 eslint 替代 tslint
         * @fixable
         */
        '@typescript-eslint/ban-tslint-comment': 'error',

        /**
         * 类的只读属性若是一个字面量，则必须使用只读属性而不是 getter
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/class-literal-property-style.md}
         * @category TypeScript
         * @fixable
         */
        '@typescript-eslint/class-literal-property-style': ['error', 'fields'],

        /**
         * 在类的非静态方法中，必须存在对 this 的引用
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/class-methods-use-this.md}
         * @category TypeScript
         */
        '@typescript-eslint/class-methods-use-this': 'off',

        /**
         * 使用 Map 或 Set 时，必须在构造函数上用泛型定义类型
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/consistent-generic-constructors.md}
         * @category TypeScript
         * @fixable
         */
        '@typescript-eslint/consistent-generic-constructors': ['error', 'constructor'],

        /**
         * 必须使用内置的 Record<K, T> 来描述仅包含可索引成员的接口
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/consistent-indexed-object-style.md}
         * @category TypeScript
         * @fixable
         */
        '@typescript-eslint/consistent-indexed-object-style': 'off',

        /**
         * 类型断言必须使用 as Type，禁止使用 <Type>，允许对参数中的对象字面量进行类型断言（其他情况下断言成 any 是允许的）
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/consistent-type-assertions.md}
         * @category TypeScript
         * @reason <Type> 容易被理解为 jsx
         */
        '@typescript-eslint/consistent-type-assertions': [
          'error',
          {
            assertionStyle: 'as',
            objectLiteralTypeAssertions: 'allow-as-parameter',
          },
        ],

        /**
         * 优先使用 interface 而不是 type
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/consistent-type-definitions.md}
         * @category TypeScript
         * @reason interface 可以 implement, extend 和 merge
         * @fixable
         */
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

        /**
         * 一致的类型导出语法
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/consistent-type-exports.md}
         * @category TypeScript
         * @fixable
         * @requires-type-information
         */
        '@typescript-eslint/consistent-type-exports': [
          'error',
          {
            fixMixedExportsWithInlineTypeSpecifier: false,
          },
        ],

        /**
         * 必须使用 import type 导入类型
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/consistent-type-imports.md}
         * @category TypeScript
         * @fixable
         */
        '@typescript-eslint/consistent-type-imports': 'off',

        /**
         * 强制可选或带默认值的参数在最后
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/default-param-last.md}
         * @category TypeScript
         */
        '@typescript-eslint/default-param-last': 'error',

        /**
         * 禁止使用 foo['bar']，必须写成 foo.bar
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/dot-notation.md}
         * @category TypeScript
         * @reason 有时可以统一属性写法
         * @fixable
         * @requires-type-information
         */
        '@typescript-eslint/dot-notation': 'off',

        /**
         * 函数返回值必须与声明的类型一致
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/explicit-function-return-type.md}
         * @category TypeScript
         * @reason 可以更清晰地分辨函数的返回值
         */
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {
            allowExpressions: false,
            allowTypedFunctionExpressions: true,
            allowHigherOrderFunctions: true,
            allowDirectConstAssertionInArrowFunctions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: true,
          },
        ],

        /**
         * 必须设置类的成员的可访问性
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md}
         * @category TypeScript
         * @reason 将不需要公开的成员设为私有的，可以增强代码的可理解性，对文档输出也很友好
         * @fixable
         */
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          {
            accessibility: 'explicit',
            overrides: {
              accessors: 'explicit',
              constructors: 'no-public',
              methods: 'explicit',
              properties: 'off',
              parameterProperties: 'explicit',
            },
          },
        ],

        /**
         * 导出的函数或类中的 public 方法必须定义输入输出参数的类型
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md}
         * @category TypeScript
         * @reason 使用 explicit-function-return-type 替代该规则
         */
        '@typescript-eslint/explicit-module-boundary-types': 'off',

        /**
         * 变量必须在定义的时候赋值
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/init-declarations.md}
         * @category TypeScript
         */
        '@typescript-eslint/init-declarations': 'off',

        /**
         * 类的成员之间是否需要空行
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/lines-between-class-members.md}
         * @category TypeScript
         * @reason 重载方法不需要空行
         * @fixable
         */
        '@typescript-eslint/lines-between-class-members': [
          'error',
          'always',
          {
            exceptAfterSingleLine: false,
            exceptAfterOverload: true,
          },
        ],

        /**
         * 限制函数的参数数量
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/max-params.md}
         * @category TypeScript
         */
        '@typescript-eslint/max-params': 'off',

        /**
         * 指定类成员的排序规则
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/member-ordering.md}
         * @category TypeScript
         * @reason 优先级：
         *          1. static > instance
         *          2. field > constructor > method
         *          3. public > protected > private
         */
        '@typescript-eslint/member-ordering': [
          'error',
          {
            default: [
              'public-static-field',
              'protected-static-field',
              'private-static-field',
              'static-field',
              'public-static-method',
              'protected-static-method',
              'private-static-method',
              'static-method',
              'public-instance-field',
              'protected-instance-field',
              'private-instance-field',
              'public-field',
              'protected-field',
              'private-field',
              'instance-field',
              'field',
              'constructor',
              'public-instance-method',
              'protected-instance-method',
              'private-instance-method',
              'public-method',
              'protected-method',
              'private-method',
              'instance-method',
              'method',
            ],
          },
        ],

        /**
         * 接口中的方法必须用属性的方式定义
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/method-signature-style.md}
         * @category TypeScript
         * @fixable
         */
        '@typescript-eslint/method-signature-style': ['error', 'property'],

        /**
         * 限制各种变量或类型的命名规则
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/naming-convention.md}
         * @category TypeScript
         * @requires-type-information
         */
        '@typescript-eslint/naming-convention': 'off',

        /**
         * 禁止对数组使用 `delete` 运算符
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-array-delete.md}
         * @category TypeScript
         * @requires-type-information
         */
        '@typescript-eslint/no-array-delete': 'error',

        /**
         * 要求更有意义的 toString()
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-base-to-string.md}
         * @category TypeScript
         * @requires-type-information
         */
        '@typescript-eslint/no-base-to-string': 'off',

        /**
         * 禁止使用容易混淆的非空断言
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-confusing-non-null-assertion.md}
         * @category TypeScript
         * @fixable
         */
        '@typescript-eslint/no-confusing-non-null-assertion': 'off',

        /**
         * 禁止使用返回值为 void 的函数的返回值
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-confusing-void-expression.md}
         * @category TypeScript
         * @fixable
         * @requires-type-information
         */
        '@typescript-eslint/no-confusing-void-expression': 'off',

        /**
         * 禁止类中存在重复的属性和方法
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-dupe-class-members.md}
         * @category TypeScript
         */
        '@typescript-eslint/no-dupe-class-members': 'error',

        /**
         * 禁止枚举类型存在两个相同的值
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-duplicate-enum-values.md}
         * @category TypeScript
         */
        '@typescript-eslint/no-duplicate-enum-values': 'error',

        /**
         * 禁止 delete 时传入的 key 是动态的
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-dynamic-delete.md}
         * @category TypeScript
         * @fixable
         */
        '@typescript-eslint/no-dynamic-delete': 'off',

        /**
         * 不允许有空函数
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-empty-function.md}
         * @category TypeScript
         */
        '@typescript-eslint/no-empty-function': 'error',

        /**
         * 禁止定义空的接口
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-empty-interface.md}
         * @category TypeScript
         * @recommended
         * @fixable
         */
        '@typescript-eslint/no-empty-interface': [
          'error',
          {
            allowSingleExtends: true,
          },
        ],

        /**
         * 禁止使用 any
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-explicit-any.md}
         * @category TypeScript
         * @recommended
         * @fixable
         */
        '@typescript-eslint/no-explicit-any': 'off',

        /**
         * 禁止定义没必要的类，比如只有静态方法的类
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-extraneous-class.md}
         * @category TypeScript
         */
        '@typescript-eslint/no-extraneous-class': 'off',

        /**
         * 禁止调用 Promise 时没有处理异常情况
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-floating-promises.md}
         * @category TypeScript
         * @recommended
         * @requires-type-information
         */
        '@typescript-eslint/no-floating-promises': 'off',

        /**
         * 禁止带副作用的导入
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-import-type-side-effects.md}
         * @category TypeScript
         * @fixable
         */
        '@typescript-eslint/no-import-type-side-effects': 'error',

        /**
         * 禁止对初始化为数字、字符串或布尔等直接字面量的变量或参数进行显式类型声明
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-inferrable-types.md}
         * @category TypeScript
         * @fixable
         */
        '@typescript-eslint/no-inferrable-types': [
          'error',
          {
            ignoreParameters: true,
            ignoreProperties: true,
          },
        ],

        /**
         * 禁止在类之外的地方使用 this
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-invalid-this.md}
         * @category TypeScript
         */
        '@typescript-eslint/no-invalid-this': [
          'error',
          {
            capIsConstructor: true,
          },
        ],

        /**
         * 禁止使用无意义的 void 类型
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-invalid-void-type.md}
         * @category TypeScript
         */
        '@typescript-eslint/no-invalid-void-type': [
          'error',
          {
            allowInGenericTypeArguments: true,
            allowAsThisParameter: false,
          },
        ],

        /**
         * 禁止在循环内的函数内部出现循环体条件语句中定义的变量
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-loop-func.md}
         * @category TypeScript
         */
        '@typescript-eslint/no-loop-func': 'off',

        /**
         * 禁止魔法数字
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-magic-numbers.md}
         * @category TypeScript
         * @reason 不处理魔法数字
         */
        '@typescript-eslint/no-magic-numbers': 'off',

        /**
         * 禁止 void 抛出空
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-meaningless-void-operator.md}
         * @category TypeScript
         * @fixable
         * @requires-type-information
         */
        '@typescript-eslint/no-meaningless-void-operator': 'off',

        /**
         * 禁止枚举同时有字符串和数字成员
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-mixed-enums.md}
         * @category TypeScript
         * @requires-type-information
         */
        '@typescript-eslint/no-mixed-enums': 'error',

        /**
         * 禁止使用 namespace 来定义命名空间
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-namespace.md}
         * @category TypeScript
         * @recommended
         * @reason 使用 ES6 Module 代替，但是允许 declare namespace ... {} 这样定义外部命名空间
         */
        '@typescript-eslint/no-namespace': [
          'error',
          {
            allowDeclarations: true,
            allowDefinitionFiles: true,
          },
        ],

        /**
         * 禁止非空断言后面跟着双问号
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-non-null-asserted-nullish-coalescing.md}
         * @category TypeScript
         */
        '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',

        /**
         * 禁止使用 non-null 断言
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-non-null-assertion.md}
         * @category TypeScript
         * @recommended
         * @reason 使用 non-null 断言时就已经清楚了风险
         */
        '@typescript-eslint/no-non-null-assertion': 'off',

        /**
         * 禁止重复定义
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-redeclare.md}
         * @category TypeScript
         * @reason 禁止使用 var
         */
        '@typescript-eslint/no-redeclare': 'off',

        /**
         * 禁止无用的联合类型或交叉类型
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-redundant-type-constituents.md}
         * @category TypeScript
         * @requires-type-information
         */
        '@typescript-eslint/no-redundant-type-constituents': 'error',

        /**
         * 禁止使用 require
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-require-imports.md}
         * @category TypeScript
         * @reason 统一使用 import 来引入模块，特殊情况使用单行注释允许 require 引入
         */
        '@typescript-eslint/no-require-imports': 'error',

        /**
         * 禁止导入指定模块
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-restricted-imports.md}
         * @category TypeScript
         */
        '@typescript-eslint/no-restricted-imports': 'off',

        /**
         * 禁止变量名与上层作用域内的已定义的变量重复
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-shadow.md}
         * @category TypeScript
         * @reason 很多时候函数的形参和传参是同名的
         */
        '@typescript-eslint/no-shadow': 'off',

        /**
         * 禁止将 this 赋值给其他变量，除非是解构赋值和 self
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-this-alias.md}
         * @category TypeScript
         * @recommended
         */
        '@typescript-eslint/no-this-alias': [
          'error',
          {
            allowDestructuring: true,
            allowedNames: ['self'],
          },
        ],

        /**
         * 禁止 throw 字面量，必须 throw 一个 Error 对象
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-throw-literal.md}
         * @category TypeScript
         * @requires-type-information
         */
        '@typescript-eslint/no-throw-literal': [
          'error',
          {
            allowThrowingAny: true,
            allowThrowingUnknown: true,
          },
        ],

        /**
         * 测试表达式中的布尔类型禁止与 true 或 false 直接比较
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-unnecessary-boolean-literal-compare.md}
         * @category TypeScript
         * @fixable
         * @requires-type-information
         */
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': [
          'error',
          {
            allowComparingNullableBooleansToTrue: true,
            allowComparingNullableBooleansToFalse: true,
          },
        ],

        /**
         * 条件表达式禁止是永远为真（或永远为假）的
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md}
         * @category TypeScript
         * @reason 经常无法正确判断
         * @fixable
         * @requires-type-information
         */
        '@typescript-eslint/no-unnecessary-condition': 'off',

        /**
         * 在命名空间或枚举中，可以直接使用内部变量，不需要添加命名空间前缀
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md}
         * @category TypeScript
         * @fixable
         * @requires-type-information
         */
        '@typescript-eslint/no-unnecessary-qualifier': 'error',

        /**
         * 禁止范型的类型有默认值时，将范型设置为该默认值
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-unnecessary-type-arguments.md}
         * @category TypeScript
         * @reason 写了类型表达可以更清晰
         * @fixable
         * @requires-type-information
         */
        '@typescript-eslint/no-unnecessary-type-arguments': 'off',

        /**
         * 禁止将 any 类型的变量作为函数参数调用
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-unsafe-argument.md}
         * @category TypeScript
         * @recommended
         * @requires-type-information
         */
        '@typescript-eslint/no-unsafe-argument': 'off',

        /**
         * 禁止将变量或属性的类型设置为 any
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-unsafe-assignment.md}
         * @category TypeScript
         * @recommended
         * @requires-type-information
         */
        '@typescript-eslint/no-unsafe-assignment': 'off',

        /**
         * 禁止调用 any 类型的变量上的方法
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-unsafe-call.md}
         * @category TypeScript
         * @recommended
         * @requires-type-information
         */
        '@typescript-eslint/no-unsafe-call': 'off',

        /**
         * 禁止 interface 和 class 的声明合并
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-unsafe-declaration-merging.md}
         * @category TypeScript
         */
        '@typescript-eslint/no-unsafe-declaration-merging': 'error',

        /**
         * 禁止获取 any 类型的变量中的属性
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-unsafe-member-access.md}
         * @category TypeScript
         * @recommended
         * @requires-type-information
         */
        '@typescript-eslint/no-unsafe-member-access': 'off',

        /**
         * 禁止函数返回 any 类型
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-unsafe-return.md}
         * @category TypeScript
         * @recommended
         * @requires-type-information
         */
        '@typescript-eslint/no-unsafe-return': 'off',

        /**
         * 禁止不安全的一元减号
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-unsafe-unary-minus.md}
         * @category TypeScript
         */
        '@typescript-eslint/no-unsafe-unary-minus': 'error',

        /**
         * 禁止无用的表达式
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-unused-expressions.md}
         * @category TypeScript
         */
        '@typescript-eslint/no-unused-expressions': [
          'error',
          {
            allowShortCircuit: true,
            allowTernary: true,
            allowTaggedTemplates: true,
            enforceForJSX: true,
          },
        ],

        /**
         * 变量必须先定义后使用
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-use-before-define.md}
         * @category TypeScript
         */
        '@typescript-eslint/no-use-before-define': [
          'error',
          {
            functions: false,
            variables: false,
            classes: false,
            enums: false,
            typedefs: false,
            ignoreTypeReferences: true,
          },
        ],

        /**
         * 禁止出现没必要的 constructor
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-useless-constructor.md}
         * @category TypeScript
         */
        '@typescript-eslint/no-useless-constructor': 'error',

        /**
         * 禁止导出空对象
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-useless-empty-export.md}
         * @category TypeScript
         * @fixable
         */
        '@typescript-eslint/no-useless-empty-export': 'error',

        /**
         * 禁止不必要的模板字符串
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/no-useless-template-literals.md}
         * @category TypeScript
         * @requires-type-information
         */
        '@typescript-eslint/no-useless-template-literals': 'error',

        /**
         * 必须使用 ! 而不是 as
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/non-nullable-type-assertion-style.md}
         * @category TypeScript
         * @fixable
         * @requires-type-information
         */
        '@typescript-eslint/non-nullable-type-assertion-style': 'off',

        /**
         * 类的构造函数参数作为类属性时，必须加上可访问性修饰符
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/parameter-properties.md}
         * @category TypeScript
         * @reason 单独列出清晰明了
         */
        '@typescript-eslint/parameter-properties': [
          'error',
          {
            allow: ['public readonly', 'readonly', 'public'],
            prefer: 'class-property',
          },
        ],

        /**
         * 必须使用解构赋值
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/prefer-destructuring.md}
         * @category TypeScript
         * @fixable
         */
        '@typescript-eslint/prefer-destructuring': 'off',

        /**
         * 枚举值必须初始化
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/prefer-enum-initializers.md}
         * @category TypeScript
         */
        '@typescript-eslint/prefer-enum-initializers': 'off',

        /**
         * 使用 array.find 替代 array.filter[0]
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/prefer-find.md}
         * @category TypeScript
         * @requires-type-information
         */
        '@typescript-eslint/prefer-find': 'error',

        /**
         * 使用 for 循环遍历数组时，如果索引仅用于获取成员，则必须使用 for of 循环替代 for 循环
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/prefer-for-of.md}
         * @category TypeScript
         * @reason for of 循环更加易读
         */
        '@typescript-eslint/prefer-for-of': 'error',

        /**
         * 使用函数类型别名替代包含函数调用声明的接口
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/prefer-function-type.md}
         * @category TypeScript
         * @fixable
         */
        '@typescript-eslint/prefer-function-type': 'error',

        /**
         * 使用 includes 而不是 indexOf
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/prefer-includes.md}
         * @category TypeScript
         * @fixable
         * @requires-type-information
         */
        '@typescript-eslint/prefer-includes': 'error',

        /**
         * 枚举类型的值必须是字面量，禁止是计算值
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/prefer-literal-enum-member.md}
         * @category TypeScript
         */
        '@typescript-eslint/prefer-literal-enum-member': 'off',

        /**
         * 使用 namespace 替代 module
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/prefer-namespace-keyword.md}
         * @category TypeScript
         * @fixable
         */
        '@typescript-eslint/prefer-namespace-keyword': 'off',

        /**
         * 使用 ?? 替代 ||
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md}
         * @category TypeScript
         * @requires-type-information
         */
        '@typescript-eslint/prefer-nullish-coalescing': 'off',

        /**
         * 使用 optional chaining 替代 &&
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/prefer-optional-chain.md}
         * @category TypeScript
         */
        '@typescript-eslint/prefer-optional-chain': 'error',

        /**
         * Promise 的 reject 中必须传入 Error 对象，而不是字面量
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/prefer-promise-reject-errors.md}
         * @category TypeScript
         */
        '@typescript-eslint/prefer-promise-reject-errors': 'off',

        /**
         * 私有变量如果没有在构造函数外被赋值，则必须设为 readonly
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/prefer-readonly.md}
         * @category TypeScript
         * @fixable
         * @requires-type-information
         */
        '@typescript-eslint/prefer-readonly': 'off',

        /**
         * 传入的参数要设置为只读属性
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/prefer-readonly-parameter-types.md}
         * @category TypeScript
         * @requires-type-information
         */
        '@typescript-eslint/prefer-readonly-parameter-types': 'off',

        /**
         * 使用 reduce 方法时，必须传入范型，而不是对第二个参数使用 as
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/prefer-reduce-type-parameter.md}
         * @category TypeScript
         * @fixable
         * @requires-type-information
         */
        '@typescript-eslint/prefer-reduce-type-parameter': 'off',

        /**
         * 使用 RegExp#exec 而不是 String#match
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md}
         * @category TypeScript
         * @fixable
         * @requires-type-information
         */
        '@typescript-eslint/prefer-regexp-exec': 'error',

        /**
         * 类的方法返回值是 this 时，类型必须设置为 this
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/prefer-return-this-type.md}
         * @category TypeScript
         * @fixable
         * @requires-type-information
         */
        '@typescript-eslint/prefer-return-this-type': 'error',

        /**
         * 使用 String#startsWith 而不是其他方式
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md}
         * @category TypeScript
         * @fixable
         * @requires-type-information
         */
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',

        /**
         * 当需要忽略下一行的 ts 错误时，必须使用 @ts-expect-error 而不是 @ts-ignore
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/prefer-ts-expect-error.md}
         * @category TypeScript
         * @fixable
         */
        '@typescript-eslint/prefer-ts-expect-error': 'error',

        /**
         * async 函数的返回值必须是 Promise
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/promise-function-async.md}
         * @category TypeScript
         * @fixable
         * @requires-type-information
         */
        '@typescript-eslint/promise-function-async': 'off',

        /**
         * 使用 sort 时必须传入比较函数
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/require-array-sort-compare.md}
         * @category TypeScript
         * @requires-type-information
         */
        '@typescript-eslint/require-array-sort-compare': [
          'error',
          {
            ignoreStringArrays: true,
          },
        ],

        /**
         * async 函数必须返回 await
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/return-await.md}
         * @category TypeScript
         * @fixable
         * @requires-type-information
         */
        '@typescript-eslint/return-await': ['error', 'in-try-catch'],

        /**
         * 联合类型和交叉类型的每一项必须按字母排序
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/sort-type-constituents.md}
         * @category TypeScript
         * @fixable
         */
        '@typescript-eslint/sort-type-constituents': 'off',

        /**
         * 条件判断必须传入布尔值
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md}
         * @category TypeScript
         * @fixable
         * @requires-type-information
         */
        '@typescript-eslint/strict-boolean-expressions': 'off',

        /**
         * 使用联合类型作为 switch 的对象时，必须包含每一个类型的 case
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/switch-exhaustiveness-check.md}
         * @category TypeScript
         * @requires-type-information
         */
        '@typescript-eslint/switch-exhaustiveness-check': 'off',

        /**
         * 禁止使用三斜杠导入文件
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/triple-slash-reference.md}
         * @category TypeScript
         * @recommended
         * @reason 三斜杠是已废弃的语法，但在类型声明文件中还是可以使用的
         */
        '@typescript-eslint/triple-slash-reference': [
          'error',
          {
            path: 'never',
            types: 'always',
            lib: 'always',
          },
        ],

        /**
         * interface 和 type 定义时必须声明成员的类型
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/typedef.md}
         * @category TypeScript
         */
        '@typescript-eslint/typedef': [
          'error',
          {
            arrayDestructuring: false,
            arrowParameter: false,
            memberVariableDeclaration: false,
            objectDestructuring: false,
            parameter: false,
            propertyDeclaration: true,
            variableDeclaration: false,
            variableDeclarationIgnoreFunction: false,
          },
        ],

        /**
         * 函数重载时，若能通过联合类型将两个函数的类型声明合为一个，则使用联合类型而不是两个函数声明
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/v6.21.0/packages/eslint-plugin/docs/rules/unified-signatures.md}
         * @category TypeScript
         */
        '@typescript-eslint/unified-signatures': [
          'error',
          {
            ignoreDifferentlyNamedParameters: false,
          },
        ],
      },
    },
  ],
}
