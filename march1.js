class Book {
  constructor(title, genere, author, read = false, readDate = undefined) {
    this.title = title;
    this.genere = genere;
    this.author = author;
    this.read = read;
    this.readDate = readDate;
  }
}

class BookList {
  allBooks = [
    new Book(
      "In Search of Lost Time",
      "mistic",
      "Marcel Proust",
      false,
      undefined
    ),
    new Book(
      "Don Quixote",
      "aventure",
      "Miguel de Cervantes",
      false,
      undefined
    ),
    new Book("Ulysses", "drama", "James Joyce", false, undefined),
    new Book("War and Peace", "fantasy", "Leo Tolstoy", false, undefined),
  ];
  booksReaded = 0;
  booksNotReaded = this.allBooks.length;
  nextBookToRead = {};
  curentBookRead = {};
  lastBookRead = {};

  add(book) {
    this.allBooks.push(book);
  }
  finishCurrentBook(bookName, nextBook) {
    for (let i = 0; i < this.allBooks.length; i++) {
      if (this.allBooks[i].title == bookName) {
        this.allBooks[i].read = true;
        this.allBooks[i].readDate = new Date();
        this.lastBookRead = this.curentBookRead;
        for (let j = 0; j < this.allBooks.length; j++) {
          if (this.allBooks[j].title == nextBook) {
            this.nextBookToRead = this.allBooks[j];
            this.curentBookRead = this.allBooks[j];
          }
        }
        this.booksReaded++;
        this.booksNotReaded--;
        break;
      }
    }
  }
}
bkList = new BookList();

//console.log("before book was finished", Object.assign({}, bkList));
bkList.finishCurrentBook("Ulysses", "War and Peace");
console.log("after a book was finished", Object.assign({}, bkList));
bkList.finishCurrentBook("War and Peace", "Don Quixote");
console.log("after second book was finished", Object.assign({}, bkList));

bkList.add(new Book("Abc", "def", "zzzt", false, undefined));
console.log("after a book was added", Object.assign({}, bkList));
