/* eslint-disable */
/* eslint-enable @typescript-eslint/explicit-function-return-type */

// errorCount 9

export default 1

// allowTypedFunctionExpressions
{
  let arrowFn = () => 'test'

  let funcExpr = function () {
    return 'test'
  }

  let objectProp = {
    foo: () => 1,
  }
}

// allowHigherOrderFunctions
{
  var arrowFn = () => () => {}

  function fn() {
    return function () {}
  }
}

// allowDirectConstAssertionInArrowFunctions
{
  interface IAction {}
  const func1 = (value: number) => ({ type: 'X', value } as any)
  const func2 = (value: number) => ({ type: 'X', value } as IAction)
}

// allowConciseArrowFunctionExpressionsStartingWithVoid
{
  var join = (a: string, b: string) => `${a}${b}`

  const log = (message: string) => {
    console.log(message)
  }
}
