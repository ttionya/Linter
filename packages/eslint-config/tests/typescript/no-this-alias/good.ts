/* eslint-disable */
/* eslint-enable @typescript-eslint/no-this-alias */

export default 1

class Class {
  public foo(this: any): void {
    const { bar } = this
    const self = this

    setTimeout(() => {
      this.doWork()
    })
  }
}
