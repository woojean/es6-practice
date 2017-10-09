// 解构数组
// ====================================================================================================
let [x, y, ...z] = ['abc'];
console.log(x); // "abc"
console.log(y); // undefined
console.log(z); // []

let [...a] = ['abc'];
console.log(a); // [ 'abc' ]

let [b] = [];
console.log(b); // undefined

let [c = true] = [];
console.log(c); // true

let [d = 1] = [undefined];
console.log(d); // 1

let [e = 1] = [null];  // 默认值生效的条件是，对象的属性值严格等于（===）undefined
console.log(e); // null


// 解构生成器
// ====================================================================================================
function* fibs() {
  let a = 0;
  let b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

let [first, second, third] = fibs();
let [fourth, fifth, sixth, seven] = fibs();
console.log(first); // 0
console.log(second); // 1
console.log(third); // 1
console.log(fourth); // 0
console.log(fifth); // 1
console.log(sixth); // 1
console.log(seven); // 2



// 解构对象
// ====================================================================================================
// 对象的属性没有次序，变量必须与属性同名，才能取到正确的值
let { bar, foo } = { foo: "aaa", bar: "bbb" };  // 相当于 let { foo: foo, bar: bar } = { foo: "aaa", bar: "bbb" };
console.log(foo); // "aaa"
console.log(bar); // "bbb"

let { baz } = { foo: "aaa", bar: "bbb" };
console.log(baz); // undefined

// 如果变量名与属性名不一致，必须写成下面这样
let obj1 = { first: 'hello', last: 'world' };
let { first: f, last: l } = obj1;
console.log(f); // 'hello'
console.log(l); // 'world'

// 用于嵌套结构的对象
let obj2 = {
  p: [
    'Hello',
    { y2: 'World' }
  ]
};

let { p: [x2, { y2 }] } = obj2;
console.log(x2); // "Hello"
console.log(y2); // "World"

// 由于数组本质是特殊的对象，因此可以对数组进行对象属性的解构
let arr = [1, 2, 3];
let {0 : firstItem, [arr.length - 1] : lastItem} = arr;
console.log(firstItem); // 1
console.log(lastItem);  // 3


// 解构字符串
// ====================================================================================================
let {length : len} = 'hello';
console.log(len); // 5


// 解构函数参数
// ====================================================================================================
let ret = [[1, 2], [3, 4]].map(([a, b]) => a + b);
console.log(ret); // [ 3, 7 ]
















