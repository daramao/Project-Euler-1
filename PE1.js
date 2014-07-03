/* 
Author: Dara Mao
Date: 03-12-2014
Project: To solve Project Euler #1 (Find the sum of all the multiples of 3 or 5 below 1000.)
*/

function numbers (){
	var sum = 0;
	for (i = 0; i < 1000; i++){
	if (i % 3 == 0 || i % 5 == 0){
	sum += i;
	}
	}
	document.write(sum);
	}

	numbers ();
