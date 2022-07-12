/* eslint-disable */
/* eslint-enable no-await-in-loop */

// errorCount 1

async function foo(things) {
  const results = []
  for (const thing of things) {
    results.push(await bar(thing))
  }
  return baz(results)
}
