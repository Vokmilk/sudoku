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
  sudoku1=[
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
    sudoku1[i][j]=sudoku[i][j]
   } else {sudoku1[i][j]=[0,1,2,3,4,5,6,7,8,9]
     
   }}}
 
   for (let i = 0; i < sudoku.length; i++) {
    for (let j = 0; j < sudoku[i].length; j++) {
      if (sudoku[i][j] !="") {
       } else 
      {alert('подмассив в ячейке '+i+' '+j+'  не определен')
         for (let l = 0; l < 9; l++) {

      delete sudoku1[i][j][sudoku[i][l]];
      
      delete sudoku1[i][j][sudoku[l][j]];
     }      
       }

    }}

    for (let i = 0; i < sudoku.length; i++) {
      for (let j = 0; j < sudoku[i].length; j++) {
    if (sudoku[i][j] !=0) {
     sudoku1[i][j]=sudoku[i][j]
    } else { for (let k = 0; k <sudoku1[i][j].length; k++)
      { alert('удаляем в элементе i= '+i+', j ='+j+', k = '+k+'значени в ijk = '+sudoku1[i][j][k])
      
      if (sudoku1[i][j][k] <10) {alert('число прошло')}
       else { sudoku1[i][j].splice(k,1)
        k--
        alert(sudoku1)
     }
    }
     
    }}}
   alert(sudoku1)

}
alert('i='+i+'j='+j+'L='+l)
alert( 'Удаялем из ячейки i= '+i+', j= '+j+', элемент= '+sudoku1[i][j][sudoku[i][l]]) // вывод удаляемого числа по строке
alert( 'Удаялем из ячейки i= '+i+', j= '+j+', элемент= '+sudoku1[i][j][sudoku[l][j]]) //вывод удаляемого числа в толбце


alert(sudoku[0][0][1])

if (sudoku[0][0].length==1) {
  sudoku1[0]=sudoku[0][0]
} else {  
}
alert(sudoku[0][1])
if (sudoku[0][1].length==1) {
  sudoku1[1]=sudoku[0][1]
} else {  
}
alert(sudoku1)
delete sudoku1[0][8][1]
alert('1ый ряд 9ое число'+sudoku1[0][8])

