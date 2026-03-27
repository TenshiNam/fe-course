/**
 * static 상수, 메소드 정의 - 클래스 상수, 클래스 메소드
 * static 키워드가 붙은 상수, 메소드
 * - 호출시 : 클래스명, 상수, 클래스명 메소드
 * 
 */

class Fruit {
    static Max_SIZE  = 10;
    name; 
    color; 
    emoji;

    constructor(a, b, c) {
        this.name = a;
        this.color = b;
        this.emoji = c;
    }

    static getName = () => {return this.name;}
    getName = () => {return this.name;}

    static create = (name, color, emoji) => {
        return new Fruit(name, color, emoji);
    }
}

let apple = new Fruit('apple', 'red', '🍎');
console.log(apple);
console.log(Fruit.getName()); //Fruit 출력
console.log(apple.getName()); //apple 출력

let lemon = Fruit.create('lemon', 'yellow', '🍋');
console.log(lemon);
console.log(lemon.getName());