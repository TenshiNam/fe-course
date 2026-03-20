

let count = 1;

for(let i=1; i<3; i++) {
    let output = '';
    for(let j=1; j<4; j++) {
        output = output + `${count++}(${i}, ${j}) \t`;
    }
    console.log(output);
}