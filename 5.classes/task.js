// Задание 1
class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	// сеттер/геттер состояния книги
	set state(state) {
		if(state < 0) {
			this.state = 0;
		} else if (state > 100) {
			this.state = 100;
		} else {
			this._state = state;
		}
	}

  get state() {
    return this._state;
  }
};

// подклейка
PrintEditionItem.prototype.fix = function () {
this.state *= 1.5;
 };

// класс Magazine
class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
};

// класс Book
class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "book";
		this.author = author;
	}
};

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";

	}
};

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
};

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
};

// Задание 2
class Library {
	constructor(name) {
		this.name = String(name);
		this.books = [];
	}

	addBook(book) {
		this.books.push(book);
	}

	findBookBy(key, value) {
    for(let i=0; i < this.books.length; i++) {
      if(this.books[i].hasOwnProperty(key)) {
        if(this.books[i][key] === Number(value)) {
          return this.books[i];
        }
      } else return null;
    }
  }

  giveBookByName(bookName) {
  	for(let i = 0; i < this.books.length; i++) {
      if(this.books[i].name === bookName) {
      return this.books.splice(i, 1);
      }
    }
  }
};
