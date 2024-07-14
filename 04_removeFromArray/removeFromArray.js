const removeFromArray = function(array, ...removeItems) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < removeItems.length; j++) {
            if (removeItems[j] === array[i]) { 
                array.splice(i, 1);
                j -= 2; // reset the counter to account for reduced array
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
