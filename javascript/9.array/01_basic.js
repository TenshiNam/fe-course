/**
 * 배열(Array)
 * -동일한 데이터 타입을 가진 요소를 물리적인 공간에 연속적으로 저장
 */


let array1 = [];
let array2 = new Array(2);
let array3 = new Array(5);

console.log(array2.length, array2.length, array3.length);

let names = ['홍길동', '스미스', '이순신'];
let fruits =['🍋', '🍎', '🍊', '🍏'];
console.log(names.length, fruits.length);

names[3] = '제임스';
console.log(names);
