function testLogicalOr(val) {
    // Only change code below this line
  
    if (val) {
      return "Outside";
    }
  
    if (val) {
      return "Outside";
    }
  
    // Only change code above this line
    return "Inside";
  }
  
  testLogicalOr(15);

//คำสั่ง
/*
Combine the two if statements into one statement which returns "Outside" if 
val is not between 10 and 20, inclusive. Otherwise, return "Inside".
*/

//Solution
function testLogicalOr(val) {
    // Only change code below this line
  
    if (val <10 || val>20) {
      return "Outside";
    }
  
    
  
    // Only change code above this line
    return "Inside";
  }
  
  testLogicalOr(15);
  