// You are given a 2D array, whose dimensions are stored in two variables with the nameNandM

// The value stored inNdenotes the number of rows, and the value inMdenotes the number of columns

// The 2D array is stored in a variable with the namearr, and contains lower case English characters

// You have to printYes, if any particular row of a 2D array contains at least one vowel, at least printNo

// For example, consider the value stored inN = 3,M = 2, and the array isarr = [a,b],[c,d],[e,f], then the required output will be

// Yes (This row contains the vowel a)
// No  (This row does not contains any vowel)
// Yes (This row contains the vowel e)

function vowelsInRows(N,M,arr){
    
    let vowel = "aeiou";
    
    for(i=0; i<N; i++){
            //  count = 0;
             value = false;
             
        for(j=0; j<M; j++){
            for(k=0; k<vowel.length; k++){
            if(arr[i][j]==vowel[k]){
                // count++
                value = true;
                
            }else{
               
            }
            }
        }
   
   if(value){
       console.log("Yes");
   }else{
       console.log("No");
   }
        
    }
    
}