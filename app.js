const myLibrary = ['book1', 'book2'];

const addBookForm = document.getElementById('addBookFormContainer');
const overlay = document.getElementById('overlay');
const openFormButton = document.getElementById('openFormButton');
const closeFormButton = document.getElementById('closeFormButton');

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

function openAddBookForm() {
    addBookForm.style.transform = 'translate(-50%, -50%) scale(1)';
    overlay.style.display = 'block';
}

function closeAddBookForm() {
    addBookForm.style.transform = 'translate(-50%, -50%) scale(0)';
    overlay.style.display = 'none';
}

addBookToLibrary('gameofthrones', 'hksomething', 143, true);

console.log(myLibrary[2]);

openFormButton.addEventListener('click', () => {
    openAddBookForm();
});

closeFormButton.addEventListener('click', () => {
    closeAddBookForm();
});
