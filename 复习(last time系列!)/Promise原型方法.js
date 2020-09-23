class MyPromise{
  constructor(fn){
    this.callbacks = [];
    this.state = 'pending';
    this.value = null; // 初始值是null！居然写成了value！
    fn(this.resolve.bind(this), this.reject.bind(this)); // 这里写错了，忘记了bind绑定！
  }

  then(onFulfilled, onRejected){
    return new MyPromise(resolve => {
      this.handle({
        onFulfilled: onFulfilled || null,
        onRejected: onRejected || null,
        resolve: resolve,
        reject: reject
      })
    })
  }

  catch(onError){
    return this.then(null, onError);
  }

  handle(callback){
    if(this.state === 'pending'){
      this.callbacks.push(callback);
      return;
    }

    let cb = this.state === 'fulfilled' ? callback.onFulfilled : callback.onRejected;
    if(!cb){
      cb = this.state === 'fulfilled' ? callback.resolve : callback.reject;
      cb(this.value);
      return;
    }

    let res;
    try{
      res = cb(this.value);
      cb = this.state === 'fulfilled' ? callback.resolve : callback.reject;
    }catch(err){
      res = err;
      cb = callback.reject;
    }finally{
      cb(res);
    }
  }

  resolve(value){
    if(value && (typeof value === 'object')){
      let then = value.then;
      if(then && (typeof then === 'function')){
        then.call(value, this.resolve.bind(this), this.reject.bind(this)); // reject也要传喔
        return; // 这里的return记得不能掉！
      }
    }

    this.state = 'fulfilled';
    this.value = value;
    this.callbacks.forEach(callback => {this.handle(callback)});
  }

  reject(error){
    this.state = 'rejected';
    this.value = error;
    this.callbacks.forEach(callback => {this.handle(callback)})
  }

}