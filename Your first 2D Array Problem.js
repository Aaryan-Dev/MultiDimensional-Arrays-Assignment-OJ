// You are given a 2D array, whose dimensions are stored in two variables with the nameNandM

// The value stored inNdenotes the number of rows, and the value inMdenotes the number of columns

// The 2D array is stored in a variable with the namearr

// You have to print the elements of the 2D array, row by row

// For example, consider the value stored inN = 3,M = 2, and the array isarr = [1,2],[3,4],[5,6], then the required output will be

// 1 2
// 3 4 
// 5 6


function array2D(N,M,arr){
    
    for(i=0; i<N; i++){
        bag = "";
        for(j=0; j<M; j++){
            bag = bag + arr[i][j] + " ";
        }
        console.log(bag);
    }
}