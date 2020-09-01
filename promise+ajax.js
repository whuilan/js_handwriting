function ajax(url){
  return new Promise((resolve, reject) => {
    var xhr;
    if(window.XMLHttpRequest){
      xhr = new XMLHttpRequest();
    }else if(window.ActiveXObject){
      xhr = new ActiveXObject();
    }
    xhr.onreadystatechange = function(){
      if(xhr.readystate === 4){
        if(xhr.status === 200){
          resolve(xhr.responseText);
        }else{
          reject(xhr.statusText)
        }
      }
    }
    xhr.open('GET', url);
    xhr.send();
  })
}

let p = ajax(url)
p.then((text) => {
  alert(text);
})