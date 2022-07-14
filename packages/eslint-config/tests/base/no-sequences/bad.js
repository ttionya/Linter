/* eslint-disable */
/* eslint-enable no-sequences */

// errorCount 3

;(foo = doSomething()), val

0, eval('doSomething();')

for (; doSomething(), !!test; );
