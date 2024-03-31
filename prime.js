//Create an array and assign it a variable.
let numberInput = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isPrime(num) {
   // Numbers less than or equal to 1 are not prime.They start from 2.
  if (num <= 1) return false;

  // Check if num is divisible evenly by any integer from 2 to its square root
  for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        // If it is divisible, then it's not a prime number
          return false; 
      }
  }
  // If no divisor found, then it's a prime number
  return true; 
}

function filterPrimes(figure) {
  return figure.filter(num => isPrime(num));
}

let primeNumbers = filterPrimes(numberInput);
console.log(primeNumbers);