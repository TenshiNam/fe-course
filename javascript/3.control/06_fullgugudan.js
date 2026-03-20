let header = "";
const colWidth = 14;


for (let dan = 2; dan <= 9; dan++) {
  
  header += `[ ${dan}단 ]`.padEnd(colWidth, " ");
}
console.log(header);
console.log("-".repeat(header.length));

for (let i = 1; i <= 9; i++) {
  let row = "";

  for (let dan = 2; dan <= 9; dan++) {
    let value = dan * i;
    
    let formula = `${dan} * ${i} = ${value.toString().padStart(2, ' ')}`;
    
    row += formula.padEnd(colWidth, " ");
  }
  console.log(row);
}

console.clear()
for (let i = 1; i <= 5; i++) {
  console.log("*".repeat(i));
}

for (let i = 1; i <= 5; i++) {
  if (i === 3) {

    console.log("🍎".repeat(i));
  } else {

    console.log("🍏".repeat(i));
  }
}

console.clear();
for(let i=1; i <=5; i++) {
  let output = '';
  // 1. '' 를 ' ' (공백 한 칸)으로 수정
  let space = ' '.repeat(5 - i); 
  
  output += '🍏'.repeat(i);
  
  // 2. 쉼표(,)를 더하기(+)로 수정
  console.log(space + output);
}

for(let i=5; i >= 1; i--) {
  let output = '';
  // 1. '' 를 ' ' (공백 한 칸)으로 수정
  let space = ' '.repeat(5 - i); 
  
  output += '🍎'.repeat(i);
  
  // 2. 쉼표(,)를 더하기(+)로 수정
  console.log(space + output);
}
