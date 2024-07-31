function calcAge(yearOfDeath, yearOfBirth) {
    if (!yearOfDeath) {
        return (new Date().getFullYear()) - yearOfBirth;
    } else {
        return yearOfDeath - yearOfBirth;
    }
}

const findTheOldest = function(array) {
    return array.reduce((oldest, current) => {

        let currentAge = calcAge(current["yearOfDeath"], current["yearOfBirth"]);
        let oldestAge = calcAge(oldest["yearOfDeath"], oldest["yearOfBirth"]);

        if (currentAge > oldestAge) {
            return oldest = current;
        }
        return oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
