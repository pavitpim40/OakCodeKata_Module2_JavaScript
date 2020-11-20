function getIndexToIns(arr, num) {
    return num;
  }
  
  getIndexToIns([40, 60], 50);
  



/*
Return the lowest index at which a value (second argument) should be inserted into an array 
(first argument) once it has been sorted. The returned value should be a number. 
*/


/*  Sol 1 */
function getIndexToIns(arr, num) {
    arr.sort((a,b)=> a-b);
    if(arr.length === 0 ) {
      return 0;
    }
    for ( let i = 0 ; i <= arr.length-1 ; i++) {
     if ( arr[i] === num ) {
       return i;
     } else if ( num > arr[i] && num <= arr[i+1]) {
       return i+1;
     } else if (num > arr[arr.length-1]){
       return arr.length;
     }
       
    }
  }
  
  getIndexToIns([40, 60], 50);

  
/*  Sol 2 */
function getIndexToIns(arr, num) {
    arr.push(num);
    arr.sort(function(a, b) {
      return a - b;
    });
    return arr.indexOf(num);
  }