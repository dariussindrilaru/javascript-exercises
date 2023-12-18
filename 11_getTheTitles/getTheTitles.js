const getTheTitles = function (obj) {
    const bookTitle = obj.map((book => {
        return book.title;
    }));
    return bookTitle;
};

// Do not edit below this line
module.exports = getTheTitles;
