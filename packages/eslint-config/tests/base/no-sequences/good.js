/* eslint-disable */
/* eslint-enable no-sequences */

foo = (doSomething(), val)
;(0, eval)('doSomething();')

do {} while ((doSomething(), !!test))

for (i = 0, j = 10; i < j; i++, j--);

if ((doSomething(), !!test));

switch (((val = foo()), val)) {
}

while (((val = foo()), val < 42));
