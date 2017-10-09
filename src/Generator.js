// 基本概念
// ====================================================================================================
// 执行Generator函数会返回一个遍历器对象
function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hw = helloWorldGenerator();

console.log(hw.next());  // { value: 'hello', done: false }
console.log(hw.next());  // { value: 'world', done: false }
console.log(hw.next());  // { value: 'ending', done: true }
console.log(hw.next());  // { value: undefined, done: true }


// next方法的参数
// ====================================================================================================
// next方法可以带一个参数，该参数就会被当作"上一个yield表达式的"返回值
function* f() {
  for(var i = 0; true; i++) {
    var reset = yield i;
    if(reset) { i = -1; }
  }
}

var g = f();

console.log(g.next()) // { value: 0, done: false }
console.log(g.next()) // { value: 1, done: false }
console.log(g.next(true)) // { value: 0, done: false }
console.log(g.next()) // { value: 1, done: false }


// Generator.prototype.throw()
// ====================================================================================================
// 遍历器对象有一个throw方法，可以在函数体外抛出错误，然后在Generator函数体内捕获
var g = function* () {
  try {
    yield;
  } catch (e) {
    console.log('内部捕获', e);
  }
};

var i = g();
i.next();

try {
  i.throw('a');
  i.throw('b');
} catch (e) {
  console.log('外部捕获', e);
}
// 内部捕获 a
// 外部捕获 b


// Generator.prototype.return()
// ====================================================================================================
// 遍历器对象有一个return方法，可以返回给定的值，并且终结遍历Generator函数。
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

var g = gen();

console.log(g.next());        // { value: 1, done: false }
console.log(g.return('foo')); // { value: "foo", done: true }
console.log(g.next());        // { value: undefined, done: true }


