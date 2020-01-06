let arr = [12, 23]
let obj = {
  a: 12,
  b: 23,
  c: 34444
}
for(let i in obj) {
  console.log(obj.hasOwnProperty(i), i, obj[i])
}
for(let i of arr) {
  console.log(i)
}
exports.arr = arr
exports.obj = obj
