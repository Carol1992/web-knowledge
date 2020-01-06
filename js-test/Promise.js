//Promise
function* promise_0() {
  new Promise((resolve, reject) => {
    let num = Math.random()
    if(num <= 0.5) {
      //let error = new Error('small than 0.5')
      reject('error: small than 0.5')
    }
    resolve(num)
  }).then((val) => {
    return new Promise((resolve, reject) => {
      resolve(val + '_2')
    })
  }).then((val) => {
    console.log(val + '_3')
  }).catch((msg) => {
    console.log(msg)
  })
}

let g = promise_0()
console.log(g.next())

//什么是iterables(迭代器): Array, Map, Set, arguments, String
//数组结构、扩展运算符、for-of都使用了iterables
let a = [12,22,33]
let iterator = a[Symbol.iterator]()
for(let next = iterator.next(); !next.done; next = iterator.next()) {
  console.log(next.value)
}

async function promise_1() {
  let tasks = []
  let i = -1
  while(++i < 10) {
    let task = function(a, b) {
      let value = a + b + i
      return value
    }
    tasks.push(task)
  }
  let promise = Promise.resolve(12)

  tasks.forEach((t, i) => {
    promise = promise.then((start) => {
      return new Promise((resolve, reject) => {
        //resolve(t(i, 2))
        let value = start + t(i, 2)
        reject(value)
      }).catch((msg) => {
        let value = msg
        console.log(value)
        return value
      })
    })
  })
}

async function promise_3() {
  var p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'P1');
  });
  var p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 600, 'P2');
  });
  // 同时执行p1和p2，并在它们都完成后执行then:
  Promise.all([p1, p2]).then((results) => {
    console.log(results); // 获得一个Array: ['P1', 'P2']
  });
}

async function promise_4() {
  var p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 700, 'P1');
  });
  var p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 600, 'P2');
  });
  Promise.race([p1, p2]).then((result) => {
    console.log(result); // 'P1'
  });
}

async function exec() {
  // await promise_0()
  await promise_1()
  await promise_3()
  await promise_4()
}
exec()

