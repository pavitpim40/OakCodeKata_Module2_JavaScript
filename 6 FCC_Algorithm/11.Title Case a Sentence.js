function titleCase(str) {
    return str;
  }
  
  titleCase("I'm a little tea pot");
  

/*Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".*/






function titleCase(str) {
    let lowerStr = str.toLowerCase();
    let arrLowerStr = lowerStr.split(" ");
    let newArr = arrLowerStr.map (x => {
      return x.replace(x.charAt(0), x.charAt(0).toUpperCase());
    })
   
    return newArr.join(' ');
   }
   
   titleCase("I'm a little tea pot");
   