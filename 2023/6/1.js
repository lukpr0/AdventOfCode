//let ts = [7, 15, 30]
//let ds = [9, 40, 200]

//let ts = [53, 83, 72, 88]
//let ds = [333, 1635, 1289, 1532]

let ts = [53837288]
let ds = [333163512891532]

let tc1 = ts.map((t, i) => {
    let tc = (-t + Math.sqrt(t*t - 4*ds[i]))/(-2)
    tc = Math.floor(tc+1)
    return tc
})

let tc2 = ts.map((t, i) => {
    let tc = (-t - Math.sqrt(t*t - 4*ds[i]))/(-2)
    //tc = Math.ceil(tc)
    tc = Math.ceil(tc-1)

    return tc
})

let tc = tc1.map((t, i) => {
    return tc2[i] - t + 1;
})


console.log(tc1)
console.log(tc2)
console.log(tc)

console.log(tc.reduce((e,n) => e*n, 1))