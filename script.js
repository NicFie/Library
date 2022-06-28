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
        card.classList.add('displayed-card');
        const titles = document.createElement('div');
        titles.classList.add('titles');
        titles.innerHTML = myLibrary[i].title;
        card.appendChild(titles);

        const subtitleContainer = document.createElement('div');
        subtitleContainer.classList.add('sub-title-container');
        card.appendChild(subtitleContainer);
        const subtitleOne = document.createElement('div');
        subtitleOne.innerHTML = `Author: ${myLibrary[i].author}`;
        const subtitleTwo = document.createElement('div');
        subtitleTwo.innerHTML = `Number of pages: ${myLibrary[i].pages}`;
        
        const subtitleThree = document.createElement('div');
        const subtitleThreeHeading = document.createElement('div');
        subtitleThreeHeading.innerHTML = 'Mark as read: ';
        subtitleThree.appendChild(subtitleThreeHeading);      
        
        const subtitleThreeSlider = document.createElement('label');
        subtitleThreeSlider.classList.add('switch');
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        subtitleThreeSlider.appendChild(checkbox);
        const sliderSpan = document.createElement('span');
        sliderSpan.classList.add('slider');
        subtitleThreeSlider.appendChild(sliderSpan);
        subtitleThree.appendChild(subtitleThreeSlider);
        
        subtitleContainer.appendChild(subtitleOne);
        subtitleContainer.appendChild(subtitleTwo);
        subtitleContainer.appendChild(subtitleThree);      
        
        const removeBtn = document.createElement('span');
        removeBtn.innerHTML = '&#11199';
        removeBtn.addEventListener('click', () => {
            myLibrary.splice(i, 1);
            /*card.classList.add('template');*/
            removeCards();
            displayBooks();
        })
        titles.appendChild(removeBtn);

        checkbox.addEventListener('click', () => {
            if (checkbox.checked == false) {
                card.style.boxShadow = '#fa9da4 0px 1px 4px';
                myLibrary[i].read = 'no';
            } else {
                card.style.boxShadow = '#9ffbc9 0px 1px 4px';
                myLibrary[i].read = 'yes';
            }
        })

        if (myLibrary[i].read == 'yes') {
            card.style.boxShadow = '#9ffbc9 0px 1px 4px';
            checkbox.checked = true;
        } else {
            card.style.boxShadow = '#fa9da4 0px 1px 4px';
            checkbox.checked = false;
        }
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

