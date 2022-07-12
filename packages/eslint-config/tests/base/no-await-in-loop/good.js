/* eslint-disable */
/* eslint-enable no-await-in-loop */

async function foo(things) {
  const results = []
  for (const thing of things) {
    results.push(bar(thing))
  }
  return baz(await Promise.all(results))
}
