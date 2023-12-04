import fs from 'fs'

let content = fs.readFileSync('input.txt', 'utf-8').split('\r\n');
let content1 = 
`Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green\r\n
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue\r\n
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red\r\n
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red\r\n
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`.split('\r\n')
let red = 12;
let green = 13;
let blue = 14;

let games = content.map(e => {
    return e.split(':')[1]
})


let sets = games.map(e=>{
    let res = [];
    e.split(';').forEach(f => {
        let colors = {}
        f.split(',').forEach(g=>{
            let color = g.trim().split(' ')
            switch(color[1]) {
                case 'red':
                    colors.red = parseInt(color[0]);
                    break;
                case 'green':
                    colors.green = parseInt(color[0]);
                    break;
                case 'blue':
                    colors.blue = parseInt(color[0]);
                    break;
            }
            if (!colors.red) colors.red = 0;
            if (!colors.green) colors.green = 0;
            if (!colors.blue) colors.blue = 0;
        })
        res.push(colors)
    });
    return res;
})

function minimumNumber(color) {
    return (color.red ? color.red : 0) <= red 
        && (color.blue ? color.blue : 0) <= blue 
        && (color.green ? color.green : 0) <= green;
}

let sum = 0;

for (let i = 0; i<sets.length; i++) {
    let valid = true;
    let red = 0;
    let blue = 0;
    let green = 0;
    sets[i].forEach(e=>{
        red = Math.max(red, e.red)
        green = Math.max(green, e.green)
        blue = Math.max(blue, e.blue)
    })
    let power = red*green*blue;
    sum += power;
}

console.log(sum)