import fs from 'fs'

let content = fs.readFileSync('input.txt', 'utf-8');

let res= 
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
    .map(x => 
        x.reduce(e => e == 0 ? 1 : e*2, 0)
    )
    .reduce((e,n) => e+n , 0)

console.log(res)