/**
 * const : 상수 선언 시 사용
 * - 정의 된 상수에 데이터 재할당 X
 */

const name = '홍길동';
// name = '이순신'; // TypeError: Assignment to constant variable

console.log(name);

let name2 = '홍길동';
name2 = '이순신'; //데이터 재할당 O
console.log(name2);