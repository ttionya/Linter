/* eslint-disable */
/* eslint-enable @typescript-eslint/class-literal-property-style */

export default 1

class Mx {
  public readonly myField1 = 1

  // not a literal
  public readonly myField2 = [1, 2, 3]

  private readonly ['myField3'] = 'hello world'

  public get myField4() {
    return `hello from ${window.location.href}`
  }
}
