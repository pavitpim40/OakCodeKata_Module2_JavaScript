//โจทย์
// Setup
function testStrict(val) {
    if (val) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);

  
//คำสั่ง Use the strict equality operator in the if statement so the function will return "Equal" when val is strictly equal to 7

//Solution
function testStrict(val) {
    if (val === 7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);
