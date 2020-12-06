const {getInputFormatted, unique, intersect} = require('./helpers.js');
const input = getInputFormatted('day6.txt');
const groupedInput = input.map(line => line !== '' ? line : '___').join(" ").split("___").map(line => line.trim());
const splitIntoPeople = groupedInput.map(line => line.split(" "));
const splitIntoAnswers = splitIntoPeople.map(group => group.map(person => person.split("")));


/* PART 1 */
const solvePart1 = () => {
    const uniquePerGroup = splitIntoAnswers.map(group => unique(...group));
    const uniquePerGroupAsSum = uniquePerGroup.map(group => group.length);

    const sum = uniquePerGroupAsSum.reduce((a, b) => a + b, 0);

    console.log('Solution Part 1', sum);
}

/* PART 2 */
const solvePart2 = () => {
    const uniquePerGroup = splitIntoAnswers.map(group => intersect(...group));
    const uniquePerGroupAsSum = uniquePerGroup.map(group => group.length);

    const sum = uniquePerGroupAsSum.reduce((a, b) => a + b, 0);

    console.log('Solution Part 2', sum);
}

solvePart1();
solvePart2();
