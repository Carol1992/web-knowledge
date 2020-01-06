//importScripts('script1.js', 'script2.js');
this.onmessage = function(e) {
  let {times, num, loops} = e.data
  let arr = []
  let i = times
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
 
  this.postMessage({
    times,
    loops,
    time: new Date().getTime() - time
  })
}