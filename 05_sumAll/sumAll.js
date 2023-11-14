const sumAll = function (num1, num2) {
    let total = 0;
    let biggerValue = Math.max(num1, num2);
    let smallerValue = Math.min(num1, num2)

    if ((typeof num1 === 'string') || (typeof num2 === 'string')) {
        return 'ERROR'
    } else if ((biggerValue >= 0) && (smallerValue >= 0)) {
        for (let i = smallerValue; i <= biggerValue; i++) {
            total += i;
        }
    } else {
        return 'ERROR'
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
