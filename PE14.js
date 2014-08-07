// PE # 14 : Longest Collatz sequence
// 08/07/2014

function CollatzSeq(n) {

    for (var i = n; i > 1; i--) {

        // while (n != 1) {
        if (i % 2 === 0) {
            i = i / 2;
        } else {
            i = 3 * i + 1;
        }
        var total = [];
        var array = [n];
        total = array.push(i);
        // console.log(total);
        // return total;
        // }
        console.log(i);
        // console.log(total);
        return total;
    }

}

CollatzSeq(10);

// var n = 2;
// var total = [];
// var array = [n];

// while (n != 1) {
//     if (n % 2 === 0) {
//         n = n / 2;
//     } else {
//         n = 3 * n + 1;
//     }
//     total = array.push(n);
//     console.log(total);
// }

// var array = [1, 2, 3];
// array.forEach(function(x) {
//     console.log(x * 2);
//     return x * 2;
// });
