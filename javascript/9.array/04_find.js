/**
 * 배열에서 검색하려는 첫 번째 요소를 반환, 없으면 undefined 반환
 * - 배열객체.find(callback)
 */

let fruits = new Array('🍏', '🍊', '🍎', '🍋', '🍅');
let findObj = fruits.find((item) => (item === '🍊'))
console.log(`findObj = ${findObj}`);
 
let findIdx = fruits.find((item, idx) =>  (item === '🍊'))

console.log(`findObj = ${findIdx}`);