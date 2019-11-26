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
    })
  })
});
