/* eslint-disable */
/* eslint-enable no-inner-declarations */

// errorCount 5

if (test) {
  var foo = 42
}

function doAnotherThing() {
  if (test) {
    var bar = 81
  }
}

if (foo) {
  var a
}

if (foo) {
  function f() {}
}

class C {
  static {
    if (test) {
      var something
    }
  }
}
