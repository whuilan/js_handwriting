class Person{
  constructor(name){
    this.name = name;
  }
  sayHi(){
    console.log("hi");
  }
}

function getSingleton(){
  let instance = null;
  return function(){
    if(!instance){
      instance = new Person();
    }
    return instance;
  }
}