/* eslint-disable */
/* eslint-enable @typescript-eslint/explicit-member-accessibility */

export default 1

class Animal {
  legs: number = 0

  private hasFleas: boolean

  private animalName: string = ''

  constructor(animalName: string) {
    this.hasFleas = false

    console.log(animalName)
  }

  public get name(): string {
    return this.animalName
  }

  public set name(value: string) {
    this.animalName = value
  }

  public drink(): void {}
}
