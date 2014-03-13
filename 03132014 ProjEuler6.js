/* 
Author: Dara Mao
Date: 03-13-2014
Project: To solve Project Euler #6 (Find the difference between square of sum of the first 100 numbers and sum of squared first 100 numbers)
*/
function sumIndSqr(x){
var sumSqr=0; // sum of numbers and then squared
var sumIndSqr=0;//sum of individual numbers square
var sumDiff = sumIndSqr -sumSqr ;

for (var i=0; i<x; i++){
	sumInd+= i;
	sumIndSqr = sumInd*sumInd;

}
return sumIndSqr;
}
alert(sumIndSqr(100));