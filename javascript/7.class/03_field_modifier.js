/**
 * 클래스의 필드에 선언되는 변수, 상수에 대한 접근 제한자
 * 변수, 상수 앞에 #을 붙이면 private으로 설정, 클래스 내에서만 접근 ⭕, 외부 접근 ❌
 * #이 붙지 않으면 public, 클래스 내부 접근 ⭕, 외부 접근 ❌
 */

class Person {
    #empno; // 1. Private 필드 선언
    name;
    age;

    constructor(empno, name, age) {
        this.#empno = empno;
        this.name = name;
        this.age = age;
    }

    // 2. Setter 정의 (외부에서 값을 바꿀 때 호출됨)
    set setEmpno(newId) {
        // 여기서 유효성 검사 등을 추가할 수도 있습니다.
        if (newId.length >= 4) {
            this.#empno = newId;
            console.log(`사번이 ${newId}로 변경되었습니다.`);
        } else {
            console.log("잘못된 사번 형식입니다.");
        }
    }

    // 3. Getter 정의 (외부에서 #empno를 읽고 싶을 때)
    get empno() {
        return this.#empno;
    }

    display = () => {
        console.log(`사번: ${this.#empno}, 이름: ${this.name}, 나이: ${this.age}`);
    }
}

let hong = new Person('1234', '홍길동', 30);
hong.display();

// 4. Setter 호출 (함수처럼 ()를 붙이지 않고 대입 연산자를 사용합니다)
hong.setEmpno = '4567'; 

hong.display(); // 변경된 값 확인
console.log("현재 사번:", hong.empno); // Getter를 통해 읽기