//โจทย์
// Setup
function testStrictNotEqual(val) {
    if (val) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);

//คำสั่ง
/*
Add the strict inequality operator to the if statement so the function will return 
"Not Equal" when val is not strictly equal to 17 
*/

//Solution
// Setup
function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);
  