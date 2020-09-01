function getType(target){
  const basicType = typeof target;
  if(basicType !== 'object'){
    return basicType;
  }
  // 判断target非空忘了！而且还搞错了，写成!basicType，typeof是不返回null的呀！
  if(!target){
    return null;
  }
  const types = {
    '[Object Array]': 'Array',
    '[Object Date]': 'Date',
    '[Object RegExp]': 'RegExp',
    '[Object Object]': 'Object'
  }

  let objType = Object.prototype.toString.call(target);
  return types[objType];
}