let myLibrary = [];

window.addEventListener("load", function () {
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length == 0) {
    let book1 = new Book("Robison Crusoe", "Daniel Defoe", "252", true);
    let book2 = new Book(
      "The Old Man and the Sea",
      "Ernest Hemingway",
      "127",
      true
    );
    myLibrary.push(book1, book2); // push both in one call
    // render() is unnecessarily called twice (once during this fun + in the load event listener)
  }
}

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");

//check the right input from forms and if its ok -> add the new book (object in array)
//via Book function and start render function
function submit() {
  if (!title?.value.trim() || !pages?.value.trim()) { // simplify validation
    alert("Please fill all fields!");
    return false;
  }

  let book = new Book(title.value, author.value, pages.value, check.checked);
  myLibrary.push(book); // used wrong array name (library instead of myLibrary)

  // clear input fields
  title.value = "";
  author.value = "";
  pages.value = "";
  check.checked = false;

  render();
  
}

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

function render() {
  const table = document.getElementById("display");
  let rowsNumber = table.rows.length;
  //delete old table
  for (let n = rowsNumber - 1; n > 0; n-- ) {
    table.deleteRow(n);
  }
  //insert updated row and cells
  let length = myLibrary.length;
  for (let i = 0; i < length; i++) {
    const row = table.insertRow(-1);
    row.insertCell(0).innerHTML = myLibrary[i].title;
    row.insertCell(1).innerHTML = myLibrary[i].author;
    row.insertCell(2).innerHTML = myLibrary[i].pages;

    //add and wait for action for read/unread button
    const cell4 = row.insertCell(3);
    let changeBut = document.createElement("button");
    changeBut.id = i;
    changeBut.className = "btn btn-success";
    cell4.appendChild(changeBut);
    let readStatus = "";
    readStatus = myLibrary[i].check ? "Yes" : "No";
    changeBut.innerHTML = readStatus;

    changeBut.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    //add delete button to every row and render again
    const cell5 = row.insertCell(4);
    let delBut = document.createElement("button");
    delBut.id = i + 5;
    cell5.appendChild(delBut);
    delBut.className = "btn btn-warning";
    delBut.innerHTML = "Delete";
    // incorrect event name (clicks instead of click)
    delBut.addEventListener("click", function () {
      alert(`You've deleted title: ${myLibrary[i].title}`);
      myLibrary.splice(i, 1);
      render();
    });
  }
}
