function chunkArrayInGroups(arr, size) {
    return arr;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);


/* 
Write a function that splits an array (first argument) into groups the length of 
size (second argument) and returns them as a two-dimensional array

*/

function chunkArrayInGroups(arr, size) {
    let newArr = []
    // ใช้ while ง่ายกว่า
    for (let i = 0 ; arr.length !==0 ; i++) {
      if (arr.length) {
        newArr.push(arr.splice(0,size));
      } else {
        continue;
      }
    
    }
    return newArr;
    }
    
    chunkArrayInGroups(["a", "b", "c", "d"], 2);
    