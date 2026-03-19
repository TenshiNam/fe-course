/**
 * call by value : 데이터 중복 시 값 복제
 * - 값이 stack에 저장 되어 있는 경우
 */

let number = 100;
let cnumber = number; // call by value

let flag = true;
let cflag = flag;

console.log(number, typeof number);
console.log(cnumber, typeof cnumber);
console.log(number === cnumber);
console.log();
console.log(flag, typeof flag);
console.log(cflag, typeof cflag);
console.log(flag === cflag);

number = 200;
flag = false;
console.log(number, cnumber);
console.log(flag, clfag);