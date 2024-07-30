const palindromes = function (string) {
    
    let singleString = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g,"");
    let length = singleString.length;

    for (let i = 0; i < length; i++) {
        if (singleString[i].toLowerCase() !== singleString[length - 1 - i].toLowerCase()) {
            return false;
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
