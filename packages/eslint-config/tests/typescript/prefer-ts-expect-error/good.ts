/* eslint-disable */
/* eslint-enable @typescript-eslint/prefer-ts-expect-error */

export default 1

// @ts-expect-error
const str: string = 1

/**
 * Explaining comment
 *
 * @ts-expect-error */
const multiLine: number = 'value'

/** @ts-expect-error */
const block: string = 1

const isOptionEnabled = (key: string): boolean => {
  // @ts-expect-error: if key isn't in globalOptions it'll be undefined which is false
  return !!globalOptions[key]
}
