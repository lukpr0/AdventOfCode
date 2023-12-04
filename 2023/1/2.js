import fs from 'fs'

let content = fs.readFileSync('input.txt', 'utf-8').toLowerCase().split('\r\n');

let sum = 0;

console.log(reverse('abc2x3oneight').match(/eno|owt|eerht|ruof|evif|xis|neves|thgie|enin|\d/gm))

console.log(reverse('abc2x3oneight'))

for (let line of content) {
    if (line == "") {
        continue;
    }
    let firstDigit = toInt(line.match(/one|two|three|four|five|six|seven|eight|nine|\d/gm)[0])
    let lastDigit = toInt(reverse(reverse(line).match(/eno|owt|eerht|ruof|evif|xis|neves|thgie|enin|\d/gm)[0]))
    let val = 10*firstDigit+lastDigit
    sum += val;
}



function toInt(num) {
    let value = parseInt(num)
    if (value) {
        return value;
    }
    switch (num) {
        case 'one': return 1;
        case 'two': return 2
        case 'three': return 3;
        case 'four': return 4;
        case 'five': return 5;
        case 'six': return 6;
        case 'seven': return 7;
        case 'eight': return 8;
        case 'nine': return 9;
    }
}

function reverse(string) {
    return string.split('').reverse().join('');
}

console.log(sum)