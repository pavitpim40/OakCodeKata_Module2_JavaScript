var count = 0;

 
function cc(card) {
    // Only change code below this line
    var regex = /[J |Q | K| A ]/g;
    if (card >= 2 && card <= 6) {
      count++;
    } else if (card === 10 || String(card).match(regex)) {
      count--;
    }
  
  

    if(count > 0) {
        return count + " Bet";
    } else {
        return count + " Hold";
    }
  
    // Only change code above this line
  }