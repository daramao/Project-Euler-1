// PE # 14 : Longest Collatz sequence
// 08/07/2014


function CollatzSeq(n) {

    arrayLength = [];

    for (var i= n; i >= 1;i--){
        x = i;
        var array = [x];

        function baseCond (x){
            if (x % 2 === 0){
                x = x / 2;
            } else  {
                 x = 3 * x + 1;
            }
        }

        array.push(i+"hi");

        while (x > 1 ){
//Need to refactor 08/08/2014
            if (x % 2 === 0){
                x = x / 2;
            } else  {
                 x = 3 * x + 1;
            }
            array.push(x);
        }

    length = array.length;
    arrayLength.push(length);
    var max = Math.max.apply(Math, arrayLength);
    console.log(max);
    }
}
CollatzSeq(1000000);
