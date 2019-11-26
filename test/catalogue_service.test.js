const catalogueService = require("../app/catalogue_service");

describe("catalogueService", () => {
  describe("catalogueService.countBooksByAuthor", () => {
    test("returns the total number of books written by the given author", () => {
      expect(catalogueService.countBooksByAuthor("Hilary Mantel")).toBe(5);
      expect(catalogueService.countBooksByAuthor("Celeste Ng")).toBe(1);
      expect(catalogueService.countBooksByAuthor("Charles Dickens")).toBe(3);
    });
  });

  describe("catalogueService.checkBookByTitle", () => {
    test("returns true if the book exists, false if it does not", () => {
      expect(catalogueService.checkBookByTitle("The Assassination of Margaret Thatcher")).toBe(true);
      expect(catalogueService.checkBookByTitle("Pride and Prejudice")).toBe(false);
    });
  });

  describe("catalogueService.countBooksByFirstLetter", () => {
    test("returns total number of books that begin with given letter", () => {
      expect(catalogueService.countBooksByFirstLetter("G")).toBe(2);
      expect(catalogueService.countBooksByFirstLetter("T")).toBe(5);
      expect(catalogueService.countBooksByFirstLetter("Z")).toBe(0);
    });

    test("still returns total number of books if given lowercase input", () => {
      expect(catalogueService.countBooksByFirstLetter("w")).toBe(2);
      expect(catalogueService.countBooksByFirstLetter("d")).toBe(1);
    });
  });

  describe("catalogueService.getQuantity", () => {
    test("return quantity of books in stock when given a title", () => {
      expect(catalogueService.getQuantity("The Origin of Species")).toBe(50);
      expect(catalogueService.getQuantity("Oliver Twist")).toBe(7);
      expect(catalogueService.getQuantity("The Hobbit")).toBe("Sorry, we don't stock that book.");
    });
  });

  describe("catalogueService.getBooksByAuthor", () => {
    test("return array of books by given author", () => {
      expect(catalogueService.getBooksByAuthor("Robert Bolaño")).toEqual([
        { title: "2666", author: "Robert Bolaño", quantity: 17 },
        { title: "By Night In Chile", author: "Robert Bolaño", quantity: 8 }
      ]);
      expect(catalogueService.getBooksByAuthor("Sally Rooney")).toEqual([
        { title: "Conversations With Friends", author: "Sally Rooney", quantity: 1},
        { title: "Normal People", author: "Sally Rooney", quantity: 2}
      ]);
    });
// Want to make it work when only first name is given
// Currently returns alphabeticised array (author, quantity, title instead of title, author, quantity) AND empty array
// Why does giving full name not make it alphabeticised?
// book.author === author requires full author name to match. Maybe .includes would somehow work.
    // test("return array with matching authors given only a first name", () => {
    //   expect(catalogueService.getBooksByAuthor("Charles")).toEqual([
    //     { title: "A Tale of Two Cities", author: "Charles Dickens", quantity: 7},
    //     { title: "Oliver Twist", author: "Charles Dickens", quantity: 7},
    //     { title: "Great Expectations", author: "Charles Dickens", quantity: 1},
    //     { title: "The Origin of Species", author: "Charles Darwin", quantity: 50}
    //   ]);
    // })

    // Also returns alphabeticised array + empty array.
    test("return array of author's books given only last name", () => {
      expect(catalogueService.getBooksByAuthor("Dickens")).toEqual([
        { title: "A Tale of Two Cities", author: "Charles Dickens", quantity: 7},
        { title: "Oliver Twist", author: "Charles Dickens", quantity: 7},
        { title: "Great Expectations", author: "Charles Dickens", quantity: 1}
      ]);
    })
  })
});
