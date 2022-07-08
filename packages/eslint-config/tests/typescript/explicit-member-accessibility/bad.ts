/* eslint-disable */
/* eslint-enable @typescript-eslint/explicit-member-accessibility */

// errorCount 4

export default 1

class Animal {
  legs: number = 0

  hasFleas: boolean

  animalName: string = ''

  public constructor(animalName: string, age: number) {
    this.hasFleas = false

    console.log(animalName, age)
  }

  get name(): string {
    return this.animalName
  }

  set name(value: string) {
    this.animalName = value
  }

  drink(): void {}
}
