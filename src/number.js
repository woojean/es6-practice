// Number对象的方法
// ====================================================================================================
// Number.isFinite(...)
console.log(Number.isFinite(15));  // true
console.log(Number.isFinite(0.8));  // true
console.log(Number.isFinite(NaN));  // false
console.log(Number.isFinite(Infinity));  // false
console.log(Number.isFinite(-Infinity));  // false
console.log(Number.isFinite('foo'));  // false
console.log(Number.isFinite('15'));  // false
console.log(Number.isFinite(true));  // false

// Number.isNaN(...)
console.log(Number.isNaN(NaN));  // true
console.log(Number.isNaN(15));  // false
console.log(Number.isNaN('15'));  // false   !!!
console.log(Number.isNaN(true));  // false   !!!
console.log(Number.isNaN(9/NaN));  // true
console.log(Number.isNaN('true'/0));  // true
console.log(Number.isNaN('true'/'true'));  // true

// Number.isFinite()对于非数值一律返回false, Number.isNaN()只有对于NaN才返回true，非NaN一律返回false。

// Number.parseInt(...), Number.parseFloat(...)
console.log(Number.parseInt('12.34'));  // 12
console.log(Number.parseFloat('123.45#'));  // 123.45

// Number.isInteger(...)
console.log(Number.isInteger(25));  // true
console.log(Number.isInteger(25.0));  // true  在JavaScript内部，整数和浮点数是同样的储存方法，所以25和25.0被视为同一个值。
console.log(Number.isInteger(25.1));  // false
console.log(Number.isInteger("15"));  // false
console.log(Number.isInteger(true));  // false


// Number.EPSILON
console.log(Number.EPSILON);  // 2.220446049250313e-16

// Number.isSafeInteger()
// JavaScript能够准确表示的整数范围在-2^53到2^53之间（不含两个端点），超过这个范围，无法精确表示这个值。Number.isSafeInteger()则是用来判断一个整数是否落在这个范围之内。

console.log(9007199254740993);  // 9007199254740992
console.log(Math.pow(2, 53) === Math.pow(2, 53) + 1);  // true
console.log(Number.MIN_SAFE_INTEGER);  // -9007199254740991


// Math.trunc(),Math.fround()
console.log(Math.trunc(4.9));  // 4  去掉一个数的小数部分
console.log(Math.fround(1.337));  // 1.3370000123977661  返回一个数的单精度浮点数形式

// 指数运算符 **
console.log(2**3);  // 8


/*
JavaScript所有数字都保存成64位浮点数，这决定了整数的精确程度只能到53个二进制位。大于这个范围的整数，JavaScript 是无法精确表示的，这使得 JavaScript 不适合进行科学和金融方面的精确计算。
现在有一个提案，引入了新的数据类型 Integer（整数），来解决这个问题。
*/ 













