/* eslint-disable */
/* eslint-enable @typescript-eslint/no-unnecessary-qualifier */

export default 1

namespace X {
  export type T = number
}

namespace Y {
  export const x: X.T = 3
}

enum A {
  X,
  Y,
}

enum B {
  Z = A.X,
}

namespace X {
  export type T = number
  namespace Y {
    type T = string
    const x: X.T = 0
  }
}
