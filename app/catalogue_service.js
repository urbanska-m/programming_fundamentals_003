// eslint-disable-next-line no-unused-vars
const catalogue = [
  { title: "The Catcher in the Rye", author: "J.D. Salinger", quantity: 10},
  { title: "Dracula", author: "Bram Stoker", quantity: 0},
  { title: "Between the Assassinations", auhor: "Aravind Adiga", quantity: 9},
  { title: "Wolf Hall", author: "Hilary Mantel", quantity: 33},
  { title: "Bring Up The Bodies", author: "Hilary Mantel", quantity: 31},
  { title: "A Place of Greater Safety", author: "Hilary Mantel", quantity: 11},
  { title: "Giving Up the Ghost", author: "Hilary Mantel", quantity: 8},
  { title: "The Assassination of Margaret Thatcher", author: "Hilary Mantel", quantity: 43},
  { title: "The Yellow Wallpaper", author: "Charlotte Perkins Gilman", quantity: 12},
  { title: "Conversations With Friends", author: "Sally Rooney", quantity: 1},
  { title: "Normal People", author: "Sally Rooney", quantity: 2},
  { title: "Everything I Never Told You", author: "Celeste Ng", quantity: 6},
  { title: "2666", author: "Robert Bolaño", quantity: 17},
  { title: "By Night In Chile", author: "Robert Bolaño", quantity: 8},
  { title: "A Tale of Two Cities", author: "Charles Dickens", quantity: 7},
  { title: "Oliver Twist", author: "Charles Dickens", quantity: 7},
  { title: "Great Expectations", author: "Charles Dickens", quantity: 1},
  { title: "The Blind Assassin", author: "Margaret Atwood", quantity: 8},
  { title: "Why Be Happy When You Could Be Normal?", author: "Jeanette Winterson", quantity: 19},
  { title: "The Origin of Species", author: "Charles Darwin", quantity: 50}
];

function countBooksByAuthor(author) {
  // Your code here
    let bookByAuthor = 0;
    for (let i = 0; i < catalogue.length; i++) {
      let book = catalogue[i];
      if (book.author === author) {
        bookByAuthor++;
      }
    } return bookByAuthor;
  };

function checkBookByTitle(title) {
  // Your code here
  for (let i = 0; i < catalogue.length; i++) {
    let book = catalogue[i];
    if (book.title === title) {
      return true;
    }
  } return false;
};

function countBooksByFirstLetter(letter) {
  // Your code here
  let matchingBook = 0;
  for (let i = 0; i < catalogue.length; i++) {
    let book = catalogue[i];
    if (book.title[0] === letter || book.title[0] === letter.toUpperCase()) {
      matchingBook++;
    }
  } return matchingBook;
};

function getQuantity(title) {
  // Your code here
  for (let i = 0; i < catalogue.length; i++) {
    let book = catalogue[i];
    if (book.title === title) {
      return book.quantity;
    }
  }  
  return "Sorry, we don't stock that book."
};

function getBooksByAuthor(author) {
  // Your code here
  const authorArray = catalogue.filter(function(book) {
    return book.author === author;
  })
return authorArray;
};


function checkQuantity(title, quantity) {
  // Your code here
  for (let i = 0; i < catalogue.length; i++) {
    let book = catalogue[i];
    if (book.title === title && book.quantity >= quantity) {
      return true;
    }
  } return false;
};

module.exports = {
  countBooksByAuthor,
  checkBookByTitle,
  countBooksByFirstLetter,
  getQuantity,
  getBooksByAuthor,
  checkQuantity
};
