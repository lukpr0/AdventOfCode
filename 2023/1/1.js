import fs from 'fs'

let content = fs.readFileSync('input.txt', 'utf-8');

let sum = 0;

for (let line of content.split('\r\n')) {
    if (line == "") {
        continue;
    }
    let val = 0;
    for (let char of line) {
        let num = parseInt(char)
        if (num) {
            val += 10*num
            break;
        }
    }
    for (let char of line.split('').reverse().join()) {
        let num = parseInt(char)
        if (num) {
            val += num;
            break;
        }
    }
    sum += val;
}

console.log(sum)