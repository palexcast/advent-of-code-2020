const {getInputFormatted} = require('./helpers.js');
const input = getInputFormatted('day1.txt');
const formatted = input.map(txt => +txt);

const solvePart1 = () => {
    let solution = 0;
    for (let i = 0; i < formatted.length && !solution; i++) {
        for (let j = 0; j < formatted.length && !solution; j++) {
            if (i === j) {
                continue;
            }
            if (formatted[i] + formatted[j] === 2020) {
                solution = formatted[i] * formatted[j]
            }
        }
    }
    console.log('Solution Part 1:', solution);
}

const solvePart2 = () => {
    let solution = 0;
    for (let i = 0; i < formatted.length && !solution; i++) {
        for (let j = 0; j < formatted.length && !solution; j++) {
            for (let k = 0; k < formatted.length && !solution; k++) {
                if (i === j || i === k || j === k) {
                    continue;
                }
                if (formatted[i] + formatted[j] + formatted[k] === 2020) {
                    solution = formatted[i] * formatted[j] * formatted[k]
                }
            }
        }
    }
    console.log('Solution Part 2:', solution);
}

solvePart1()
solvePart2()
