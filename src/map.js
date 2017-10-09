// 基本用法
// ====================================================================================================
/*
// map的键可以是对象
const m1 = new Map();
const o = {p: 'Hello World'};

m1.set(o, 'content')
console.log(m1.get(o)); // content
*/

// 任何具有Iterator接口、且每个成员都是一个双元素的数组的数据结构都可以当作Map构造函数的参数
/*
const m2 = new Map([
  ['name', '张三'],
  ['title', 'Author']
]);

console.log(m2);  // Map { 'name' => '张三', 'title' => 'Author' }
*/


// WeakMap
// 略。

