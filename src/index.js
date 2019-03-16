module.exports = function solveSudoku(matrix) {
  // your solution
  var 
  sudoku=[
    [5, 3, 4, 6, 7, 8, 9, 0, 0],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ],
  matrix=[
    [[],[],[],[],[],[],[],[],[],],
    [[],[],[],[],[],[],[],[],[],],
    [[],[],[],[],[],[],[],[],[],],
    [[],[],[],[],[],[],[],[],[],],
    [[],[],[],[],[],[],[],[],[],],
    [[],[],[],[],[],[],[],[],[],],
    [[],[],[],[],[],[],[],[],[],],
    [[],[],[],[],[],[],[],[],[],],
    [[],[],[],[],[],[],[],[],[],]
  ];
  for (let i = 0; i < sudoku.length; i++) {
     for (let j = 0; j < sudoku[i].length; j++) {
   if (sudoku[i][j] !=0) {
    matrix[i][j]=sudoku[i][j]
   } else {matrix[i][j]=[0,1,2,3,4,5,6,7,8,9]
     
   }}}
 
   for (let i = 0; i < sudoku.length; i++) {
    for (let j = 0; j < sudoku[i].length; j++) {
      if (sudoku[i][j] !="") {
       } else 
      {
         for (let l = 0; l < 9; l++) {

      delete matrix[i][j][sudoku[i][l]];
      
      delete matrix[i][j][sudoku[l][j]];
     }      
       }

    }}

    for (let i = 0; i < sudoku.length; i++) {
      for (let j = 0; j < sudoku[i].length; j++) {
    if (sudoku[i][j] !=0) {
     matrix[i][j]=matrix[i][j][0]
    } else { for (let k = 0; k <matrix[i][j].length; k++)
      {       
      if (matrix[i][j][k] <10) {}
       else { matrix[i][j].splice(k,1)
        k--
     }
     matrix[i][j]= matrix[i][j][0]
    }
     
    }}}
return matrix;
}


