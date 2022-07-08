/* eslint-disable */
/* eslint-enable @typescript-eslint/consistent-generic-constructors */

export default 1

class MyMap extends Map {}

const map1 = new Map<string, number>()
const map2: Map<string, number> = new MyMap()
const set1 = new Set<string>()
const set2 = new Set()
const set3: Set<string> = new Set<string>()
