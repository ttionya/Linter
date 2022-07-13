/* eslint-disable */
/* eslint-enable require-atomic-updates */

// errorCount 6

{
  let result

  async function foo() {
    result += await something
  }

  async function bar() {
    result = result + (await something)
  }

  async function baz() {
    result = result + doSomething(await somethingElse)
  }

  async function qux() {
    if (!result) {
      result = await initialize()
    }
  }

  function* generator() {
    result += yield
  }
}

{
  async function foo(obj) {
    if (!obj.done) {
      obj.something = await getSomething()
    }
  }
}
