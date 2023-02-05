const myLibrary = ['book1', 'book2'];

const library = document.getElementById('library');

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

function clearEmptyLibrary() {
    library.innerHTML = '';
}

addBookToLibrary('gameofthrones', 'hksomething', 143, true);

console.log(myLibrary[2]);
