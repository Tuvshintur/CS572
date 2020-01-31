const fibonacci = function (num) {
    var a = 1, b = 0, temp;

    while (num >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }

    return b;
}

process.on('message', (number) => {
    const fib = fibonacci(number);
    process.send(fib);
});