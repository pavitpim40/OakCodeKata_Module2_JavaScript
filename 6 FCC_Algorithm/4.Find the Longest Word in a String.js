// Return the length of the longest word in the provided sentence.

// Your response should be a number.



function findLongestWordLength(str) {
    let word = str.split(' ');
    let wordLength = word.map(x => x.length);
    let maxLengthWord = Math.max(...wordLength);
    
    return maxLengthWord;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
  