/* eslint-disable */
/* eslint-enable accessor-pairs */

// setWithoutGet
{
  const o1 = {
    set a(value) {
      this.val = value
    },
    get a() {
      return this.val
    },
  }

  const o2 = { d: 1 }
  Object.defineProperty(o, 'c', {
    set: function (value) {
      this.val = value
    },
    get: function () {
      return this.val
    },
  })
}

// getWithoutSet
{
  const o = {
    get a() {
      return this.val
    },
  }
}

// enforceForClassMembers
{
  class Foo {
    get a() {
      return this.val
    }
  }

  class Bar {
    static get a() {
      return this.val
    }
  }

  const Baz = class {
    get a() {
      return this.val
    }
    set a(value) {
      this.val = value
    }
  }
}
