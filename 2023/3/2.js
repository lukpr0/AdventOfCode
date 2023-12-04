import fs from 'fs'

let content = fs.readFileSync('input.txt', 'utf-8').split('\r\n').map(x=>x.split(''));

const gears = [];

for (let line = 0; line < content.length; line++) {
    for (let char = 0; char < content[line].length; char++) {
        let digit = content[line][char];
        if (digit.match(/\*/)) {
            let nums = [];
            if (line > 0) {
                if (content[line-1][char].match(/\d/)) {
                    let start = char;
                    while (start > 0 && content[line-1][start].match(/\d/)) start--;
                    if (!content[line-1][start].match(/\d/)) start++;
                    let num = 0;
                    while (start < content[line-1].length && content[line-1][start].match(/\d/)) {
                        num = 10*num+parseInt(content[line-1][start]);
                        start++;
                    }
                    nums.push(num);
                } else {
                    if (char > 0 && content[line-1][char-1].match(/\d/)) {
                        let start = char-1;
                        while (start > 0 && content[line-1][start].match(/\d/)) start--;
                        if (!content[line-1][start].match(/\d/)) start++;
                        let num = 0;
                        while (start < content[line-1].length && content[line-1][start].match(/\d/)) {
                            num = 10*num+parseInt(content[line-1][start]);
                            start++;
                        }
                        nums.push(num);
                    }
                    if (char + 1 < content[line-1].length && content[line-1][char+1].match(/\d/)) {
                        let start = char + 1;
                        let num = 0;
                        while (start < content[line-1].length && content[line-1][start].match(/\d/)) {
                            num = 10*num+parseInt(content[line-1][start]);
                            start++;
                        }
                        nums.push(num)
                    }
                }                
            } 
            if (line < content.length - 1) {
                if (content[line+1][char].match(/\d/)) {
                    let start = char;
                    while (start > 0 && content[line+1][start].match(/\d/)) start--;
                    if (!content[line+1][start].match(/\d/)) start++;
                    let num = 0;
                    while (start < content[line+1].length && content[line+1][start].match(/\d/)) {
                        num = 10*num+parseInt(content[line+1][start]);
                        start++;
                    }
                    nums.push(num);
                } else {
                    if (char > 0 && content[line+1][char-1].match(/\d/)) {
                        let start = char-1;
                        while (start > 0 && content[line+1][start].match(/\d/)) start--;
                        if (!content[line+1][start].match(/\d/)) start++;
                        let num = 0;
                        while (start < content[line+1].length && content[line+1][start].match(/\d/)) {
                            num = 10*num+parseInt(content[line+1][start]);
                            start++;
                        }
                        nums.push(num);
                    }
                    if (char + 1 < content[line+1].length && content[line+1][char+1].match(/\d/)) {
                        let start = char + 1;
                        let num = 0;
                        while (start < content[line+1].length && content[line+1][start].match(/\d/)) {
                            num = 10*num+parseInt(content[line+1][start]);
                            start++;
                        }
                        nums.push(num);
                    }
                }
            }
            if (char > 0) {
                if (content[line][char-1].match(/\d/)) {
                    let start = char-1;
                    while (start > 0 && content[line][start].match(/\d/)) start--;
                    if (!content[line][start].match(/\d/)) start++;
                    let num = 0;
                    while (start < content[line].length && content[line][start].match(/\d/)) {
                        num = 10*num+parseInt(content[line][start]);
                        start++;
                    }
                    nums.push(num);
                }
            }
            if (char < content[line].length - 1 && content[line][char+1].match(/\d/)) {
                let start = char + 1;
                let num = 0;
                while (start < content[line].length && content[line][start].match(/\d/)) {
                    num = 10*num+parseInt(content[line][start]);
                    start++;
                }
                nums.push(num);
            }
            if (nums.length > 0) {
                gears.push(nums)
            }
            
        }
    }
}

let sum = 0;

for (let nums of gears) {
    if (nums.length == 2) {
        sum += nums[0] * nums[1];
    }
}

console.log(gears)
console.log(sum)