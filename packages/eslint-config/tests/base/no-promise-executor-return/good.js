/* eslint-disable */
/* eslint-enable no-promise-executor-return */

new Promise((resolve, reject) => {
  if (someCondition) {
    resolve(defaultResult)
    return
  }
  getSomething((err, result) => {
    if (err) {
      reject(err)
    } else {
      resolve(result)
    }
  })
})

new Promise((resolve, reject) => {
  getSomething((err, data) => {
    if (err) {
      reject(err)
    } else {
      resolve(data)
    }
  })
})

Promise.resolve(1)
