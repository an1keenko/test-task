function myParseInt(str: string): number {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        const digit = str.charCodeAt(i) - '0'.charCodeAt(0);
        if (digit < 0 || digit > 9) {
            throw new Error('Invalid input string');
        }
        result = result * 10 + digit;
    }
    return result;
}

console.log(myParseInt('123') + 2);

function printSpiral(matrix: number[][]): string {
    let result: number[] = [];
    while (matrix.length) {
        result = result.concat(matrix.shift() as number[]);
        for (let i = 0; i < matrix.length; i++) {
            result.push(matrix[i].pop() as number);
        }
        if (matrix.length) {
            result = result.concat(matrix.pop()!.reverse());
        }
        for (let i = matrix.length - 1; i >= 0; i--) {
            result.push(matrix[i].shift() as number);
        }
    }
    return result.join(' ');
}

const matrix: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(printSpiral(matrix));
