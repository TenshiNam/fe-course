function add1(a, b) {
    return a + b;
}

const add2 = (a, b) => {
    return a + b;
}

const add3 = function(a, b) {
    return a + b;
}

const numbers = [1, 2, 3, 4, 5];

// 1. 중괄호를 쓸 때 (return 명시)

// 2. 중괄호를 안 쓸 때 (가장 많이 쓰는 방식)
let sum2 = numbers.reduce((acc, cur) => acc + cur, 0);

console.log(sum2); // 이제 진짜 15가 출력됩니다!