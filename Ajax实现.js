function success(text){
  alert(text)
}

function ajax(){
    //第一步：创建XMLHttpRequest对象
    var xhr;
    if (window.XMLHttpRequest) {            //非IE
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {       //IE
        xhr = new ActiveXObject("Microsoft.xhr")
    }
    //第二步：注册回调函数
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var obj = document.getElementById(id);
                obj.innerHTML = xhr.responseText;
                // success(xhr.responseText);
            } else {
                alert("AJAX服务器返回错误！");             
            }
        }else {
            // HTTP请求还在继续...
        }
    }
    //第三步：调用open()方法，设置请求参数（向路径http://localhost:8080/JsLearning3/getAjax准备发送数据）
    var url = "http://localhost:8080/JsLearning3/getAjax";
    xhr.open("GET", url);
    //第四步：设置发送请求的内容和发送报送。然后发送请求
    var params = "userName=" + document.getElementsByName("userName")[0].value + "&userPass=" + document.getElementsByName("userPass")[0].value + "&time=" + Math.random(); // 增加time随机参数，防止读取缓存 				
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=UTF-8"); // 向请求添加 HTTP 头，POST如果有数据一定加！！！
    xhr.send(params); // 如果不需要通过请求主体发送数据，则必须传入null.
}