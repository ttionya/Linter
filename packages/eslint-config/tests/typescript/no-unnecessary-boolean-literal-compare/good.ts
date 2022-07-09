/* eslint-disable */
/* eslint-enable @typescript-eslint/no-unnecessary-boolean-literal-compare */

export default 1

declare const someCondition: boolean
if (someCondition) {
}

declare const someObjectBoolean: boolean | Record<string, unknown>
if (someObjectBoolean === true) {
}

declare const someStringBoolean: boolean | string
if (someStringBoolean === true) {
}

declare const someUndefinedCondition: boolean | undefined
if (someUndefinedCondition === true) {
}
if (someUndefinedCondition === false) {
}

declare const someNullCondition: boolean | null
if (someNullCondition !== true) {
}
if (someNullCondition !== false) {
}
