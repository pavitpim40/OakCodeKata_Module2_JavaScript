function repeatStringNumTimes(str, num) {
    return str;
  }
  
  repeatStringNumTimes("abc", 3);

/*
Repeat a given string str (first argument) for num times (second argument). 
Return an empty string if num is not a positive number.
*/

function repeatStringNumTimes(str, num) {
    let newStr = "";
    for ( let i = 1 ; i <= num ; i++) {
      newStr += str;
    }
    
    return newStr;
  }
  
  repeatStringNumTimes("abc", 3);
  