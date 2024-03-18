console.log('hello');
// localStorage.clear();

// to be continued.... some issues with delete
class Display {

    add(book) {
    
        let tablebody = document.getElementById('tableBody');
        let uiString = `
                        <tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    
                       </tr>`
            ;

        tablebody.innerHTML = uiString;
        // this.updateUI();


    }
    clear() {

        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();

    }
    validate(book) {

        if (book.name.length < 2 || book.author.length < 2) {
            return false;
        } else {
            return true;
        }


    }
    show(type, displayMessage) {
        let message = document.getElementById('message');
        message.innerHTML = `
    
                            <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Message: </strong> ${displayMessage}.
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                            `
        setTimeout(() => {
            message.innerHTML = '';

        }, 5000);


    }
    addToLocalStorage(book){

        let bookList;

        let bookKey = localStorage.getItem('book');
        if (bookKey == null) {
            bookList = [];
        }
        else {
            bookList = JSON.parse(bookKey);
        }
        bookList.push(book);
        localStorage.setItem("book", JSON.stringify(bookList));


    }
    updateUI() {

        let uiString = "";

        let bookList;

        let bookKey = localStorage.getItem('book');
        if (bookKey == null) {
            bookList = [];
        }
        else {
            bookList = JSON.parse(bookKey);
        }

        if(bookList!=null){

            bookList.forEach(function (element , index) {

                let tablebody = document.getElementById('tableBody');
                uiString = `
                            <tr>
                            <td>${element.name}</td>
                            <td>${element.author}</td>
                            <td>${element.type}</td>
                            <td><button id="${index}" onClick="deleteBook(this.id)" type="submit" style="height:30px; width:90px; text-align:centre; font-size:11px;" class="btn btn-primary">Delete Book</button> </td>
                            
                           </tr>`
                    ;
    
                tablebody.innerHTML += uiString;
    
            });

        }


    }


}


class Book {
    constructor(name, author, type) {

        this.name = name;
        this.author = author;
        this.type = type;

    }
}

let display = new Display();
display.updateUI();




let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {

    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;

    let type;

    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = programming.value;
    }


    let book = new Book(name, author, type);

    console.log(book);

    let display = new Display();

    if (display.validate(book)) {

        display.add(book);
        display.addToLocalStorage(book);    
        display.clear();
        display.show('success', 'Book has been added succesfully');

    }
    else {
        display.show('danger', 'Soory! You cannot add this Book');
    }
    e.preventDefault();

}

function deleteBook(index){

    let bookList;

    let bookKey = localStorage.getItem('book');
    if (bookKey == null) {
        bookList = [];
    }
    else {
        bookList = JSON.parse(bookKey);
    }
    bookList.splice(index ,1);
    localStorage.setItem("book" , JSON.stringify(bookList));
    display.updateUI();

}