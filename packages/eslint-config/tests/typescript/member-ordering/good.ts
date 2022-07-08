/* eslint-disable */
/* eslint-enable @typescript-eslint/member-ordering */

export default 1

class Foo {
  public static foo1 = 'foo1'

  protected static foo2 = 'foo2'

  private static foo3 = 'foo3'

  public static getFoo1(): void {}

  protected static getFoo2(): void {}

  private static getFoo3(): string {
    return Foo.foo3
  }

  public bar1 = 'bar1'

  protected bar2 = 'bar2'

  private bar3 = 'bar3'

  constructor() {
    console.log(Foo.getFoo3())
    console.log(this.getBar3())
  }

  public getBar1(): void {}

  protected getBar2(): void {}

  private getBar3(): string {
    return this.bar3
  }
}
