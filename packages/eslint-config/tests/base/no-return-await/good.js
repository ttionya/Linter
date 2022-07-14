/* eslint-disable */
/* eslint-enable no-return-await */

async function foo1() {
  return bar()
}

async function foo2() {
  await bar()
  return
}

async function foo3() {
  const x = await bar()
  return x
}

async function foo4() {
  try {
    return await bar()
  } catch (error) {}
}
