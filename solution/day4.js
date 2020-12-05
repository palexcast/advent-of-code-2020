const {getInput} = require('./helpers.js');
const input = getInput('day4.txt');

const formatted = input.split("\n").map(line => line !== '' ? line : '___').join(" ").split("___").map(line => line.trim());

const passports = formatted.map(line => {
    const properties = line.split(' ').map(property => property.split(':'));
    return properties.reduce((a, b) => ({...a, [b[0]]: b[1]}), {})
})

// PART 1
const solvePart1 = () => {
    // If true, it is required
    const availableProperties = {
        byr: true,
        iyr: true,
        eyr: true,
        hgt: true,
        hcl: true,
        ecl: true,
        pid: true,
        cid: false,
    }

    const isValid = (passport) => {
        return Object.entries(availableProperties).every(([key, value]) => {
            return !value ? true : passport[key] !== undefined;
        })
    }

    let isValidCount = 0;

    passports.forEach(passport => isValid(passport) ? isValidCount++ : void 0)

    console.log('Solution Part 1:', isValidCount);
}

// PART 2
const solvePart2 = () => {
    const propertyValidation = {
        byr: (value) => {
            if (!value) {
                return false;
            }
            return +value >= 1920 && +value <= 2002;
        },
        iyr: (value) => {
            if (!value) {
                return false;
            }
            return +value >= 2010 && +value <= 2020;
        },
        eyr: (value) => {
            if (!value) {
                return false;
            }
            return +value >= 2020 && +value <= 2030;
        },
        hgt: (value) => {
            if (!value) {
                return false;
            }
            if (value.indexOf('cm') >= 0) {
                const height = value.split('cm')[0];
                return +height >= 150 && +height <= 193;
            }
            if (value.indexOf('in') >= 0) {
                const height = value.split('in')[0];
                return +height >= 59 && +height <= 76;
            }
            return false;
        },
        hcl: (value) => {
            if (!value) {
                return false;
            }
            const regexp = RegExp('#([0-9]|[a-f]){6}', 'g')
            return regexp.test(value) && value.length === 7;
        },
        ecl: (value) => {
            if (!value) {
                return false;
            }
            return ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(value);
        },
        pid: (value) => {
            if (!value) {
                return false;
            }
                        const regexp = RegExp(/\b\d{9}\b/g);
            return regexp.test(value);
        },
        cid: () => true,
    }

    const mapWithValidationStatus = (passport) => {
        const obj = Object.fromEntries(Object.entries(propertyValidation).map(([key, value]) => {
            return [key, {
                value: passport[key],
                valid: value(passport[key])
            }]
        }));
        obj.valid = Object.values(obj).every(value => value.valid);
        return obj;
    }

    const validatedPassports = passports.map(mapWithValidationStatus);
    const valid = validatedPassports.reduce((a,b) => b.valid ? a + 1 : a, 0)

    console.log('Solution Part 2:', valid);
}

solvePart1();
solvePart2();
