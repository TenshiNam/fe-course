/**
 * wrapper 클래스 - 기본형(원시) 데이터 타입을 객체로 생성하기 위하는 클래스 타입
 * - 기본형(원시) 데이터 타입의 클래스는 첫 글자를 대문자로 정의한 Pascal Case.
 * - Number(클래스): number(기본형)
 * - String(클래스): string(기본형)
 * - Boolean(클래스): boolean(기본형)
 * - 클래스를 통해 객체 생성 시 메소드 호출이 가능
 */

let num1 = 100;
let num2 = new Number(100);

console.log(num1, typeof num1);
console.log(num2, typeof num2);
console.log(num1 == num2);
console.log(num1 === num2);
console.log('num1.valueOf() =', num1.valueOf());
console.log('num2.valueOf() =', num1.valueOf());

let str1 = '자바스크립트, JavaScript';
let str2 = new String('자바스크립트');
console.log();
console.log(str1, typeof str1);
console.log(str2, typeof str2);
console.log(str1 == str2);
console.log(str1 === str2);
console.log(str1.length);
console.log(str2.length);

let flag1 = true;
let flag2 = new Boolean(true);

console.log();
console.log(flag1, typeof flag1);
console.log(flag2, typeof flag2);
console.log(flag1 == flag2);
console.log(flag1 === flag2);