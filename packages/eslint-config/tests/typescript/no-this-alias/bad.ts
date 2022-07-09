/* eslint-disable */
/* eslint-enable @typescript-eslint/no-this-alias */

// errorCount 1

export default 1

class Class {
  public foo(this: any): void {
    const that = this

    setTimeout(function () {
      that.doWork()
    })
  }
}
