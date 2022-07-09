/* eslint-disable */
/* eslint-enable @typescript-eslint/no-unnecessary-qualifier */

// errorCount 4

export default 1

namespace A {
  export type B = number
  const x: A.B = 3
}

namespace A {
  export const x = 3
  export const y = A.x
}

enum A {
  B,
  C = A.B,
}

namespace A {
  export namespace B {
    export type T = number
    const x: A.B.T = 3
  }
}
