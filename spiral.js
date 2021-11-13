var spiralOrder = function(matrix) {
    let first = 0
    let across = matrix[0].length 
    let down = matrix.length
    let total = across * down
    let solution = []

    while (solution.length < total) {
        for (var i = first; i < across; i++) {
            solution.push(matrix[first][i])
        }
        if (solution.length === total) { break }

        for (var i = first + 1; i < down; i++) {
            solution.push(matrix[i][across - 1])
        }

        for (var i = across - 2; i > first - 1; i--) {
            solution.push(matrix[down - 1][i])
        }
        if (solution.length === total) { break }

        for (var i = down - 2; i > first; i--) {
            solution.push(matrix[i][first])
        }

        first++
        across--
        down--
    }
    
    return solution
};

console.log(spiralOrder([[1,2,3,4,5,6],[7,8,9,10,11,12],[13,14,15,16,17,18],[19,20,21,22,23,24],[25,26,27,28,29,30],[31,32,33,34,35,36]]))