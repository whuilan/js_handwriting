function jsonp({url, params, callback}){
  return new Promise((resolove, reject) => {
    // 创建<script>标签
    let script = document.createElement('script');
    // 声明/创建回调函数callback，将其挂在全局对象window上(回调函数你可以写到<script>下(默认
    // 属于window对象)，或者指明写到window对象里,jsonp调用回调函数时,是调用的window.callback）
    window[callback] = function(data){
      resolove(data);
      // 代码执行完后删除插入的script标签
      document.body.removeChild(script);
    }
    // 将参数转换为正确的格式，并将回调函数加在请求url上
    params = {...params,callback};
    let arr = [];
    for(let key in params){
      arr.push(`${key}=${params[key]}`) // [size=2,callback=show]
    }
    script.src = `${url}?${arr.join('&')}`; // size=2&callback=show
    document.body.appendChild(script);
  })
}

// 使用
jsonp({
  url: 'http://localhost:3000/say',
  params: { size:2 },
  callback: 'show'
}).then(data => {
  console.log(data);
})