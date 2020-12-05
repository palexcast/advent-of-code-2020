const fs = require('fs');

const getInput = (file) => {
    const path = `../input/${file}`;
    return fs.readFileSync(path, 'utf-8');
};


const getInputFormatted = (file) => {
    const input = getInput(file);
    const formatted = input.split('\n');
    if(formatted[formatted.length - 1].trim() === ''){
        return formatted.slice(0, formatted.length - 1);
    }
    return formatted;
};

module.exports = {
    getInput,
    getInputFormatted
}
