/**
 * class(클래스)란? 객체를 생성하기 위한 설계도(틀)
 * - 생성자 함수와의 차이점
 * - 객체지향언어의 클래스와는 다름을 이해
 * - 자바스크립트에서 실행시 내부적으로 프로토타입 기반의 형식으로 실행 됨  
 * 
 * 형식
 * class 클래스명 {
 *      //필드명(Field)
 *      //생성자(constructor)
 *      //메소드(Method)
 * }
 */


class Animal {
    // Field - 변수, 상수 => stiatic으로 정의
    static MAX_SIZE = 10;
    // Constructor - 객체 생성시 호출, new로 호출
    constructor(name, emoji) {
        this.name = name;
        this.emoji = emoji;
    }
    // Method - 기능, 동작을 함수로 정의
}

console.log(`Animal.MAX_SIZE = ${Animal.MAX_SIZE}`);
let dog = new Animal('happy', '🐶');
console.log(dog);
console.log(dog.name);
console.log(dog.emoji);
console.log(typeof dog);