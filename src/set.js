// 基本用法
// ====================================================================================================
const s1 = new Set();
[1,2,2,3,4,4,4,5].forEach(x => s1.add(x));

for(let i of s1){
	console.log(i);  // 1 2 3 4 5 
}

// 可用于数组去重
const s2 = new Set([1,2,2,3,4,'4',4,5,{},{},NaN,NaN]);
console.log([...s2]);  // [ 1, 2, 3, 4, '4', 5, {}, {}, NaN ]

// add(),delete(),has(),clear()
// ====================================================================================================
const s3 = new Set();
s3.add(1).add(1).add(2);
console.log(s3.size);  // 2
console.log(s3.has(1));  // true
console.log(s3.has(2));  // true
s3.delete(1);
console.log(s3.has(1));  // false


// keys(),values(),entries(),forEach()
// ====================================================================================================
let s4 = new Set(['red', 'green', 'blue']);
for (let item of s4.entries()) {
  console.log(item);  
}
// [ 'red', 'red' ]
// [ 'green', 'green' ]
// [ 'blue', 'blue' ]


// 交、并、差运算
// ====================================================================================================
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

// 并集
let union = new Set([...a, ...b]);
console.log(union);  
// Set {1, 2, 3, 4}

// 交集
let intersect = new Set([...a].filter(x => b.has(x)));
console.log(intersect);  
// set {2, 3}

// 差集
let difference = new Set([...a].filter(x => !b.has(x)));
console.log(difference);  
// Set {1}


// WeakSet
// ====================================================================================================
/*
关键点：
1. WeakSet中只能存放对象；
2. WeakSet中的对象都是弱引用，即垃圾回收机制不考虑WeakSet对该对象的引用；
3. WeakSet没有size属性，没有办法遍历它的成员；（因为成员都是弱引用，随时可能消失）
详略。
*/


