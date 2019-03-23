module.exports = function solveSudoku(matrix) {
  function checkRow(r, c) {
    var value = matrix[r][c];
    for (var c1 = 0; c1 < 9; c1++) {
        if (c1 != c && matrix[r][c1] == value) {
            return false;
        }
    }
    return true;
};

function checkColumn(r, c) {
    var value = matrix[r][c];
    for (var r1 = 0; r1 < 9; r1++) {
        if (r1 != r && matrix[r1][c] == value) {
            return false;
        }
    }
    return true;
};

function checkCell(r, c) {
    var value = matrix[r][c];
    var r1Box = Math.floor(r / 3);
    var c1Box = Math.floor(c / 3);

    for (var r1 = r1Box * 3; r1 < r1Box * 3 + 3; r1++) {
        for (var c1 = c1Box * 3; c1 < c1Box * 3 + 3; c1++) {
            if (r1 != r && c1 != c && matrix[r1][c1] == value) {
                return false;
            }
        }
    }
    return true;
};

function backtrack(r, c) {
    c++
    if (c > 8) {
        c = 0;
        r++;
        if (r > 8) {
            return matrix;
        }
    }

    if (matrix[r][c] != 0) {
        if (!(checkRow(r, c) && checkColumn(r, c) && checkCell(r, c))){
            return false;
        }
        return backtrack(r, c);
    } else {
        for (var x = 1; x < 10; x++) {
          matrix[r][c] = x;
            if (checkRow(r, c) && checkColumn(r, c) && checkCell(r, c)){
                if (backtrack(r, c)) {
                    return matrix;
                }
            }
        }
      matrix[r][c] = 0;
        return false;
    }
};
  return backtrack(0, -1);
};



