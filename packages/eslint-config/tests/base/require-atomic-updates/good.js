/* eslint-disable */
/* eslint-enable require-atomic-updates */

{
  let result

  async function foobar() {
    result = (await something) + result
  }

  async function baz() {
    const tmp = doSomething(await somethingElse)
    result += tmp
  }

  async function qux() {
    if (!result) {
      const tmp = await initialize()
      if (!result) {
        result = tmp
      }
    }
  }

  async function quux() {
    let localVariable = 0
    localVariable += await something
  }

  function* generator() {
    result = (yield) + result
  }
}

{
  async function foo(obj) {
    if (!obj.done) {
      const tmp = await getSomething()
      if (!obj.done) {
        obj.something = tmp
      }
    }
  }
}
