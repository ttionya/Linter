/* eslint-disable */
/* eslint-enable @typescript-eslint/class-literal-property-style */

// errorCount 2

export default 1

class Mx {
  public static get myField1() {
    return 1
  }

  private get ['myField2']() {
    return 'hello world'
  }
}
