// PE # 14 : Longest Collatz sequence
// 08/07/2014

function baseCond(x){
    if (x % 2 === 0){
        x = x / 2;
    } else  {
       x = 3 * x + 1;
    }
    return x;
}

function CollatzSeq(n) {

    for (var i= n; i >= 1;i--){
        x = i;
        var array = [x];
        array.push(i+"hi");

        baseCond(x);

        while (x > 1 ){
            if (x % 2 === 0){
                x = x / 2;
            } else  {
               x = 3 * x + 1;
            }
        array.push(x);
        }

        arrayLength = [];
        length = array.length;
        arrayLength.push(length);
        var max = Math.max.apply(Math, arrayLength);
        console.log(max);
        }
}

CollatzSeq(1000000);
