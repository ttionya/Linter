/* eslint-disable */
/* eslint-enable max-depth */

function foo() {
  for (;;) {
    // Nested 1 deep
    while (true) {
      // Nested 2 deep
      if (true) {
        // Nested 3 deep
        if (true) {
          // Nested 4 deep
          if (true) {
            // Nested 5 deep
            if (true) {
              // Nested 6 deep
            }
          }
        }
      }
    }
  }
}
