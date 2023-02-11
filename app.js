const myLibrary = [];

// Global Element Selectors //

const openFormButton = document.getElementById('openFormButton');
const closeFormButton = document.getElementById('closeFormButton');
const overlay = document.getElementById('overlay');
const addBookFormContainer = document.getElementById('addBookFormContainer');
const addBookForm = document.getElementById('addBookForm');
const emptyLibrary = document.getElementById('emptyLibrary');
const booksGrid = document.getElementById('booksGrid');

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

function removeBookFromLibrary(card) {
    const index = card.dataset.book;
    myLibrary.splice(index, 1);
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
    // get book
    const book = myLibrary[myLibrary.length - 1];
    // create elements
    const card = document.createElement('div');
    const title = document.createElement('h1');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const read = document.createElement('button');
    const remove = document.createElement('button');

    const titleContent = document.createTextNode(`${book.title}`);
    const authorContent = document.createTextNode(`Author: ${book.author}`);
    const pagesContent = document.createTextNode(`Pages: ${book.pages}`);
    const readTextContent = document.createTextNode('Read');
    const removeContent = document.createTextNode('-');
    // add attributes to elements
    card.classList.add('card');
    card.dataset.book = `${myLibrary.length - 1}`;
    title.classList.add('bookTitle');
    author.classList.add('bookAuthor');
    pages.classList.add('pages');
    read.classList.add('read');
    read.setAttribute('id', `isReadCard${myLibrary.length}`);
    remove.classList.add('removeBook');
    remove.setAttribute('id', `removeBook${myLibrary.length}`);
    // append book
    booksGrid.appendChild(card);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(remove);
    title.appendChild(titleContent);
    author.appendChild(authorContent);
    pages.appendChild(pagesContent);
    card.appendChild(read);
    read.appendChild(readTextContent);
    remove.appendChild(removeContent);
}

function removeBookFromGrid(card) {
    booksGrid.removeChild(card);
}

function initializeRead(readStatus) {
    const card = document.getElementById(`isReadCard${myLibrary.length}`);
    if (readStatus === 'true') {
        card.textContent = 'Read';
        card.style.background = '#1992d4';
    } else if (readStatus === 'false') {
        card.textContent = 'Not Read';
        card.style.background = '#d71414';
    }
}

function toggleRead(readButton, card) {
    const index = card.dataset.book;
    if (readButton.textContent === 'Read') {
        myLibrary[index].read = false;
        readButton.textContent = 'Not Read';
        readButton.style.background = '#d71414';
    } else if (readButton.textContent === 'Not Read') {
        myLibrary[index].read = true;
        readButton.textContent = 'Read';
        readButton.style.background = '#1992d4';
    }
}

function updateDataValues(card) {
    const dataValue = card.dataset.book;
    const cards = Array.from(document.getElementsByClassName('card'));

    for (let i = 0; i < cards.length; i++) {
        if (cards[i].dataset.book >= dataValue) {
            cards[i].dataset.book--;
        }
    }
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
    initializeRead(read);
});

booksGrid.addEventListener('click', (e) => {
    if (e.target.nodeName === 'BUTTON') {
        if (e.target.className === 'removeBook') {
            removeBookFromGrid(e.target.parentNode);
            removeBookFromLibrary(e.target.parentNode);
            updateDataValues(e.target.parentNode);
            toggleBooksGrid();
            toggleEmptyLibrary();
        } else if (e.target.className === 'read') {
            toggleRead(e.target, e.target.parentNode);
        }
    }
});
