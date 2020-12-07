const {getInputFormatted, copy} = require('./helpers.js');
const input = getInputFormatted('day7.txt').map(line => line.replace('.', ''));

const parseLine = (line) => {
    const bag = line.split(' bags contain')[0];
    const canContainBags = line.split(' bags contain')[1];
    if(canContainBags === ' no other bags'){
        return {
            bag,
            contains: {}
        }
    }

    const canContainBagsLine = line.split(' bags contain')[1].split(', ');
    const canContainBagsAndAmount = canContainBagsLine.map(bag => {
        const split = bag.trim().replace(' ', '___').split('___');
        const number = +split[0];
        const color = split[1].replace(' bags', '').replace(' bag', '');
        return [color, number]
    })

    const contains = Object.fromEntries(canContainBagsAndAmount);

    return {
        bag,
        contains,
    }
}

const parsedInput = input.map(parseLine);
const asMap = Object.fromEntries(parsedInput.map(bag => [bag.bag, bag.contains]))

const baseline = parsedInput.map(bag => {
    const toBeFlattened = Object.entries(bag.contains).map(([key, value]) => ({
       color: key,
       value,
       flattened: false,
    }));
    return {bag: bag.bag, flatten: toBeFlattened};
});

const flatten = (bag) => {
    while(bag.flatten.some(inner => !inner.flattened)){
        const toBeFlattened = bag.flatten.filter(inner => !inner.flattened);
        toBeFlattened.forEach(inner => {
            const baseFound = copy(baseline.find(base => base.bag === inner.color));
            baseFound.flatten.forEach(toBeAdded => toBeAdded.value = toBeAdded.value * inner.value);
            bag.flatten.push(...baseFound.flatten);
            inner.flattened = true;
        });
    }
}

const summarize = (bag) => {
    const map = {};
    bag.flatten.forEach(inner => {
        const existing = map[inner.color];
        if(!existing){
            map[inner.color] = inner.value;
            return;
        }
        map[inner.color] = map[inner.color] + inner.value;
    })
    bag.flatten = map;
}

const canContainBag = (allBags, color) => {
    return allBags.filter(bag => bag.flatten[color] > 0);
}

const amountBagCanContain = (allBags, color) => {
    const bag = allBags.find(inner => inner.bag === color);
    const values = Object.values(bag.flatten);
    return values.reduce((a, b) => a + b, 0);
}

const toRun = copy(baseline);


toRun.forEach(flatten);
toRun.forEach(summarize);

console.log('Solution Part 1:', canContainBag(toRun, 'shiny gold').length);
console.log('Solution Part 2:', amountBagCanContain(toRun, 'shiny gold'));
