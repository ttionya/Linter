/* eslint-disable */
/* eslint-enable no-unused-expressions */

{
  {
  }

  function namedFunctionDeclaration() {}

  ;(function aGenuineIIFE() {})()

  f()

  a = 0

  new C()

  delete a.b

  void a
}

// allowShortCircuit
{
  a && b()
  a() || (b = c)
}

// allowTernary
{
  a ? b() : c()
  a ? (b = c) : d()
  a ? b() || (c = d) : e()
}

// allowTaggedTemplates
{
  tag`some tagged template string`
}
