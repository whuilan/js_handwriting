class EventEmitter{
  constructor(){
    this.events = {};
  }

  // 订阅
  on(eventName, callback){
    if(!this.events[eventName]){
      this.events[eventName] = [callback];
    }else{
      this.events[eventName].push(callback);
    }
  }

  // 触发
  emit(eventName, ...args){ // 写错了！...args完全掉了！！！
    if(this.events[eventName]){
      this.events[eventName].forEach(cb => cb.apply(this, args))
    }
  }

  // 取消订阅
  remove(eventName, callback){
    if(this.events[eventName]){
      this.events[eventName] = this.events[eventName].filter(cb => cb != callback)
    }
  }
}