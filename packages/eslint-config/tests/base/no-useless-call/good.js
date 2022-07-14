/* eslint-disable */
/* eslint-enable no-useless-call */

foo.call(obj, 1, 2, 3)
foo.apply(obj, [1, 2, 3])
obj.foo.call(null, 1, 2, 3)
obj.foo.apply(null, [1, 2, 3])
obj.foo.call(otherObj, 1, 2, 3)
obj.foo.apply(otherObj, [1, 2, 3])

foo.apply(undefined, args)
foo.apply(null, args)
obj.foo.apply(obj, args)
