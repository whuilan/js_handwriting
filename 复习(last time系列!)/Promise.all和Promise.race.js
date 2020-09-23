Promise.all = function(promises){
  return new Promise((resolve, reject) => {
    let results = [];
    let count = 0;
    promises.forEach((promise, index) => {
      Promise.resolve(promise).then(res => {
        results[index] = res;
        if(++count === promises.length){
          resolve(results);
        }
      }, err => {reject(err)})
    })
  })
}

Promise.race = function(promises){
  return new Promise((resolve, reject) => {
    promises.forEach(promise => {
      Promise.resolve(promise).then(res => {resolve(res)}, err => {reject(err)})
    })
  })
}