/* eslint-disable */
/* eslint-enable no-unused-expressions */

// errorCount 10

{
  0

  if (0) 0

  {
    0
  }

  f(0), {}

  a, b()
  ;(c = a), b
}

// allowShortCircuit
{
  a || b
}

// allowTernary
{
  a ? b : 0
  a ? b : c()
}

// allowTaggedTemplates
{
  ;`some untagged template string`
}
