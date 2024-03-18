console.log('tut 50');


const userName = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const dialog = document.getElementById('dialog');
// const success = document.getElementById('success');
// const failure = document.getElementById('failure');

let isNameValid = false;
let isEmailValid = false;
let isPhNumValid = false;

 dialog.innerHTML = '';

// $('#failure').hide();
// $('#success').hide();


console.log(name, email, phone);


userName.addEventListener('blur', () => {


    let regex = /^[a-zA-Z]([a-z0-9A-Z]){2,10}$/;

    let str = userName.value;

    if (regex.test(str)) {

        console.log('userName is valid')
        isNameValid = true;
        userName.classList.remove('is-invalid');


    } else {
        console.log('userName is not valid')
        isNameValid = false;
        userName.classList.add('is-invalid');



    }

}

);
email.addEventListener('blur', () => {


    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;;

    let str = email.value;

    if (regex.test(str)) {

        console.log('email is valid')
        isEmailValid = true;
        userName.classList.remove('is-invalid');


    } else {
        console.log('email is not valid')
        isEmailValid = false;
        userName.classList.add('is-invalid');



    }


}

);

phone.addEventListener('blur', () => {

    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    if (regex.test(str)) {

        console.log('phone num is valid')
        isPhNumValid = true;
        userName.classList.remove('is-invalid');


    } else {

        console.log('phone num is not valid')
        isPhNumValid = false;

        userName.classList.add('is-invalid');


    }


}

);

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {

    e.preventDefault();

    if (isNameValid && isEmailValid && isPhNumValid) {

        console.log('your response has been submitted');
        // success.classList.add('show');

        // // failure.classList.remove('show');
        // // $('#failure').alert('close');


        // $('#failure').hide();
        // $('#success').show();

        dialog.innerHTML = `    <div id = "success" class="alert alert-success alert-dismissible fade show " role="alert">
                                    <strong>Congrats!</strong> You travelling request has been submitted succesfully
                                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>`;


    } else {
        console.log('your response has not been submitted');

        dialog.innerHTML = `<div  id = "failure" class="alert alert-danger alert-dismissible fade show " role="alert">
                                    <strong>Error!</strong> You travelling request has not been submitted ;)
                                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>`;

        // failure.classList.add('show');
        // // success.classList.remove('show');
        // // $('#success').alert('hide');
        // $('#success').hide();
        // $('#failure').show();
    }



}


);