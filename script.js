let myLibrary = [];

let userInput = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    myLibrary.push(userInput);
}




function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        document.getElementById('title-input').innerHTML = myLibrary[i].title;
        document.getElementById('author-input').innerHTML = myLibrary[i].author;
        document.getElementById('pages-input').innerHTML = myLibrary[i].pages;
        document.getElementById('read-input').innerHTML = myLibrary[i].read;
        const card = document.getElementById('card');
        const cardClone = card.cloneNode(true);
        cardClone.classList.remove('template');
        document.getElementById('card-container').appendChild(cardClone);
    }
}

/*let userInput = new Book('Harry', 'JK', 300, 'no');
addBookToLibrary();
userInput = new Book('hi', 'hi', 10, 'no');
addBookToLibrary();
userInput = new Book('sup', 'heyyy', 12, 'no');
addBookToLibrary();
displayBooks();*/

const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const readInput = document.getElementById('read');
const addBook = document.getElementById('add-book');

let newTitle = '';
let newAuthor = '';
let newPages = 0;
let newRead = false;

titleInput.addEventListener('change', (e) => {
    newTitle = e.target.value;
})

authorInput.addEventListener('change', (e) => {
    newAuthor = e.target.value;
})

pagesInput.addEventListener('change', (e) => {
    newPages = e.target.value;
})

authorInput.addEventListener('change', (e) => {
    newRead = e.target.value;
})

addBook.addEventListener('click', (e) => {
    userInput = new Book(newTitle, newAuthor, newPages, newRead);
    addBookToLibrary();
    displayBooks();
})

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }