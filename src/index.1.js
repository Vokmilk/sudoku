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
    } else {sudoku1[i][j]=[]
      
    }}}     
    alert(sudoku1);                                   // заменили пустые ячейки массивом
    for (let i = 0; i < sudoku.length; i++) {
      for (let j = 0; j < sudoku[i].length; j++)
        if (typeof sudoku1[i][j] == "number" && sudoku1[i][j]>0) {
        } else  {
  alert('подмассив в ячейке '+i+' '+j+'  не определен')
  // alert(typeof sudoku1[0][7])
  var abc=0
  k=1
  while (k<10) { 
    let l=0;
  while (l<9) {
        if (k !=sudoku1[i][l] && typeof sudoku1[i][l] != "object") 
      {
        alert('я элемент к = '+k+' я НЕ равен элементу в '+i+' ой строке,  в'+l+' ом столбце, у него значение'+sudoku1[i][l])
        l++
        alert(l+'is it me')
      } 
        else 
      {
          if (typeof sudoku1[i][l] == "object")
        {
          l++;
          alert('я элемент к = '+k+', а '+i+' ой строке,  в'+l+' ом столбце, находиться массив, меня с ним сравнить нельзя')
          alert(l+'is it me')
        }
          else {  alert('я элемент к = '+k+' я  РАВЕН элементу в '+i+'ой строке,  в'+l+'ом столбце, у него значение'+sudoku1[i][l]);
          // alert(typeof sudoku1[i][l]+' - это мой тип данных')
          k++
        l=100
        alert(l+'is it me')
        }  
    }
  }
  k++;
  }
    }}
      // if (abc>100) { } else {
      //   for (let l = 0; l < 9; l++) {
      //     if (k=sudoku1[i][l] && typeof sudoku1[i][j] == "number" && sudoku1[i][j]>0) {
      //       abc=114
            
      //     } else {break} }
      // }
      // if (abc>100) {} else {
      //   let r1=Math.floor(i/3);
      //   let c1=Math.floor(j/3);
      //   for (let r1 ; r1 < r1+3; r1++) {
      //     for (let c1 = 0; c1 < c1+3; c1++) {
      //       if (k=sudoku1[i][l] && typeof sudoku1[i][j] == "number" && sudoku1[i][j]>0) {
      //       } else {sudoku1[i][j].push(l)}
      //     }
      // }
      // }
      // alert('строка= '+i+' столбец= '+j+'разбираем число='+k+ ' значение элемента= '+ sudoku1[i][j])
      // alert(sudoku1[i][j])


      function checkSpam(str){
        return !!(str.indexof('ViAgRA')||str.indexof('xxxx'))
        }

        str=str.tolouercase()
        indexof('lower')
        

        