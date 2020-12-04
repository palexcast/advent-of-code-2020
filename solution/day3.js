const input = ".#...#.......#...#...#.#.#.....\n" +
    "####.....#.#..#...#...........#\n" +
    ".....#...........#......#....#.\n" +
    "......#..#......#.#..#...##.#.#\n" +
    "............#......#...........\n" +
    "...........#.#.#....#.......##.\n" +
    "....#.......#..............#...\n" +
    "........##...#.#.....##...##.#.\n" +
    ".#.#.....##................##..\n" +
    ".##................##..#...##..\n" +
    "....#...###...##.........#....#\n" +
    ".##......#.........#...........\n" +
    "...#.#.#....#....#...#...##...#\n" +
    "..#....##...#..#.#..#.....#.#..\n" +
    ".......#...#..#..#.....#...#..#\n" +
    ".....#......#.......#.....#.#..\n" +
    "....#..#...#..#####....##......\n" +
    ".#...........#......#....#....#\n" +
    "#......#.###.....#....#....#...\n" +
    "....#..#.#.#..#...........##...\n" +
    "..#..#..#.#...#......#....#.##.\n" +
    ".##....#......#...#.#..#.......\n" +
    "..###.#...#.........#.#.#...#.#\n" +
    "#....###.........#...#...#...#.\n" +
    "...##.#............#...##......\n" +
    "...#.........#............#....\n" +
    "......##...#...##..#...........\n" +
    "........##..#.#.####...#.....#.\n" +
    ".##.........#......#..#..#...#.\n" +
    "..........#...#..........#.....\n" +
    "#..........#........#..#..#.#..\n" +
    "..#....#.#.#.#.#..#.##.........\n" +
    "##.#.#.##.....#..#......###....\n" +
    "##....#...#.....#..............\n" +
    ".#..#...#...#....###......#....\n" +
    "#....#......#.#..#.#........###\n" +
    ".#....#..#...###....#...##.....\n" +
    ".#....#.....#.....#..##..#.....\n" +
    "#....#.##...#...#..#.##.##.#...\n" +
    ".#.#.#.##...#####.............#\n" +
    "......##..#.....##..#...####...\n" +
    "#.##..#.#....#..##.......###..#\n" +
    "..#.......##....#........#.##..\n" +
    "#.....#......#.....#....#..#...\n" +
    ".......##...#.....##.......#..#\n" +
    ".......#...#.#.#.........#####.\n" +
    "#.......#.##..##........##.....\n" +
    "##..#...#........##....#.......\n" +
    ".......#...##......##...##.##..\n" +
    "......#..##..#.#...#...#....##.\n" +
    "....#.#..#.....#.##.#.....#.#..\n" +
    "#..#.#.#........#...#.......##.\n" +
    "##...........#..#........#.....\n" +
    "....##....#....#.#.......#.....\n" +
    "....##.#.#.....#.#.....#.....#.\n" +
    "..........#.#..##..#..#.......#\n" +
    "#....#.......##...#...#.....#..\n" +
    ".........##.....#.#....#......#\n" +
    "..........#........#..#..#.#...\n" +
    "..#......#.....#......#......#.\n" +
    "..#...###..##..#.....##..#..##.\n" +
    "..#.#..###.........#.#...##.#.#\n" +
    "#.........#..#......#...##.....\n" +
    "...#...#.#..#...##.#...##.#..#.\n" +
    "#.....#.....#.##....#.#......#.\n" +
    "#....##..##..#.#..##....#.....#\n" +
    ".#..........#..#...#..#.......#\n" +
    "#.#.....#..##..##..#.#.........\n" +
    "....#..##...#.....#.....#.#.#.#\n" +
    "...#.#....#........#...#.#.....\n" +
    ".#............#.......#.##.#...\n" +
    "..##.......#.#...#........##..#\n" +
    "..................##.#...#.#..#\n" +
    ".#.........#.......#.....#.....\n" +
    "....##...##..#..........#......\n" +
    "..#.##..#....#..#............#.\n" +
    "....####...#.##....##.#....#.##\n" +
    "#..#....#......##........##....\n" +
    "..###...........##..#......#...\n" +
    "#..#.......#........#.......#..\n" +
    ".....#....#..#..##.....#.......\n" +
    ".###.####.#....#....#..#.......\n" +
    ".............#...............#.\n" +
    ".#..........#.#....#..#.#......\n" +
    "..............##....#..#....##.\n" +
    ".......#.#..#........#.......##\n" +
    "#..#...#..#.#........#..#....#.\n" +
    "...#.........#...#..#..........\n" +
    "...#....##...#..#..........#...\n" +
    ".#......#......##..##...#.#....\n" +
    ".#.........#..###..............\n" +
    ".................#.#.....##....\n" +
    "...#............#..............\n" +
    "#..#................#.......#..\n" +
    "...#.......#......#.#.#........\n" +
    "#.....#.##....#.....#........#.\n" +
    "......##.#....#........#....#..\n" +
    ".#..#.##...##........#.#.....#.\n" +
    "..#...#....#...#..#..##..#.#..#\n" +
    "#.................#.#.......##.\n" +
    "..........#........#.#.....#..#\n" +
    "#....##....#........##..##.#...\n" +
    "#...#....#.....#.....#.....#...\n" +
    "#..#..........#....##....#....#\n" +
    "..#.#..#..#....#.#....#....#..#\n" +
    "#....#..#.......#..........#...\n" +
    ".#...#.#...#..#...#.......#....\n" +
    "###........#......##..#...##...\n" +
    "...#..........##..............#\n" +
    ".......#........##......#.....#\n" +
    ".#..........#...#...##....###.#\n" +
    ".#...#....#..#.....##...#..##..\n" +
    ".#.#.#...##..........##...#...#\n" +
    ".#.....#...#........#........##\n" +
    "#.......#......##.#.#..#....#..\n" +
    "##..#.##........#....#..#......\n" +
    "...#.......................#...\n" +
    "..#....#..##........##.#.##.#..\n" +
    ".............#.......#....#.#.#\n" +
    "...#...........##..#.....#.....\n" +
    "..#....##....#.....#...........\n" +
    "..#.....#......#..#.###.##....#\n" +
    ".#.......#...........#...#....#\n" +
    "#............##...#...#.....#..\n" +
    "##...#.....#.........##...##...\n" +
    "...#...........#....##.........\n" +
    "#.##..#..........##..#......#..\n" +
    ".......#.#.......##.......#....\n" +
    "..#.....##..#...#.......#......\n" +
    ".#........#....##...........#..\n" +
    "#.......#...#.#.###...#....#...\n" +
    "..........##..#..#..##........#\n" +
    "#....#....#...#....#....#......\n" +
    "...........#....#...#...##.#...\n" +
    ".........#.#.....#.............\n" +
    "..####...........##..........#.\n" +
    ".....#...................#.....\n" +
    "#..##...#........#.###.#.##....\n" +
    "....##...#.##................#.\n" +
    ".#........###.#............#.#.\n" +
    "..............#.##.........#...\n" +
    "##............#.#..###....#...#\n" +
    "#.....#........####....#....##.\n" +
    "....##..#...##..##...##.....#..\n" +
    "##..#....#.##.....####.....#.##\n" +
    "##..#....#.##.##.#.#........#..\n" +
    "....#..........##.....#..#..#..\n" +
    "...#.......#........#.........#\n" +
    "#..##.######.......##........#.\n" +
    "###...#...####.......#.....#...\n" +
    "#......#..#.....#......#.....#.\n" +
    "..................##...#.......\n" +
    "....#.#....#......#...#.....##.\n" +
    "..#..#..#..#..#....#.#...#....#\n" +
    "......#....###.................\n" +
    "#.##......#...#......#.........\n" +
    "#..#.#...##..#.......#..#...#..\n" +
    ".#....#.#........#.........#...\n" +
    "#.......##..#..#...............\n" +
    "........#..##....#.....#..#....\n" +
    "....#......##..#....#...#..#...\n" +
    "#.....#...##..#...#......#.....\n" +
    ".....#.....#.........##...#..#.\n" +
    "........#...##.#...#.#....#..##\n" +
    "....#....#...#.....##..#...#...\n" +
    "#....#..#.........#.........###\n" +
    "..###.....##...#.#....##......#\n" +
    "#..#.#..#.......#..#....##.....\n" +
    "###...#.##..#.......#......#...\n" +
    ".....#.....##.......#...##..#..\n" +
    "......#.......#.#.#......#..#..\n" +
    ".................##..#.###.....\n" +
    "..........#....#...#..........#\n" +
    "...#.#...#.#..##.....#.#.##..#.\n" +
    ".......#..#....#...#......###..\n" +
    "...##..........#..#.....#....#.\n" +
    ".#..##..###...#....##.....#....\n" +
    "..#.#..............#....#...#..\n" +
    ".....####.......#.#.##....#....\n" +
    "#.#.#..##.##.#..#.##.#....#..#.\n" +
    "........#....#.......##........\n" +
    "...#...#....#...###.....###....\n" +
    ".....#..#..........##.#...##.##\n" +
    "..#.#.#..#....#...#..##...#...#\n" +
    "..#......#..#.#.....#....#....#\n" +
    ".#.....#.......#............#..\n" +
    "#..##....#...#....##....#......\n" +
    "#..#.........#...#...###.#..#..\n" +
    "..#.#.#..#.#..#.......##.......\n" +
    "...##...............#..#...#.#.\n" +
    ".......####.#.....#..#..#......\n" +
    "......#..#.....#..##....#......\n" +
    "....#...#.........##.......#.#.\n" +
    "#.#.#...#.....#...#..#.#..#....\n" +
    "........#..#.........#..#..##..\n" +
    "........###.#............#.#...\n" +
    "#..#.......#.#..#.......#...#.#\n" +
    "..##..............#.#.....#...#\n" +
    "..##...........................\n" +
    "..#.....#.......#......##......\n" +
    "#...#......##.#....#.#.#...##.#\n" +
    "#...#.#......#.#..##.........#.\n" +
    ".##..#...#.#.....#.#.#...#.#..#\n" +
    ".#..#...#.#.........#......#...\n" +
    "...........#...#...#...#..#.#..\n" +
    ".#........#...#......##...#.###\n" +
    "#........#..#.#..#...........##\n" +
    ".#...#...####.......#..........\n" +
    "......#...............#........\n" +
    ".....#.#.....#.#...#......#....\n" +
    ".#........#...........#..##.#..\n" +
    "....#..#.....###.......#...#...\n" +
    "#.#.........#...##..#.#.##.#...\n" +
    "................##.#....#.#...#\n" +
    ".......#.......#......#...#....\n" +
    "#....#.#..............#.##..###\n" +
    "..##.##..#.....#............#..\n" +
    "#....#..##........#....#.......\n" +
    ".#.#........#.#................\n" +
    "......##..#..#..........#..#.#.\n" +
    ".....##.#..#....##.#......##...\n" +
    "........###.#................#.\n" +
    "#..###.....#.###.#...#.#.......\n" +
    ".#..#.#.#.#..#..#.#.....#.#....\n" +
    "#....#.....#..#......##...#..##\n" +
    "........#...##..#.#.....#....#.\n" +
    ".......#..#..#..#....#.....##..\n" +
    "....#..##..#...#....#.........#\n" +
    "#.#....#..#.#...#.#...#....#...\n" +
    ".....#......###.......#..##.#.#\n" +
    ".......##.....#....#........#.#\n" +
    ".##.##..#..###.#....#.#.....#..\n" +
    "..##.#.......###.........#.....\n" +
    ".#...#......#..#....#..........\n" +
    ".....#........#.....##...#.....\n" +
    "..#......#.#.#..#.#....##.#...#\n" +
    "#.#...#...........##......#....\n" +
    ".................##.....#.#.##.\n" +
    "###..#....#..................#.\n" +
    "##..#.#.#...#....###.#.#...##.#\n" +
    "#.#.#..#....#..............#...\n" +
    ".....#....#......#..#.##.......\n" +
    "#...#...#..###.......#.......#.\n" +
    ".....#.#........#..#...#.#.....\n" +
    ".....#..........#.###.......#..\n" +
    "...#.##.....#....###.....#.....\n" +
    "####........#....#..#.#.##.#...\n" +
    "#......#...##.....#.#..##.#.#.#\n" +
    ".....##....#..#.........##.....\n" +
    "..##....##................##..#\n" +
    "#.....#...##...##.#.....#...#..\n" +
    "..#..#.#.#....#.#.......#......\n" +
    "##.....##......#...#.........#.\n" +
    "#..........#........#.#......#.\n" +
    ".#..#.......#.#.....#..........\n" +
    ".........#.#.......#.#..#..#..#\n" +
    "#......#....#....#..##..##...##\n" +
    ".....#..#...#.......#.....##...\n" +
    "..#.##........#.###...#...#...#\n" +
    "..#..#...........#..........#..\n" +
    ".#.#.#...#.##.#..............#.\n" +
    "....#..##.......#.....#..##..#.\n" +
    ".#.##.#....##........#...##.##.\n" +
    "...#.#...#....#....#......#####\n" +
    ".....#.....##...........#......\n" +
    "#........#.##.......#.#.......#\n" +
    "#...#.......##.#.......#..#.#..\n" +
    "#...##..#....#............#.#..\n" +
    "........#.#..#...#..#...##..##.\n" +
    "#...#....#............#........\n" +
    "#.#.#.#.#....##.....##.........\n" +
    "......##.........#.......#.#..#\n" +
    "...#.#....#........#...........\n" +
    "...#.#.......#.....#...........\n" +
    "##....####......##.##..#.......\n" +
    "#......#...#..#.#..#......#..#.\n" +
    "#......#.#....#....#..#........\n" +
    "..#.###...#.....#........#.#...\n" +
    "..#.....##.....###....#.....#..\n" +
    "#.##.#.....##....#...###.......\n" +
    "###.#....###.#..##.#.......##.#\n" +
    "#..#..##...#.#..........##.##..\n" +
    ".......####.#..#.....##..###...\n" +
    "#...#...##..#..##.......###....\n" +
    "#....#.........##..#.........#.\n" +
    ".....#.#..........#..#...#.#..#\n" +
    "..........#......##..#..#.#....\n" +
    ".#...#...#...#........###....##\n" +
    "#....#.##..........#.#.....#.#.\n" +
    "#....##.#.##..#.......#.#.....#\n" +
    ".##..##..#.#...#.#...........#.\n" +
    "....##..#...#.#.##.#.#...#.....\n" +
    ".#...#.##........#.##..#.#....#\n" +
    ".#.....##.........#.....#......\n" +
    "..#.....#.#..#.##.............#\n" +
    "##....##...#....##........#....\n" +
    ".#....#........#.#..#..#..#.##.\n" +
    ".#........#............#.......\n" +
    ".#..##..##..#..#..####....#....\n" +
    "..#.###....#..#.##......#.#...#\n" +
    ".###..#.#...##....##....#..##.#\n" +
    "....##........#....#.#.#...##..\n" +
    "...#..#....#.#....#...#.#.....#\n" +
    "...##....##..#....#.........#..\n" +
    ".....#..##.###..#.....####.....\n" +
    "...#..#.........#....#.#.##..#.\n" +
    "...#..#...............#..#....#\n" +
    "...........#.....#...####..##.#\n" +
    "..#......#...#....#..#...##.#..\n" +
    ".....#..#...........#.......#.#\n" +
    "##....###...#.........#....#...\n" +
    "...#..##.......#.#.....##....#.\n" +
    "#.#...#.#....#.....#...##.....#\n" +
    ".#...##....#.....#..##.......#.\n" +
    "...#........##..........#.....#\n" +
    "#...##..#.#....###...#..#......\n" +
    "............#.......#......#.#.\n" +
    "......#....#.#...#...#..#......\n" +
    ".#..#......#....#.......#....##\n" +
    "...#...#.......###..###...#....\n" +
    ".............#.#...#..###.....#\n" +
    ".#.....#........#...##....#..#.\n" +
    ".....#.......#######.#.#...#..."

