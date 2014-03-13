/* 
Author: Dara Mao
Date: 03-13-2014
Project: To solve Project Euler #2 (Find the sum of even Fibonacci numbers under 4M)
*/

function evenSumFib(max){
    var sum = 0;
    var a=0;
    var b=1;
    var c=2;
    
    while (c <= max){
        if (c%2 == 0){
           sum += c;
        } //end for if block
        a=b;
        b=c;
        c=c+a;
    }//end of while block
    return sum;    
}
alert(evenSumFib(4000000));
