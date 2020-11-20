//โจทย์
// Setup
function testEqual(val) {
    if (val) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);


//คำสั่ง Add the equality operator to the indicated line so that the function will return "Equal" when val is equivalent to 12.

//Solution
// Setup
function testEqual(val) {
    if (val == 12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);
  