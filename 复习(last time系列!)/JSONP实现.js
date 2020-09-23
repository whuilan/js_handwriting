function jsonp({url, params, callback}){ // 传入的参数为一个JSON对象，如：{"url":"www.baidu.com", "params":{a:1}, "callback":"show"}
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    window[callback] = function(data){
      resolve(data);
      document.body.removeChild(script);
    }
    params = {...params, callback} // 遗忘
    let arr = [];
    for(let paramName in params){
      arr.push(`${paramName}=${params[paramName]}`)
    }
    script.src = `${url}?${arr.join('&')}`
    document.body.appendChild(script);
  })
}