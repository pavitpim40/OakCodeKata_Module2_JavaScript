const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
  };
  function makeList(arr) {
    "use strict";
  
    // Only change code below this line
    const resultDisplayArray = null;
    // Only change code above this line
  
    return resultDisplayArray;
  }
  
  const resultDisplayArray = makeList(result.failure);
/* 
Use template literal syntax with backticks to display each entry of the result 
object's failure array. Each entry should be wrapped inside an li element with 
the class attribute text-warning, and listed within the resultDisplayArray.

Use an iterator method (any kind of loop) to get the desired output (shown below)
[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]

*/  

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
  };
  
  function makeList(arr) {
    "use strict";
  // Only change code below this line
  
  const resultDisplayArray = []; 
    for(let i = 0 ; i < arr.length ; i++){
  
      let x = `<li class="text-warning">${arr[i]}</li>`;
      resultDisplayArray.push(x);
    }
  
  // Only change code above this line
  
    return resultDisplayArray;
  }
  
  const resultDisplayArray = makeList(result.failure);
  
  // ใช้ map แก้
  // const result = {
  //   success: ["max-length", "no-amd", "prefer-arrow-functions"],
  //   failure: ["no-var", "var-on-top", "linebreak"],
  //   skipped: ["id-blacklist", "no-dup-keys"]
  // };
  // function makeList(arr) {
  //   "use strict";
  //   // change code below this line
  //   const resultDisplayArray = arr.map(item => `<li class="text-warning">${item}</li>`);
  //   // change code above this line
  //   return resultDisplayArray;
  // }
  // /**
  //  * makeList(result.failure) should return:
  //  * [ `<li class="text-warning">no-var</li>`,
  //  *   `<li class="text-warning">var-on-top</li>`,
  //  *   `<li class="text-warning">linebreak</li>` ]
  //  **/
  // const resultDisplayArray = makeList(result.failure);