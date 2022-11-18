const getTheTitles = function(books) {
 // for (let book in books) {
 //  return book.title;
 // }
 return books.map(book => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
