//โจทย์
function testLessOrEqual(val) {
    if (val) {  // Change this line
      return "Smaller Than or Equal to 12";
    }
  
    if (val) {  // Change this line
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
  
  testLessOrEqual(10);
  
//คำสั่ง
//Add the less than or equal to operator to the indicated lines so that the return statements make sense.

//solution
function testLessOrEqual(val) {
    if (val <= 12) {  // Change this line
      return "Smaller Than or Equal to 12";
    }
  
    if (val <=24 ) {  // Change this line
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
  
  testLessOrEqual(10);
  