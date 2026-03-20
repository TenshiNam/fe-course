for(let i=1; i<=20; i++) {
    console.log(`i = ${i}`);
    if(i===7) {
        break;
    }
}
console.log();

// i=7 이면 종료 - 조건식을 false로 만들기
for(let i=1; i<=10; i++) {  
    console.log(`i = ${i}`);
    if(i===7) i=11;  
}