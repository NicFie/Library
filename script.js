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
        const card = document.createElement('div');
        const titles = document.createElement('div');
        const subtitleContainer = document.createElement('div');
        const subtitleOne = document.createElement('div');
        const subtitleTwo = document.createElement('div');
        const subtitleThree = document.createElement('div');
        const subtitleThreeHeading = document.createElement('div');
        const subtitleThreeSlider = document.createElement('label');
        const checkbox = document.createElement('input');
        const sliderSpan = document.createElement('span');
        const removeBtn = document.createElement('span');

        card.classList.add('displayed-card');
        titles.classList.add('titles');
        subtitleContainer.classList.add('sub-title-container');
        subtitleThree.classList.add('slider-container');
        subtitleThreeSlider.classList.add('switch');
        sliderSpan.classList.add('slider');


        titles.innerHTML = myLibrary[i].title;
        subtitleOne.innerHTML = `Author: ${myLibrary[i].author}`;
        subtitleTwo.innerHTML = `Number of pages: ${myLibrary[i].pages}`;
        subtitleThreeHeading.innerHTML = 'Mark as read: ';
        removeBtn.innerHTML = '&#11199';

        checkbox.type = "checkbox";

        removeBtn.addEventListener('click', () => {
            myLibrary.splice(i, 1);
            removeCards();
            displayBooks();
        })

        checkbox.addEventListener('click', () => {
            if (checkbox.checked == false) {
                titles.style.backgroundColor = '#fa9da4';
                myLibrary[i].read = 'no';
            } else {
                titles.style.backgroundColor = '#9ffbc9';
                myLibrary[i].read = 'yes';
            }
        })

        if (myLibrary[i].read == 'yes') {
            titles.style.backgroundColor = '#9ffbc9';
            checkbox.checked = true;
        } else {
            titles.style.backgroundColor = '#fa9da4';
            checkbox.checked = false;
        }

        card.appendChild(titles);
        card.appendChild(subtitleContainer);
        titles.appendChild(removeBtn);
        subtitleThree.appendChild(subtitleThreeHeading);
        subtitleThreeSlider.appendChild(checkbox);
        subtitleThreeSlider.appendChild(sliderSpan);
        subtitleThree.appendChild(subtitleThreeSlider);
        subtitleContainer.appendChild(subtitleOne);
        subtitleContainer.appendChild(subtitleTwo);
        subtitleContainer.appendChild(subtitleThree);
        document.getElementById('card-container').appendChild(card);
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

