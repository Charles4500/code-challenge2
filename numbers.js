//Created a function that accepts two numbers inside the parameters(first number , lastNumber)
function newArray(firstNumber, lastNumber) {
  //Created a variable and assigned it to an empty array.
  let result = [];
  
  //This is a conditional statement that executes only if the expression is true
  if (firstNumber <= lastNumber) {

    //This first conditions runs,while incrementing till the condition is met.
      for (let i = firstNumber; i <= lastNumber; i++) {
        //used the array method (.push) to add an element at the end of the array
          result.push(i);
      }
  //This statement executes if the first condition is not met.
  } else {
    //This second condition runs while subtracting one number till the condition is met.
      for (let i = firstNumber; i >= lastNumber; i--) {
          result.push(i);
      }
  }
  return result;
}
//Created a variable and assigned it an empty array using the array constructor
let numbers = newArray();
//When an argument is passed inside this function it outputs the numbers between the passed arguments and the argument 
console.log(newArray(4,7));

//Created a variable and assigned it an empty array using the array constructor
let numbers2 = newArray();
//When an argument is passed inside this function it outputs the numbers between the passed arguments and the argument
console.log(newArray(-4,7));




