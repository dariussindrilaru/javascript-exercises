const palindromes = function (string) {
    let str = string.toLowerCase().replace(/[^a-z0-9]/g, '');
    return str == str.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
