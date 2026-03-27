/**
 * 전역 함수로 최상위 객체인 Window 객체에서 호출되는 함수
 * - 호출방법 : window.함수명
 * - 객체명을 생략 가능
 * - window.alert(), window.confirm(). Number.parseInt(window,parseInt) ...
 */
let number = '123.4567';
let intNumber = Number.parseInt(number);
let intNumber2 = Number.parseInt(number);
console.log('number =', number, typeof number);
console.log('intNumber =', intNumber, typeof intNumber);
console.log('intNumber2 =', intNumber, typeof intNumber2);