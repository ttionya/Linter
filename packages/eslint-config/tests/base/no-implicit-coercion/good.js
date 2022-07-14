/* eslint-disable */
/* eslint-enable no-implicit-coercion */

// boolean
{
  const b1 = !!foo
  const b2 = ~foo.indexOf('.')
}

// number
{
  const n = +foo
}

// string
{
  const s1 = '' + foo
  const s2 = `` + foo
  foo += ''
  foo += ``
}

// disallowTemplateShorthand
{
  const s = `${foo}`
}