const lines = input.split("\n");

const board = lines.map(line => line.split(""));
const boardWidth = board[0].length;
const boardHeight = board.length;

const current = {
    x: 0,
    y: 0
}

let traverseX = 3;
let traverseY = 1;

let trees = 0;

const isTree = (char) => char === '#';

const get = (x, y) => board[y][x];

const traverse = (x, y) => {
    current.x = (current.x + x) % boardWidth;
    current.y = (current.y + y) % boardHeight;
}

const isAtTree = () => {
    const currentChar = get(current.x, current.y);
    return isTree(currentChar);
}
const isAtEnd = () => current.y === boardHeight - 1;

const printCurrentPos = () => {
    const line = board[current.y];
    line[current.x] = 'O';
    console.log(line.join(''));
}


const runAndReset = (x, y) => {
    trees = 0;
    current.x = 0;
    current.y = 0;
    traverseX = x;
    traverseY = y;
    while (!isAtEnd()) {
        traverse(traverseX, traverseY);
        if (isAtTree()) {
            trees++;
        }
    }
    console.log('Number of trees (' + x + ', ' + y + '): ', trees);
    return trees;
}

const result = runAndReset(1, 1)
    * runAndReset(3, 1)
    * runAndReset(5, 1)
    * runAndReset(7, 1)
    * runAndReset(1, 2);

console.log(result);