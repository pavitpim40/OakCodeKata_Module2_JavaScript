//โจทย์
function testLessThan(val) {
    if (val) {  // Change this line
      return "Under 25";
    }
  
    if (val) {  // Change this line
      return "Under 55";
    }
  
    return "55 or Over";
  }
  
  testLessThan(10);

//คำสั่ง
//Add the less than operator to the indicated lines so that the return statements make sense.

//solution
function testLessThan(val) {
    if (val < 25) {  // Change this line
      return "Under 25";
    }
  
    if (val < 55) {  // Change this line
      return "Under 55";
    }
  
    return "55 or Over";
  }
  
  testLessThan(10);
  