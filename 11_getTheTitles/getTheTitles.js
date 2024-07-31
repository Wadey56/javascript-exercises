const getTheTitles = function(array) {
    let titles = array.map((book) => {
        return book["title"];
    })

    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
