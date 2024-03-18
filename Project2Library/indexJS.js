console.log('indexJS');

function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;


}

// Add Display Constructor

function Display() {

}
Display.prototype.add = function (book) {

    let tablebody = document.getElementById('tableBody');
    let uiString = `
                    <tr>
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                   </tr>`
        ;

    tablebody.innerHTML = uiString;

}

Display.prototype.clear = function () {

    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();

}
Display.prototype.validate = function (book) {
    
    if(book.name.length < 2 || book.author.length <2){
        return false;
    }else{
        return true;
    }


}
Display.prototype.show = function(type , displayMessage){
    let message = document.getElementById('message');
    message.innerHTML = `

                        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                        <strong>Message: </strong> ${displayMessage}.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                        `
            setTimeout(() => {
                message.innerHTML = '';
            
            }, 2000);


}

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
        display.clear();
        display.show('success' , 'Book has been added succesfully');

    }
    else {
        display.show('danger' , 'Soory! You cannot add this Book');
    }
    e.preventDefault();

}
