function checkObj(obj, checkProp) {
    // Only change code below this line
    return "Change Me!";
    // Only change code above this line
  }

  // Modify the function checkObj to test if an object passed to the function (obj) 
  // contains a specific property (checkProp). If the property is found, return that 
  // property's value. If not, return "Not Found".

 

function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp)){
  return obj[checkProp];
  } else {
    return "Not Found";
  }
  // Only change code above this line
}

// ใน hasOwnProperty ใช้ String เช็คไม่ถูก เพราะ checkProp เป็นตัวแปร
// return obj.checkprop ก็ไม่ได้ เพราะ checkProp เป็นตัวแปร