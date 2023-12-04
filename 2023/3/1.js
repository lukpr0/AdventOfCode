import fs from 'fs'

let content = fs.readFileSync('input.txt', 'utf-8').split('\r\n').map(x=>x.split(''));

/*let content = 
`467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`.split('\n').map(x=>x.split(''))*/

/*let content = `...
.1.
..1`.split('\n').map(x=>x.split(''))*/

function isSymbol(char) {
    return char.match(/[^\d\.]/)
}
let sum = 0;

for (let line = 0; line < content.length; line++) {
    let number = 0;
    let symbolAdjacent = false;
    for (let char = 0; char < content[line].length; char++) {
        let digit = content[line][char];
        if (digit.match(/\d/)) {
            if (line > 0 && isSymbol(content[line-1][char])) symbolAdjacent = true;
            if (line > 0 && char > 0 && isSymbol(content[line-1][char-1])) symbolAdjacent = true;
            if (line > 0 && char < content[line].length-1 && isSymbol(content[line-1][char+1])) symbolAdjacent = true;
            
            if (line < content.length-1 && isSymbol(content[line+1][char])) symbolAdjacent = true;
            if (line < content.length-1 && char > 0 && isSymbol(content[line+1][char-1])) symbolAdjacent = true;
            if (line < content.length-1 && char < content[line].length-1 && isSymbol(content[line+1][char+1])) symbolAdjacent = true;
            
            if (char < content[line].length-1 && isSymbol(content[line][char+1])) symbolAdjacent = true;
            if (char > 0 && isSymbol(content[line][char-1])) symbolAdjacent = true;

            number *= 10;
            number += parseInt(digit);
        } else {
            if (symbolAdjacent) {
                sum += number;
            }
            number = 0;
            symbolAdjacent = false;
        }
    }
    if (symbolAdjacent) {
        sum += number;
    } 
}

console.log(sum)
//71430818