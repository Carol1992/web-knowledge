let i = 100000
let num = 4
let loops = 1000

let arr = []
while(--i >= 0) {
  arr.push({
    key: i,
    values: i / 2
  })
}
let time = new Date().getTime()
for(let i=0; i<loops; i++) {
  arr.filter(item => item.key === num)
}
i = 100000
console.log(`对${i}条数据进行${loops}次filter操作所需时间: ${new Date().getTime() - time}`)

let arr2 = []
for(let i=0; i<loops; i++) {
  arr2.push({
    key: i,
    values: i / 2
  })
}
let time2 = new Date().getTime()
while(--i >= 0) {
  arr2.filter(item => item.key === num)
}
i = 100000
console.log(`对${loops}条数据进行${i}次filter操作所需时间: ${new Date().getTime() - time2}`)