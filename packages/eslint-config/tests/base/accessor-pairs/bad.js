/* eslint-disable */
/* eslint-enable accessor-pairs */

// errorCount 4

// setWithoutGet
{
  const o1 = {
    set a(value) {
      this.val = value
    },
  }

  const o2 = { d: 1 }
  Object.defineProperty(o2, 'c', {
    set: function (value) {
      this.val = value
    },
  })
}

// enforceForClassMembers
{
  class Foo {
    set a(value) {
      this.val = value
    }
  }

  const Bar = class {
    static set a(value) {
      this.val = value
    }
  }
}
