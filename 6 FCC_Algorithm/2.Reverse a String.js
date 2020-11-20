function reverseString(str) {
    return str;
  }
  
  reverseString("hello");


/*
Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.
*/

function reverseString(str) {
    let revstr = ""
    for ( let i = str.length-1 ; i>=0 ;i-- ){
      revstr += str[i]
  
    }
    
    return revstr;
  }
  
  reverseString("hello");
  