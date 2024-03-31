//Creating a variable and assigning it an empty string
let words = ('');
function swapLetters(words) {

  //Create a variable and assign it an empty string.
  let swappedLetters = "";
  //For which is a loop iterates through (aChar) 
  for (let i = 0; i < words.length; i++) {
      let aChar = words[i];
      //If statement checks if current (aChar) is lowercase then swaps it to upperCase
      if (aChar === aChar.toLowerCase()) {
          swappedLetters += aChar.toUpperCase();
      //else if checks whether (aChar) is upperCase and swaps it to loweCase
      } else if (aChar === aChar.toUpperCase()) {
          swappedLetters += aChar.toLowerCase();
      } else {
          swappedLetters += aChar;
      }
  }
  console.log(swappedLetters);
  return swappedLetters;
  
}
//When an argument(words) is passed through, it is swapped
swapLetters('The Quick Brown Fox');
swapLetters('Coding Is Becoming More Interesting');




