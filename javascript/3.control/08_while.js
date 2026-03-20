let i = 1;

while ( i <= 10) {
    console.log(i);
    i++;
}

let j = 1;

while ( j <= 10) {
    console.log(j);
    if(j===7) break;
    j++;
}
 

let flag = true;
let menu = 3;
while(flag) {
    console.log(`1:피자, 2:핫도그, 3:햄버거`);
    if (menu === 1) {
        console.log(`🍕`);
        flag = false;
    } else if (menu === 2) {
        console.log(`🌭`);
        flag = false;
    } else if (menu === 3) {
        console.log(`🍔`);
        flag = false;
    } else {
        console.log('메뉴 준비중~, 다른 메뉴를 선택해주세요.')
        flag = false;
    }
}