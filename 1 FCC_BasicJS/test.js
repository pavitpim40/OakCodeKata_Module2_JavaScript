function countDown(n){
  if (n < 0) return;
  console.log('Count down: ',n);
  countDown(n-1);
}

countDown(5);
//  Count down:  5
//  Count down:  4 
//  Count down:  3
//  Count down:  2
//  Count down:  1
//  Count down:  0



function factorial(n){
  if (n === 1) return 1;
  return n*factorial(n-1) ;
}

factorial(4); //24
factorial(5); //120



function reverse(str){
  if (str.length === 1) return str;
  const [firstCharacter] = str;
  const remainingCharacter = str.substring(1);
  return reverse(remainingCharacter) + firstCharacter;
}