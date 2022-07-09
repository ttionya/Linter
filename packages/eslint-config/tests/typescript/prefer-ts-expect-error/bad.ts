/* eslint-disable */
/* eslint-enable @typescript-eslint/prefer-ts-expect-error */

// errorCount 4

export default 1

// @ts-ignore
const str: string = 1

/**
 * Explaining comment
 *
 * @ts-ignore */
const multiLine: number = 'value'

/** @ts-ignore */
const block: string = 1

const isOptionEnabled = (key: string): boolean => {
  // @ts-ignore: if key isn't in globalOptions it'll be undefined which is false
  return !!globalOptions[key]
}
