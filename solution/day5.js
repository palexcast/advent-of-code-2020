const {getInputFormatted} = require('./helpers.js');
const formatted = getInputFormatted('day5.txt');

const rows = 128;
const columns = 8;

const getRowSequence = (seatSequence) => seatSequence.substring(0, 7);
const getColumnSequence = (seatSequence) => seatSequence.substring(7, 10);

const getRow = (remainingSequence, lowerEnd = 0, upperEnd = rows - 1) => {
    const char = remainingSequence.substring(0, 1);
    const remaining = remainingSequence?.length > 1 ? remainingSequence.substring(1) : undefined;

    const middle = Math.ceil((upperEnd - lowerEnd) / 2);
    // If B, we are setting a new lower limit
    const lower = char === 'B' ? lowerEnd + middle : lowerEnd;
    // If F, we are setting a new upper limit
    const upper = char === 'F' ? upperEnd - middle : upperEnd;

    if (!remaining) {
        // If F, we are returning the lower row
        return char === 'F' ? lower : upper;
    }
    return getRow(remaining, lower, upper);
}

const getColumn = (remainingSequence, lowerEnd = 0, upperEnd = columns - 1) => {
    const char = remainingSequence.substring(0, 1);
    const remaining = remainingSequence?.length > 1 ? remainingSequence.substring(1) : undefined;

    const middle = Math.ceil((upperEnd - lowerEnd) / 2);
    // If R, we are setting a new lower limit
    const lower = char === 'R' ? lowerEnd + middle : lowerEnd;
    // If L, we are setting a new upper limit
    const upper = char === 'L' ? upperEnd - middle : upperEnd;

    if (!remaining) {
        // If L, we are returning the lower row
        return char === 'L' ? lower : upper;
    }
    return getColumn(remaining, lower, upper);
}

const getSeatId = (sequence) => {
    const rowSequence = getRowSequence(sequence);
    const columnSequence = getColumnSequence(sequence);
    const row = getRow(rowSequence)
    const column = getColumn(columnSequence)
    return row * 8 + column;
}

const solvePart1 = () => {
    const rowIds = formatted.map(getSeatId);

    const sorted = rowIds.slice();
    sorted.sort((a, b) => a - b);

    console.log('Solution Part 1:', sorted[sorted.length - 1]);
}

/* PART 2 */
const solvePart2 = () => {
    const seatInfo = formatted.map(sequence => ({
        sequence,
        row: getRow(getRowSequence(sequence)),
        column: getColumn(getColumnSequence(sequence)),
        seatId: getSeatId(sequence),
    }));

    const sorted = seatInfo.slice();
    sorted.sort((a, b) => a.seatId - b.seatId);

    const mySeatId = sorted.find((seatInfo, idx) => {
        // Not first or last item
        if(idx === 0 || idx === sorted.length - 1){
            return false;
        }
        // Not Back or Front row
        if(seatInfo.row === 0 || seatInfo.row === rows - 1){
            return false;
        }
        const {seatId} = seatInfo;

        return sorted[idx - 1].seatId !== seatId - 1;
    }).seatId - 1;

    console.log('Solution Part 2:', mySeatId);
}

solvePart1();
solvePart2();
