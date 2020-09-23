function deepClone(obj){
  // 这里克隆的新对象又命名成obj??
  let cloneObj = Array.isArray(obj) ? [] : {};
  if(obj && typeof obj === 'object'){
    for(let key in obj){
      if(obj.hasOwnProperty(key)){
        if(obj[key] && typeof obj[key] === 'object'){
          cloneObj[key] = deepClone(obj[key]);
        }else{
          cloneObj[key] = obj[key];
        }
      }
    }
  }
  return cloneObj;
}
// 简记：三个if，第一个后面加个for(let key in obj)