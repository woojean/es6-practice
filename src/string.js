// includes(), startsWith(), endsWith()
// ====================================================================================================
let s = 'Hello world!';
console.log(s.startsWith('Hello')) // true
console.log(s.endsWith('!')) // true
console.log(s.includes('o')) // true
console.log(s.startsWith('world', 6)) // true
console.log(s.endsWith('Hello', 5)) // true
console.log(s.includes('Hello', 6)) // false


// repeat()
// ====================================================================================================
console.log('hello'.repeat(2)) // "hellohello"


// 模板字符串
// ====================================================================================================
let basket = {
	count:2,
	onSale:"item"
};
console.log(`
  There are <b>${basket.count}</b> items
    in your basket, <em>${basket.onSale +"-"+ basket.count}</em>
  are on sale!
`.trim());


