let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    myLibrary.push(userInput);
}

const titleInput = document.getElementById('title-input');
const authorInput = document.getElementById('author-input');
const pagesInput = document.getElementById('pages-input');
const readInput = document.getElementById('read-input');

function displayBook() {
    for (let i = 0; i < myLibrary.length; i++) {
        titleInput.innerHTML = myLibrary[i].title;
        authorInput.innerHTML = myLibrary[i].author;
        pagesInput.innerHTML = myLibrary[i].pages;
        readInput.innerHTML = myLibrary[i].read;
    }
}

let userInput = new Book('Harry', 'JK', 300, 'no');
addBookToLibrary();
displayBook();