const fibonacci = function(number) {

    number = Number(number);

    if (number < 0) {
        return "OOPS";
    } else if (number == 0) {
        return 0;
    }
    
    let fib = [1, 1];
    for (let i = 2; i < number; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib[number - 1];
};

// Do not edit below this line
module.exports = fibonacci;
