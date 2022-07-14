/* eslint-disable */
/* eslint-enable prefer-object-spread */

// errorCount 7

Object.assign({}, foo)

Object.assign({}, { foo: 'bar' })

Object.assign({ foo: 'bar' }, baz)

Object.assign({}, baz, { foo: 'bar' })

Object.assign({}, { ...baz })

Object.assign({})

Object.assign({ foo: bar })
