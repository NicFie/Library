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
        cardClone.classList.add('displayed-card')
        document.getElementById('card-container').appendChild(cardClone);
    }
}

const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const readInput = document.getElementById('read');
const addBook = document.getElementById('add-book');

let newTitle = '';
let newAuthor = '';
let newPages = 0;
let newRead = 'no';

titleInput.addEventListener('change', (e) => {
    newTitle = e.target.value;
})

authorInput.addEventListener('change', (e) => {
    newAuthor = e.target.value;
})

pagesInput.addEventListener('change', (e) => {
    newPages = e.target.value;
})

readInput.addEventListener('change', (e) => {
    return (e.target.checked == true) ? newRead = 'yes' : newRead = 'no';
})

function removeCards() {
    const cardsToRemove = document.querySelectorAll('.displayed-card');
    cardsToRemove.forEach(card => {
        card.remove();
    })
}

addBook.addEventListener('click', (e) => {
    if (newTitle == '' || newAuthor == '') return;
    if (newPages <= 0) {
        pagesInput.setCustomValidity('Enter a number above 0');
        return;
    }
    userInput = new Book(newTitle, newAuthor, newPages, newRead);
    removeCards();
    addBookToLibrary();
    displayBooks();
    titleInput.value = '';
    newTitle = '';
    authorInput.value = '';
    newAuthor = '';
    pagesInput.value = 0;
    newPages = '';
    readInput.checked = false;
    newRead = 'no';
})

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }