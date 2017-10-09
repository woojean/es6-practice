// 基本用法
// ====================================================================================================
// Promise对象就是一个保存着某个未来才会结束的事件的结果
// Promise构造函数中的参数resolve和reject是两个函数，由JavaScript引擎提供，不用自己部署
// Promise新建后会立即执行
let promise = new Promise(function(resolve, reject) {  

  // ...异步操作等

  console.log('Promise');
  resolve();
});

// then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行
// then方法的作用是为Promise实例添加状态改变时的回调函数（第一个参数是resolved状态的回调函数，第二个参数（可选）是rejected状态的回调函数）
promise.then(function() {
  console.log('resolved.');
});

console.log('Hi!');

/*
Promise
Hi!
resolved.
*/


// Promise.prototype.catch()
// ====================================================================================================
// Promise.prototype.catch方法是.then(null, rejection)的别名。


// Promise.all()
// ====================================================================================================
// Promise.all()用于将多个Promise实例（如果传入的对象不是Promise实例，则会通过调用Promise.resolve方法将其转换为Promise实例后再做进一步处理），包装成一个新的Promise实例
var promises = [2, 3, 5, 7, 11, 13].map(function (id) {
  return id;
});

Promise.all(promises).then(function (posts) {
  // ...
  console.log(posts);  // [ 2, 3, 5, 7, 11, 13 ]
}).catch(function(reason){
  // ...
});


// Promise.resolve()
// ====================================================================================================
// 将现有对象转为Promise对象
/*
Promise.resolve('foo')
等价于
new Promise(resolve => resolve('foo'))
*/






















