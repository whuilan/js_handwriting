Function.prototype.myCall = function(context, ...args){
  let thisArg = context || window;
  thisArg.fn = this;
  args = args || [];
  let result = thisArg.fn(...args);
  delete thisArg.fn;
  return result;
}