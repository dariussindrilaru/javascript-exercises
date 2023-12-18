const fibonacci = function (number) {
    if (number < 0) {
        return 'OOPS';
    }

    let current = 0;
    let next = 1;

    for (let i = 1; i <= number; i++) {
        let sum = current + next;
        current = next;
        next = sum;
    } return current;
};

// Do not edit below this line
module.exports = fibonacci;
