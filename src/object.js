// 属性的简洁表示法
// ====================================================================================================
// ES6允许在对象之中直接写变量。这时，属性名为变量名, 属性值为变量的值
function f(x, y) {
  return {x, y};  // 等同于{x: x, y: y }
}

console.log(f(1,2));  // { x: 1, y: 2 }


// 方法也可以简写
const o = {
  method() {
    return "Hello!";
  }
};
console.log(o.method());  //  Hello!

// 属性名表达式
// ====================================================================================================
let propKey = 'foo';

let obj = {
  [propKey]: true,
  ['a' + 'bc']: 123
};

console.log(obj);  // { foo: true, abc: 123 }

// Object.is()
// ====================================================================================================
// 用来比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致
console.log(Object.is('foo', 'foo'));  // true
console.log(Object.is({}, {}));  // false
console.log(Object.is(NaN, NaN));  // true，使用===则为false

// Object.assign()
// ====================================================================================================
// 用于对象的合并，将源对象的所有可枚举属性，复制到目标对象，对于同名属性，后面的值会覆盖前面的
const target = { a: 1 };
const source1 = { b: 2 };
const source2 = { c: 3 };
const source3 = { c: 4};
const source4 = true; // 无可枚举属性

Object.assign(target, source1, source2, source3, source4);
console.log(target); // {a:1, b:2, c:4}

// Object.assign方法实行的是浅拷贝，而不是深拷贝
const obj1 = {a: {b: 1}};
const obj2 = Object.assign({}, obj1);
obj1.a.b = 2;
console.log(obj2.a.b); // 2


// Object.getOwnPropertyDescriptor
// ====================================================================================================
let obj = { foo: 123 };
console.log(Object.getOwnPropertyDescriptor(obj, 'foo'));
/*
{ 
  value: 123,
  writable: true,
  enumerable: true,
  configurable: true 
}
*/
/* enumerable属性用于标识属性是否可枚举。如下操作会忽略不可枚举的属性：
* for ... in
* Object.keys()
* JSON.stringify()
* Object.assign()
*/
// Object.getOwnPropertyDescriptors()返回指定对象所有自身属性（非继承属性）的描述对象。


// 属性的遍历
// ====================================================================================================
// 略。

// Object.setPrototypeOf()
// ====================================================================================================
// 作用与设置__proto__属性相同，用来设置一个对象的prototype对象。
let proto = {};
let obj = { x:10 };
Object.setPrototypeOf(obj, proto);

proto.y = 20;
proto.z = 40;

console.log(obj.x); // 10
console.log(obj.y); // 20
console.log(obj.z); // 40
// Object.setPrototypeOf()用于读取一个对象的原型对象。

// Object.keys()，Object.values()，Object.entries()
// ====================================================================================================
// 略。


// 对象的扩展运算符
// ====================================================================================================
// 结构运算符、扩展运算符，略。

