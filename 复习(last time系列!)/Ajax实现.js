// 1.创建XMLHttpRequest对象
var xhr;
if(window.XMLHttpRequest){
  xhr = new XMLHttpRequest();
}else if(window.ActiveXObject){  // 出错
  xhr = new ActiveXObject();
}else{
  throw new Error("没有可用的XML Object")
}
// 2.注册回调函数
xhr.onreadystatechange = function(){
  if(xhr.readyState == 4){
    if(xhr.status == 200){
      var obj = document.getElementById('test');
      obj.innerHTML = xhr.responseText;
    }else{
      alert("请求出错");
    }
  }else{
    // 请求正在处理
  }
}
// 3.调用open()方法，设置请求参数
var url = 'https:www.baidu.cn/test';
xhr.open('GET', url);
// 4.调用send方法，发送请求
xhr.send(null);
