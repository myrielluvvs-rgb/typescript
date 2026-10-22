/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */


type Book = {
    isbn: string;
    title: string;
    author: string;
    pages: number;
    category: string;
    isAvailable: boolean;
};

const book1: Book = {
    isbn: "001",
    title: "Laskar Pelangi",
    author: "Andrea Hirata",
    pages: 529,
    category: "Novel",
    isAvailable: true
};

const book2: Book = {
    isbn: "002",
    title: "Bumi",
    author: "Tere Liye",
    pages: 440,
    category: "Fantasy",
    isAvailable: true
};

const book3: Book = {
    isbn: "003",
    title: "Laut Bercerita",
    author: "Leila S. Chudori",
    pages: 379,
    category: "Fiction",
    isAvailable: false
};

console.log("Book 1:", book1);
console.log("Book 2:", book2);
console.log("Book 3:", book3);
