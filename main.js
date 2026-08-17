const button = document.getElementById("clickMe");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  message.textContent = "Button clicked!";
});

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  // take params, create a book then store it in the array
}