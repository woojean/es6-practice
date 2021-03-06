// 函数参数的默认值
// ====================================================================================================
// 参数变量是默认声明的，所以不能用let或const再次声明
function foo(x = 5) {
  let x = 1; // SyntaxError: Identifier 'x' has already been declared
  console.log(x);
}


// 参数默认值是惰性求值的
let x = 99;
function foo(p = x + 1) {
  console.log(p);
}

foo() // 100

x = 100;
foo() // 101


// 参数默认值与结构赋值同时使用
function foo({x, y = 5}) {
  console.log(x, y);
}

foo({}) // undefined 5
foo({x: 1}) // 1 5
foo({x: 1, y: 2}) // 1 2
foo() // TypeError: Cannot read property 'x' of undefined


// 指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数
console.log((function (a, b = 1, c) {}).length); // 1


// 一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域
let x = 1;

function f(y = x) {
  let x = 2;
  console.log(y);
}

f() // 1

/*
函数f调用时，参数y = x形成一个单独的作用域。这个作用域里面，变量x本身没有定义，所以指向外层的全局变量x。函数调用时，函数体内部的局部变量x影响不到默认值变量x。
如果此时，全局变量x不存在，就会报错。
*/


// rest参数（用于获取函数的多余参数）
// ====================================================================================================
function add(...values) {
  let sum = 0;
  for (var val of values) {
    sum += val;
  }
  return sum;
}

console.log(add(2, 5, 3)) // 10


// 函数的length属性，不包括rest参数
console.log((function(a, ...b) {}).length)  // 1

/*
ES6规定只要函数参数使用了默认值、解构赋值、或者扩展运算符，那么函数内部就不能显式设定为严格模式
*/

// 箭头函数
// ====================================================================================================
// 由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错
let getTempItem = id => ({ id: id, name: "Temp" });
console.log(getTempItem(1));

// 箭头函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象
// ====================================================================================================
function foo() {
  setTimeout(() => {
    console.log('id:', this.id);
  }, 100);
}

var id = 21;

foo.call({ id: 42 });
// id: 42

// 尾调用优化与尾递归
// ====================================================================================================
// 略。


