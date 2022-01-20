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
	};
  

	addBook(book) {
		if (book.state > 30) {
		this.books.push(book);
		} else {
				return alert(`Неудовлетворительное состояние книги - ${book.state} из 100. В библиотеку добавление не производим`);
		}
	};

	findBookBy (key, value) {
    let findBook = null;
    for (let i=0; i < this.books.length; i++) {
      	for (let k in this.books[i])	{
        	if (k === key && this.books[i][key] === value) {
            findBook = this.books[i];
          }
        }
      }
    return findBook;
  };

  giveBookByName(bookName) {
    let needBook;
  	for (let i = 0; i < this.books.length; i++) {
      if(this.books[i].name === bookName) {
      needBook = this.books.splice(i, 1)[0];
      console.log(needBook);
      }
    }
  return needBook;
  };
}