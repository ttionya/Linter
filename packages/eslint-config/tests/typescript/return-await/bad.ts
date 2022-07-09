/* eslint-disable */
/* eslint-enable @typescript-eslint/return-await */

// errorCount 4

export default 1

async function invalidInTryCatch1() {
  try {
    return Promise.resolve('try')
  } catch (e) {}
}

async function invalidInTryCatch2() {
  try {
    throw new Error('error')
  } catch (e) {
    return await Promise.resolve('catch')
  }
}

async function invalidInTryCatch3() {
  try {
    throw new Error('error')
  } catch (e) {
    return Promise.resolve('catch')
  } finally {
    console.log('cleanup')
  }
}

async function invalidInTryCatch4() {
  try {
    throw new Error('error')
  } catch (e) {
    throw new Error('error2')
  } finally {
    return await Promise.resolve('finally')
  }
}

async function invalidInTryCatch5() {
  return await Promise.resolve('try')
}

async function invalidInTryCatch6() {
  return await 'value'
}
