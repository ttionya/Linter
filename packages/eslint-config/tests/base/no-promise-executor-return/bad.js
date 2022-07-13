/* eslint-disable */
/* eslint-enable no-promise-executor-return */

// errorCount 3

new Promise((resolve, reject) => {
  if (someCondition) {
    return defaultResult
  }
  getSomething((err, result) => {
    if (err) {
      reject(err)
    } else {
      resolve(result)
    }
  })
})

new Promise((resolve, reject) =>
  getSomething((err, data) => {
    if (err) {
      reject(err)
    } else {
      resolve(data)
    }
  })
)

new Promise(() => {
  return 1
})
