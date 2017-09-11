// 基本使用
// ====================================================================================================
let a = [];
let b = [];

for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };

  let v = 1;
  b[i] = function () {
    console.log(v + 10);
  };
  v = 2;

  b[100] = function () {
  	let x = v;
  	x += 1;
    console.log((()=>{return x})());
  };

}

a[6](); // 6
b[6](); // 12
b[100](); // 3
//console.log(v);  // ReferenceError: v is not defined


// for循环设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域
// ====================================================================================================
for (let i = 0; i < 3; i++) {
  let i = 'abc';
  console.log(i);
}
// abc
// abc
// abc


// “暂时性死区”（temporal dead zone，简称 TDZ）
// ====================================================================================================
var tmp = 123;
if (true) {
  //console.log(tmp); // ReferenceError: tmp is not defined
  //typeof tmp;  // ReferenceError: tmp is not defined。注意这里不是返回undefined
  let tmp;
}
/*
暂时性死区的本质就是，只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。
*/

// const注意点
// ====================================================================================================
const foo = {};
foo.prop = 123;
console.log(foo.prop);  // 123

foo = {}; // TypeError: "foo" is read-only




