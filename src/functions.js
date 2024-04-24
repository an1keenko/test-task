function myParseInt(str) {
    var result = 0;
    for (var i = 0; i < str.length; i++) {
        var digit = str.charCodeAt(i) - '0'.charCodeAt(0);
        if (digit < 0 || digit > 9) {
            throw new Error('Invalid input string');
        }
        result = result * 10 + digit;
    }
    return result;
}
console.log(myParseInt('123') + 2);
function printSpiral(matrix) {
    var result = [];
    while (matrix.length) {
        result = result.concat(matrix.shift());
        for (var i = 0; i < matrix.length; i++) {
            result.push(matrix[i].pop());
        }
        if (matrix.length) {
            result = result.concat(matrix.pop().reverse());
        }
        for (var i = matrix.length - 1; i >= 0; i--) {
            result.push(matrix[i].shift());
        }
    }
    return result.join(' ');
}
var matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(printSpiral(matrix));
