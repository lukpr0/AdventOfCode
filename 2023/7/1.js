import fs from 'fs'
const values = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J','Q','K','A']

let content = fs.readFileSync('input.txt', 'utf-8')
    .split(/\r?\n/gm)
    .map(x => [...x.split(' '), getPattern(x.split(' ')[0].split('').sort().join(''))])//.forEach(x => console.log(x, getPattern(x[0].split('').sort().join(''))))
    .sort((a,b) => compare(a[0], b[0]))
    .map((x,i)=>x[1]*(i+1))
    .reduce((e,n)=>e+n,0)

console.log(content)

let a = 'KK677'.split('').sort().join('')
let b = 'T55J5'.split('').sort().join('')

//console.log(compare(b,a))

function compare(a, b) {
    const as = a.split('').sort().join('')
    const bs = b.split('').sort().join('')
    const scorea = getPattern(as)
    const scoreb = getPattern(bs)
    if (scorea == scoreb) {
        for (let i = 0; i < a.length; i++) {
            //console.log(a[i], b[i])
            if (values.indexOf(a[i]) > values.indexOf(b[i])) {
                return 1
            } else if (values.indexOf(a[i]) < values.indexOf(b[i])) {
                return -1
            }
        }
    }  
    return scorea - scoreb
}

//let test = ['11111', 'AAAA1', '22333', 'K1K2K', 'AAKKQ', '11KQA', '12345', 'AAAAA'].sort(compare)
//console.log(test)

function getPattern(as) {
    let scorea = 0;
    // 5 of a kind
    if (as.match(/(\w)\1{4}/)) {
        scorea = 6;
    // 4 of a kind
    } else if (as.match(/(\w)\1{3}\w|\w(\w)\2{3}/)) {
        scorea = 5;
    // Full house
    } else if (as.match(/(\w)\1{2}(\w)\2|(\w)\3(\w)\4{2}/)) {
        scorea = 4;
    // 3 of a kind        XXX__        _XXX_         __XXX          X_XX_ X_X_X X__XX 
    } else if (as.match(/(\w)\1{2}\w{2}|\w(\w)\2{2}\w|\w{2}(\w)\3{2}/)) {
        scorea = 3;
    // 2 pairs
    } else if (as.match(/(\w)\1\w(\w)\2|(\w)\3(\w)\4/)) {
        scorea = 2;
    // 1 pair
    } else if (as.match(/(\w)\1\w{3}|\w(\w)\2\w{2}|\w{2}(\w)\3\w|\w{3}(\w)\4/)) {
        scorea = 1;
    } else {
        scorea = 0;
    }
    return scorea;
}
            //XXX__        XX_X_         XX__X        X_XX_         X_X_X_       X__XX          _XXX_        
let regex = /(\w)\1{2}\w{2}|(\w)\2\w\2\w|(\w)\3\w{2}\3|(\w)\w\4{2}\w|(\w)\w\5\w\5|(\w)\w{2}\6{2}|\w(\w)\7{2}|\w(\w)\8\w\8|\w(\w)\w\9{2}|\w\w(\w)\10{2}/