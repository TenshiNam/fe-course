/**
 * 얕은 복사는 아주 최소한만 복사를 한다. 값을 복사한다 하더라도,
 *  인스턴스가 메모리에 새로 생성되지 않는다. 값 자체를 복사하는 것이 아니라 주소값을 복사하여 같은 메모리를 가리키기 때문이다.
 */

let fruits = ['apple', 'orange', 'lemon']
let fruitsCopy = Array.from(fruits);
console.log(fruits, typeof fruits);
console.log(fruitsCopy, typeof fruitsCopy);

fruitsCopy[0] = 'mango';
fruits[0] = '🍎';
console.log();
console.log(fruits, typeof fruits);
console.log(fruitsCopy, typeof fruitsCopy);

let fruitsObj = [
    {name: 'apple', emoji: '🍎'},
    {name: 'orange', emoji: '🍊'}, // 따옴표와 쉼표 추가
    {name: 'lemon', emoji: '🍋'}
];
let fruitsObjCopy =Array.from(fruitsObj);
console.log(fruitsObj, typeof fruitsObj);
console.log(fruitsObjCopy, typeof fruitsObjCopy);
