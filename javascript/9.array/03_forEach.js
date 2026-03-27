/**
 * forEach 메소느는 Iterator 심볼 객체를 상곡한 객체에서 사용 됨
 * - Iterator 상속 객체.forEach(callback)
 * ARRAY(배열).ForEach()
 */
let numbers = [1, 2, 3, 4, 5, 6];
numbers.forEach((item, idx) => console.log(`number[${idx}] = ${item}`));

let fruits = new Array('🍏', '🍊', '🍎', '🍋', '🍅');
fruits.forEach((item) => { console.log(item)});