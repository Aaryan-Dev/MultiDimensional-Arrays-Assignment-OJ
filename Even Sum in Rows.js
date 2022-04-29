// You are given a 2D array, whose dimensions are stored in two variables with the nameNandM

// The value stored inNdenotes the number of rows, and the value inMdenotes the number of columns

// The 2D array is stored in a variable with the namearr

// For all rows, you have to print the sum of even elements present in the row

// For example, consider the value stored inN = 3,M = 3, and the array isarr = [1,2,3],[4,5,6],[7,8,9], then the required output will be

// 2  (Even numbers in the row are, [2]. Therefore, the sum becomes 2)
// 10 (Even numbers in the row are, [4,6]. Therefore, the sum becomes 10) 
// 8  (Even numbers in the row are, [8]. Therefore, the sum becomes 8)

function evenSumRows(N,M,arr){
    
    for(i=0; i<N; i++){
            sum = 0;
        for(j=0; j<M; j++){
        //  console.log(arr[i][j]);
         if(arr[i][j]%2===0){
             sum = sum + arr[i][j]
         }
        }
            console.log(sum);
    }
}