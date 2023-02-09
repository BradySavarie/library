const myLibrary = [];

// Element Selectors //

const openFormButton = document.getElementById('openFormButton');
const closeFormButton = document.getElementById('closeFormButton');
const overlay = document.getElementById('overlay');
const addBookFormContainer = document.getElementById('addBookFormContainer');
const addBookForm = document.getElementById('addBookForm');
const emptyLibrary = document.getElementById('emptyLibrary');
const booksGrid = document.getElementById('booksGrid');
const displayedBooks = document.getElementsByClassName('removeBook');

// Functions //

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function openAddBookForm() {
    addBookFormContainer.style.transform = 'translate(-50%, -50%) scale(1)';
    overlay.style.display = 'block';
}

function closeAddBookForm() {
    addBookFormContainer.style.transform = 'translate(-50%, -50%) scale(0)';
    overlay.style.display = 'none';
}

function addBookToLibrary(title, author, pages, read) {
    for (let i = 0; i <= myLibrary.length; i++) {
        if (myLibrary[i] === undefined) {
            myLibrary[i] = new Book(title, author, pages, read);
            break;
        }
    }
}

function getFormData(form) {
    const formData = new FormData(form);
    const [titlePair, authorPair, pagesPair, readPair] = formData.entries();
    const values = [titlePair[1], authorPair[1], pagesPair[1], readPair[1]];
    return values;
}

function toggleEmptyLibrary() {
    if (!(myLibrary[0] === undefined)) {
        emptyLibrary.style.display = 'none';
        return;
    }
    emptyLibrary.style.display = 'flex';
}

function toggleBooksGrid() {
    if (myLibrary[0] === undefined) {
        booksGrid.style.transform = 'scale(0)';
        return;
    }
    booksGrid.style.transform = 'scale(1)';
}

function addBookToGrid() {
    // select recently added book from last index of myLibrary array
    const book = myLibrary[myLibrary.length - 1];
    // create card DOM elements and give them a data-attribute matching myLibrary index number of book
    const card = document.createElement('div');
    const title = document.createElement('h1');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const read = document.createElement('div');
    const readText = document.createElement('p');
    const readInput = document.createElement('input');
    const readLabel = document.createElement('label');
    const readHiddenInput = document.createElement('input');
    const remove = document.createElement('button');

    const titleContent = document.createTextNode(`${book.title}`);
    const authorContent = document.createTextNode(`Author: ${book.author}`);
    const pagesContent = document.createTextNode(`Pages: ${book.pages}`);
    const readTextContent = document.createTextNode('Mark as Read');
    const removeContent = document.createTextNode('-');

    card.classList.add('card');
    card.dataset.book = `${myLibrary.length - 1}`;
    title.classList.add('bookTitle');
    author.classList.add('bookAuthor');
    pages.classList.add('pages');
    read.classList.add('readInput');
    readInput.setAttribute('type', 'checkbox');
    readInput.setAttribute('id', `idReadCard${myLibrary.length}`);
    readLabel.setAttribute('for', `isReadCard${myLibrary.length}`);
    readHiddenInput.setAttribute('type', 'hidden');
    remove.classList.add('removeBook');
    remove.setAttribute('id', `removeBook${myLibrary.length}`);

    booksGrid.appendChild(card);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(readText);
    card.appendChild(remove);
    title.appendChild(titleContent);
    author.appendChild(authorContent);
    pages.appendChild(pagesContent);
    read.appendChild(readText);
    readText.appendChild(readTextContent);
    read.appendChild(readInput);
    read.appendChild(readLabel);
    read.appendChild(readHiddenInput);
    remove.appendChild(removeContent);
}

function removeBookFromGrid(card) {
    booksGrid.removeChild(card);
}

function removeBookFromLibrary(card) {
    const index = card.dataset;
    myLibrary.splice(index, 1);
}

// Event Handlers //

openFormButton.addEventListener('click', () => {
    openAddBookForm();
});

closeFormButton.addEventListener('click', () => {
    closeAddBookForm();
});

overlay.addEventListener('click', () => {
    closeAddBookForm();
});

addBookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (document.getElementById('isRead').checked) {
        document.getElementById('isNotRead').disabled = true;
    }
    const [title, author, pages, read] = getFormData(e.target);
    addBookToLibrary(title, author, pages, read);
    toggleEmptyLibrary();
    closeAddBookForm();
    toggleBooksGrid();
    addBookToGrid();
});

booksGrid.addEventListener('click', (e) => {
    if (e.target && e.target.nodeName === 'BUTTON') {
        removeBookFromGrid(e.target.parentNode);
        removeBookFromLibrary(e.target.parentNode);
        toggleBooksGrid();
        toggleEmptyLibrary();
    }
});
// Test Scripts //
