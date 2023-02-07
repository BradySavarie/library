const myLibrary = [];

// Element Selectors //

const openFormButton = document.getElementById('openFormButton');
const closeFormButton = document.getElementById('closeFormButton');
const overlay = document.getElementById('overlay');
const addBookFormContainer = document.getElementById('addBookFormContainer');
const addBookForm = document.getElementById('addBookForm');
const emptyLibrary = document.getElementById('emptyLibrary');

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
    console.log(myLibrary);
});

// Test Scripts //
