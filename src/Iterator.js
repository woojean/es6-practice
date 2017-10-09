// 基本概念
// ====================================================================================================
// 遍历器对象本质上，就是一个指针对象。
// 每一次调用next方法，都会返回一个包含value和done两个属性的对象。其中，value属性是当前成员的值，done属性是一个布尔值，表示遍历是否结束。

// Iterator对象的next()方法的模拟实现
var it = makeIterator(['a', 'b']);

console.log(it.next()); // { value: "a", done: false }
console.log(it.next()); // { value: "b", done: false }
console.log(it.next()); // { value: undefined, done: true }

function makeIterator(array) {
  var nextIndex = 0;
  return {
    next: function() {
      return nextIndex < array.length ?
        {value: array[nextIndex++], done: false} :
        {value: undefined, done: true};
    }
  };
}

/*
{ value: 'a', done: false }
{ value: 'b', done: false }
{ value: undefined, done: true }
*/








