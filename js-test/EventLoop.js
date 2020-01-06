console.log('start')
function step_1() {
  console.log('step_1')
  process.nextTick(() => {
    console.log('process_1')
  })
  Promise.resolve('promise').then((result) => {
    console.log(result)
  })
  setTimeout(() => {
    console.log(100)
  }, 100)
}
function step_2() {
  console.log('step_2')
  process.nextTick(() => {
    console.log('process_2')
  })
  setTimeout(() => {
    console.log(150)
  }, 150)
}
step_1()
step_2()