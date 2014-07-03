/* 
Author: Dara Mao
Date: 03-25-2014
Project: To solve Project Euler #3 (Find the largest prime factor of a given number)
*/


function maxPrimeFactor(n) {
  var max = Math.round(Math.sqrt(n));
  for(var i = max; i >= 2; i--) {
    if(n % i == 0 && maxPrimeFactor(i) == 1) {
      return i;
    }
  }
  return 1;
}

alert(maxPrimeFactor(600851475143));
