function mutation(arr) {
    return arr;
  }
  
  mutation(["hello", "hey"]);


/* Return true if the string in the first element of the array contains all of the letters 
of the string in the second element of the array.*/

function mutation(arr) {
    arr[0] = arr[0].toLowerCase();
    arr[1] = arr[1].toLowerCase();
    let isIn = 0;
    let check = true;
    for (let i=0 ; i< arr[1].length ; i++) {
        isIn = arr[0].indexOf(arr[1][i]);
        if (isIn === -1) {
          check = false
        }
      }
      return check;
    }
  
  
  
  mutation(["hello", "hey"]);
    