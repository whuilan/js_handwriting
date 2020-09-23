// 法一：Set
function uniq(arr){
  return [...new Set(arr)];
}

// 法二：indexOf/includes
function uniq2(arr){
  let result = [];
  for(let item of arr){
    if(!result.includes(item)){
      result.push(item)
    }
  }
  return result;
}

// 法三：Map
function uniq3(arr){
  let result = [];
  let map = new Map();
  for(let item of arr){
    if(!map.has(item)){
      map.set(item, false);
      result.push(item);
    }else{
      map.set(item, true);
    }
  }
  return result;
}