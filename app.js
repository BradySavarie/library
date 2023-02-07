const myLibrary = ['book1', 'book2'];

// Element Selectors //

const openFormButton = document.getElementById('openFormButton');
const closeFormButton = document.getElementById('closeFormButton');
const overlay = document.getElementById('overlay');
const addBookFormContainer = document.getElementById('addBookFormContainer');
const addBookForm = document.getElementById('addBookForm');

// Functions //

function openAddBookForm() {
    addBookFormContainer.style.transform = 'translate(-50%, -50%) scale(1)';
    overlay.style.display = 'block';
}

function closeAddBookForm() {
    addBookFormContainer.style.transform = 'translate(-50%, -50%) scale(0)';
    overlay.style.display = 'none';
}

function getFormData(form) {
    const formData = new FormData(form);

    for (const pair of formData.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
    }
}

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    for (let i = 0; i <= myLibrary.length; i++) {
        if (myLibrary[i] === undefined) {
            myLibrary[i] = new Book(title, author, pages, read);
            break;
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
    getFormData(e.target);
});

// Test Scripts //

addBookToLibrary('gameofthrones', 'hksomething', 143, true);

console.log(myLibrary[2]);
