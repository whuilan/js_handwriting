function newObj(){
  let obj = {};
  let [constructor, ...args] = [...arguments]; // args忘了加...
  obj.__proto__ = constructor.prototype;
  let result = constructor.call(obj, ...args);
  // 多加了!，以及少加了typeof的()
  if(result && (typeof result === 'object' || typeof result ===  'function')){
    return result;
  }
  return obj;
}