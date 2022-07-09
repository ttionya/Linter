/* eslint-disable */
/* eslint-enable @typescript-eslint/no-redundant-type-constituents */

export default 1

type UnionAny = any
type UnionUnknown = unknown
type UnionNever = never

type UnionBooleanLiteral = boolean
type UnionNumberLiteral = number
type UnionStringLiteral = string

type IntersectionAny = any
type IntersectionUnknown = string
type IntersectionNever = string

type IntersectionBooleanLiteral = false
type IntersectionNumberLiteral = 1
type IntersectionStringLiteral = 'foo'

type ReturnUnionNever = () => string | never
