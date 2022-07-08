/* eslint-disable */
/* eslint-enable @typescript-eslint/explicit-function-return-type */

export default 1

// allowTypedFunctionExpressions
{
  type FuncType = () => string

  let arrowFn: FuncType = () => 'test'

  let funcExpr: FuncType = function () {
    return 'test'
  }

  let asTyped = (() => '') as () => string

  let castTyped = <() => string>(() => '')

  interface ObjectType {
    foo(): number
  }

  let objectProp: ObjectType = {
    foo: () => 1,
  }

  let objectPropAs = {
    foo: () => 1,
  } as ObjectType

  let objectPropCast = <ObjectType>{
    foo: () => 1,
  }
}

// allowHigherOrderFunctions
{
  var arrowFn = () => (): void => {}

  function fn() {
    return function (): void {}
  }
}

// allowDirectConstAssertionInArrowFunctions
{
  const func1 = (value: number) => ({ foo: 'bar', value } as const)
  const func2 = () => 1 as const
}

// allowConciseArrowFunctionExpressionsStartingWithVoid
{
  var log = (message: string) => void console.log(message)
}
