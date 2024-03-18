console.log('welcome to notes app');
// localStorage.clear();
showNotes();

let addBtn = document.getElementById('addBtn');
// localStorage.clear();

addBtn.addEventListener("click", function () {

    let addTxt = document.getElementById('addTxt');
    let addTitle = document.getElementById('addTitle');

    let notes = localStorage.getItem('notes');
    let titles = localStorage.getItem('titles');
    if (notes == null && titles==null) {
        notesObj = [];
        titlesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
        titlesObj = JSON.parse(titles);
    }
    notesObj.push(addTxt.value);
    titlesObj.push(addTitle.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    localStorage.setItem("titles" , JSON.stringify(titlesObj));
    addTxt = "";
    addTitle  = "";
    console.log(notesObj);
    showNotes();


}

);
// function showNotes() {
//     let notes = localStorage.getItem("notes");
//     if (notes == null) {
//       notesObj = [];
//     } else {
//       notesObj = JSON.parse(notes);
//     }
//     let html = "";
//     notesObj.forEach(function(element, index) {
//       html += `
//               <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
//                       <div class="card-body">
//                           <h5 class="card-title">Note ${index + 1}</h5>
//                           <p class="card-text"> ${element}</p>
//                           <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
//                       </div>
//                   </div>`;
//     });
//     let notesElm = document.getElementById("notes");
//     if (notesObj.length != 0) {
//       notesElm.innerHTML = html;
//     } else {
//       notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
//     }
//   }

function showNotes() {

    let notes = localStorage.getItem("notes"); 
    let titles  = localStorage.getItem("titles");
  //getting elements from localstorage
    if (notes == null && titles==null) {
        notesObj = [];
        titlesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);   // if notesojb exista then getting notes from local stotage and assigning it to notes obj
        titlesObj  =JSON.parse(titles);
    }

    let html = "";

    console.log(titlesObj);

    let titleArray = titlesObj;

   

    notesObj.forEach(function(element , index ){


        console.log(titlesObj);
        // using html 
        html += `  
        <div class=" noteCard my-2 mx-2 card" style="width: 18rem;">

        <div class="card-body">
            <h5 class="card-title">${titleArray[index]}</h5>
            <p class="card-text">${element}</p>
            <button id="${index}" onclick="deleteNotes(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
    </div>`;

    
    });
    let notesDiv = document.getElementById("notes") ;

    if(notesObj.length!=0 && titlesObj!=null){
       notesDiv.innerHTML += html; 

    }else{
        notesDiv.innerHTML = `No Note to show. Add a Note to get a display`;
    }
}


function deleteNotes(index){

    let notes = localStorage.getItem("notes");
    let titles = localStorage.getItem("titles");
    if(notes==null && titles==null){
        notesObj = [];
        titlesObj  = [];
    }else{
        notesObj = JSON.parse(notes);
        titlesObj = JSON.parse(titles);
    }
    notesObj.splice(index , 1);
    titlesObj.splice(index , 1);
    localStorage.setItem("notes" , JSON.stringify(notesObj));
    localStorage.setItem("titles" , JSON.stringify(titlesObj));
    showNotes();

}

let search = document.getElementById("searchTxt");

// search.addEventListener("input", function(){

//     let inputVal = search.value.toLowerCase();
//     console.log('Input event fired!', inputVal);
//     let noteCards = document.getElementsByClassName('noteCard');
//     Array.from(noteCards).forEach(function(element){
//         let cardTxt = element.getElementsByTagName("p")[0].innerText;
//         // console.log(cardTxt);
//         if(cardTxt.includes(inputVal)){
//             element.style.display = "block";
//         }
//         else{
//             element.style.display = "none";
//         }
//         console.log(cardTxt);
//     })
// })
 
// adding  a search functionality to search 
search.addEventListener("input" , function(){


    let searchVal = search.value;
    let cardnote = document.getElementsByClassName("noteCard");
    Array.from(cardnote).forEach(function(element){

    let text = element.getElementsByTagName("h5")[0].innerText;
    if(text.includes(searchVal)){
        element.style.display = "block";
    }
    else{
        element.style.display = "none";

    }

    })

});

//     // notes.forEach(function (element, index) {

//     //     html += `
//     //             <div class=" noteCard my-2 mx-2 card" style="width: 18rem;">

//     //             <div class="card-body">
//     //                 <h5 class="card-title">Note ${index + 1}</h5>
//     //                 <p class="card-text">${element}</p>
//     //                 <a href="#" class="btn btn-primary">Delete Note</a>
//     //             </div>
//     //         </div>`;
       

//     // });

//     // let notesDiv = document.getElementById('notes') ;

//     // if(notes.length!=0){
//     //    notesDiv.innerHTML = html; 

//     // }
 





// }




