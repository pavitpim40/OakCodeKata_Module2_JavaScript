//ประกาศตัวแปรเป็น let , var ประกาศซ้ำ หรืออ override ได้โดยไม่แสดง error

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
