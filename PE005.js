multiple_num

function multiple_20(divisor_num) {
    // var divisor_num = 20;
    for (i = 1; i <= divisor_num; i++) {
        multiple_num % i == 0;
    }

    function lcm(numbers) {
        return numbers.reduce(function(a, b) {
            return Math.abs(a * b) / gcd(a, b);
        });
    }
};
