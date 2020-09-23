// 所有promise实例都变成fulfilled状态时，新的promise才变成fulfilled状态
Promise.all = function(promises){
  return new Promise((resolve, reject) => {
    let paras = [];
    let count = 0;
    promises.forEach((promise, index) => {
      Promise.resolve(promise).then(res => {
        paras[index] = res;
        if(++count === promises.length){
          resolve(paras);
        }
      }, err => reject(err))
    })
  })
}

// 只要有一个实例率先改变状态（不管是变成fulfilled还是rejected），p的状态就跟着改变。
// 那个率先改变的 Promise 实例的返回值，就传递给p的回调函数
Promise.race = function(promises){
  return new Promise((resolve, reject) => {
    promises.forEach(promise => {
      Promise.resolve(promise).then(res => resolve(res), err => reject(err))
    })
  })
}