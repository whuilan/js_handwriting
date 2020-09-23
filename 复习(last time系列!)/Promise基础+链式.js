class MyPromise{
  constructor(fn){
    this.callbacks = [];
    this.state = 'pending';
    this.value = null; // 初始值是null！居然写成了value！
    fn(this.resolve.bind(this)); // 这里写错了，忘记了bind绑定！
  }

  then(onFulfilled){
    return new MyPromise(resolve => {
      this.handle({
        onFulfilled: onFulfilled || null,
        resolve: resolve
      })
    })
  }

  handle(callback){
    if(this.state === 'pending'){
      this.callbacks.push(callback);
      return;
    }

    if(!callback.onFulfilled){
      callback.resolve(this.value);
      return;
    }

    let res = callback.onFulfilled(this.value);
    callback.resolve(res);
  }

  resolve(value){
    if(value && (typeof value === 'object')){
      let then = value.then;
      if(then && (typeof then === 'function')){
        then.call(value, this.resolve.bind(this));
        return; // 这里的return记得不能掉！
      }
    }

    this.state = 'fulfilled';
    this.value = value;
    this.callbacks.forEach(callback => {this.handle(callback)});
  }

}