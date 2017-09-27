// 扩展运算符：将一个数组转为参数序列（用逗号分隔）
// ====================================================================================================
console.log(1, ...[2, 3, 4], 5);  // 1 2 3 4 5

function add(x, y) {
  return x + y;
}

const numbers = [4, 38];
console.log(add(...numbers)); // 42  即add(...[x,y])相当于add(x,y)

// 如果扩展运算符后面是一个空数组，则不产生任何效果
console.log([...[], 1]); // [1]

// 与解构赋值结合使用
const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(rest);  // [2, 3, 4, 5]

// 如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错。


// 任何 Iterator 接口的对象，都可以用扩展运算符转为真正的数组。
let map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

let arr = [...map.keys()]; // [1, 2, 3]
console.log(arr);

const go = function*(){
  yield 1;
  yield 2;
  yield 3;
};
console.log([...go()]); // [1, 2, 3]


// Array.from()
// ====================================================================================================
// Array.from方法用于将两类对象转为真正的数组：类似数组的对象和可遍历的对象
// 所谓类似数组的对象，本质特征只有一点，即必须有length属性。因此，任何有length属性的对象，都可以通过Array.from方法转为数组
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

let arr = Array.from(arrayLike); 
console.log(arr);  // ['a', 'b', 'c']

console.log(Array.from('hello'));  // ['h', 'e', 'l', 'l', 'o']

let namesSet = new Set(['a', 'b'])
console.log(Array.from(namesSet));  // ['a', 'b']

console.log(Array.from({ length: 3 }));  // [ undefined, undefined, undefined ]

// Array.from还可以接受第二个参数，用来对每个元素进行处理，将处理后的值放入返回的数组
console.log(Array.from([1, 2, 3], (x) => x * x));  // [1, 4, 9]


// Array.of()
// ====================================================================================================
// Array.of方法用于将一组值，转换为数组
console.log(Array.of(3, 11, 8)); // [3,11,8]


// copyWithin()
// ====================================================================================================
// 数组实例的copyWithin方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。
console.log([1, 2, 3, 4, 5].copyWithin(0, 3));  // [4, 5, 3, 4, 5]
console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4)); // [4, 2, 3, 4, 5]


// find()和findIndex()
// 用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。
console.log([1, 4, -5, 10].find((n) => n < 0));  // -5

console.log([1, 5, 10, 15].find(function(value, index, arr) {
  return value > 9;
}));  // 10

console.log([1, 5, 10, 15].findIndex(function(value, index, arr) {
  return value > 9;
}));  // 2


// fill()
// ====================================================================================================
console.log(['a', 'b', 'c'].fill(7));  // [7, 7, 7]
console.log(['a', 'b', 'c'].fill(7, 1, 2));  // ['a', 7, 'c']


// entries()，keys() 和 values()
// ====================================================================================================
// 它们都返回一个遍历器对象，可以用for...of循环进行遍历，唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。
for (let index of ['a', 'b'].keys()) {
  console.log(index);
}
// 0
// 1

for (let [index, elem] of ['a', 'b'].entries()) {
  console.log(index, elem);
}
// 0 "a"
// 1 "b"


// includes()
// ====================================================================================================
// includes()方法返回一个布尔值，表示某个数组是否包含给定的值
console.log([1, 2, 3].includes(2));  // true
console.log([1, 2, 3].includes(3, -1));  // true


// 数组的空位
// ====================================================================================================
// 数组的空位指，数组的某一个位置没有任何值。
[,'a'].forEach((x,i) => console.log(i)); // 1
console.log([,'a'].every(x => x==='a')); // true
console.log(Array.from(['a',,'b']));  // [ "a", undefined, "b" ]

let arr = [, ,];
for (let i of arr) {
  console.log(1);
}
// 1
// 1

// 由于空位的处理规则非常不统一，所以建议避免出现空位。

