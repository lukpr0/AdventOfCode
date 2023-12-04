import fs from 'fs'

let content = fs.readFileSync('input.txt', 'utf-8');

const res= 
content.split('\n')
    .map(x => x
        .split(':')[1]
        .trim())
    .map(x => x
        .split('|')[0]
        .trim()
        .split(/\s+/g)
        .filter(e=>(
            new Set(
                x.split('|')[1]
                .trim()
                .split(' ')
                )
            .has(e)
            )
        )
    )
    .map(x => x.length)

const map = new Map();

for (let i = 0; i < res.length; i++) {
    map.set(i,1);
}

for (let i = 0; i < res.length; i++) {
    for (let j = 0; j < res[i]; j++) {
        const n = map.get(i+j+1) + map.get(i)
        map.set(i+j+1, n)
    }
}

let sum = 0;
for (let num of map.values()) sum += num;

console.log(sum)