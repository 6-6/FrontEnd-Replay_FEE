//define 这个api是用来定义一个模块，在页面中就可以require(["js/script"]);使用，注意无需写后缀.js

define(function(){
  function fun1(){
    alert("it works");
  }

  fun1();
})