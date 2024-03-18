console.log('tut 63 Project');


// let parameterBox = document.getElementById('parametersBox');
// parameterBox.style.display = 'none';


// let jsonBtn = document.getElementById('jsonRadio');

// jsonBtn.addEventListener('click', () => {

//     document.getElementById('parametersBox').style.display = 'none';
//     document.getElementById('requestJsonBox').style.display = 'block';
// });

// let paramsBtn = document.getElementById('paramsRadio');

// paramsBtn.addEventListener('click', () => {
//     document.getElementById('requestJsonBox').style.display = 'none';
//     document.getElementById('parametersBox').style.display = 'block';

// });

// function getElementFromString(string) {
//     let newDiv = document.createElement('div');
//     newDiv.innerHTML = string;

//     return newDiv.firstElementChild;
// }

// let addParamKey = 0;

// let addParamBtn = document.getElementById('addParam');
// addParamBtn.addEventListener('click', () => {

//     let param = document.getElementById('params');
//     let string = `  <div id="parametersBox">
//     <div class="form-row">
//         <label for="url" class="col-sm-2 col-form-label">Parameter ${addParamKey + 2}</label>
//         <div class="col-md-4">
//             <input type="text" class="form-control" id="parameterKey${addParamKey + 2}}" placeholder="Enter Parameter ${addParamKey + 2} Key">
//         </div>
//         <div class="col-md-4">
//             <input type="text" class="form-control" id="parameterValue${addParamKey + 2}" placeholder="Enter Parameter ${addParamKey + 2} Value">
//         </div>
//         <button id="addParam" class="btn btn-primary">-</button>
//     </div>
//     <div id="params"></div>
// </div>`;

//     let element = getElementFromString(string);

//     param.appendChild(element);
//     let deleteParams = document.getElementsByClassName('deleteParams');
//     for (item of deleteParams) {
//         item.addEventListener('dblclick', (e) => {

//             e.target.parentElement.remove();

//         }

//         );


//     }
//     addParamKey++;
//     console.log('ParamNo' , addParamKey);


// });

// let submitBtn = document.getElementById('submit');
// submitBtn.addEventListener('click' , ()=>{

//     document.getElementById('responsePre').value = "Please wait. Fetching Response...";

//     let url =document.getElementById('url').value;

//     let requestType = document.querySelector("input[name='requestType']:checked").value;
//     let contentType = document.querySelector("input[name='contentType']:checked").value;

//     if (contentType == 'params') {
//         data = {};
//         let i =0;

//         while(i<addParamKey+1){
//             console.log('parm key inside loop', addParamKey);
//                 if (document.getElementById('parameterKey' + (i + 1)) != undefined) {
//                     let key = document.getElementById('parameterKey' + (i + 1)).value;
//                     let value = document.getElementById('parameterValue' + (i + 1)).value;
//                     data[key] = value; 
//                 }

//                 i++;

//         }
//         // for (let i = 0; i < addParamKey + 1; i++) {
//         //     console.log('parm key inside loop', addParamKey);
//         //     if (document.getElementById('parameterKey' + (i + 1)) != undefined) {
//         //         let key = document.getElementById('parameterKey' + (i + 1)).value;
//         //         let value = document.getElementById('parameterValue' + (i + 1)).value;
//         //         data[key] = value; 
//         //     }
//         // }
//         data = JSON.stringify(data);
//     }
//     else {
//         data = document.getElementById('requestJsonText').value;
//     }
//     console.log(url);
//     console.log(requestType);
//     console.log(contentType);
//     console.log(data);

//     if(requestType=='GET'){
//         fetch(url , {
//             method:'GET'
//         }
//         ).then(
//             response => response.text()
//         ).then(
//             (text) =>{
//                 document.getElementById('responsePrism').innerHTML = text;
//                 Prism.highlightAll();
//             }

//         );

//     }else{

//         fetch(url , {
//             method:'POST',
//             body: data,
//             headers: {
//                 "Content-type": "application/json; charset=UTF-8"
//               }  
//         }
//         ).then(
//             response => response.text()
//         ).then(
//             (text) =>{
//                 document.getElementById('responsePrism').innerHTML = text;
//                 Prism.highlightAll();
//             }

//         );

//     }

// });

//...................................................................................


// Utility functions:
// 1. Utility function to get DOM element from string
function getElementFromString(string) {
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild;
}

// Initialize no of parameters
let addedParamCount = 0;

// Hide the parameters box initially
let parametersBox = document.getElementById('parametersBox');
parametersBox.style.display = 'none';

// If the user clicks on params box, hide the json box
let paramsRadio = document.getElementById('paramsRadio');
paramsRadio.addEventListener('click', () => {
    document.getElementById('requestJsonBox').style.display = 'none';
    document.getElementById('parametersBox').style.display = 'block';
})

// If the user clicks on json box, hide the params box
let jsonRadio = document.getElementById('jsonRadio');
jsonRadio.addEventListener('click', () => {
    document.getElementById('requestJsonBox').style.display = 'block';
    document.getElementById('parametersBox').style.display = 'none';
})

// If the user clicks on + button, add more parameters
let addParam = document.getElementById('addParam');
addParam.addEventListener('click', () => {
    let params = document.getElementById('params');
    // we have added 2 in assParamCount so that our second paramerter box starts with index two cz intially its value is 0 and we want the first parameter box to have a value of 1
    let string = `<div class="form-row my-2">
                    <label for="url" class="col-sm-2 col-form-label">Parameter ${addedParamCount + 2}</label>
                    <div class="col-md-4">
                        <input type="text" class="form-control" id="parameterKey${addedParamCount + 2}" placeholder="Enter Parameter ${addedParamCount + 2} Key">
                    </div>
                    <div class="col-md-4">
                        <input type="text" class="form-control" id="parameterValue${addedParamCount + 2}" placeholder="Enter Parameter ${addedParamCount + 2} Value">
                    </div>
                    <button class="btn btn-primary deleteParam"> - </button>
                    </div>`;
    // Convert the element string to DOM node
    let paramElement = getElementFromString(string);
    params.appendChild(paramElement);
    // Add an event listener to remove the parameter on clicking - button
    let deleteParam = document.getElementsByClassName('deleteParam');
    for (item of deleteParam) {
        item.addEventListener('click', (e) => {
            // TODO: add a confirmation box to confirm parameter deletion
            e.target.parentElement.remove();
        })
    }
    addedParamCount++;
})

// If the user clicks on submit button
let submit = document.getElementById('submit');
submit.addEventListener('click', () => {
    // Show please wait in the response box to request patience from the user
    // document.getElementById('responseJsonText').value = "Please wait.. Fetching response...";
    document.getElementById('responsePrism').innerHTML = "Please wait.. Fetching response...";

    // Fetch all the values user has entered
    let url = document.getElementById("url").value;
    let requestType = document.querySelector("input[name='requestType']:checked").value;
    let contentType = document.querySelector("input[name='contentType']:checked").value;
 
    // If user has used params option instead of json, collect all the parameters in an object
    if (contentType == 'params') {
        data = {};
        for (let i = 0; i < addedParamCount + 1; i++) {
            if (document.getElementById('parameterKey' + (i + 1)) != undefined) {
                let key = document.getElementById('parameterKey' + (i + 1)).value;
                let value = document.getElementById('parameterValue' + (i + 1)).value;
                data[key] = value; 
            }
        }
        data = JSON.stringify(data);
    }
    else {
        data = document.getElementById('requestJsonText').value;
    }

    // Log all the values in the console for debugging
    console.log('URL is ', url);
    console.log('requestType is ', requestType);
    console.log('contentType is ', contentType);
    console.log('data is ', data);

    // if the request type is get, invoke fetch api to create a post request
    if (requestType=='GET'){
        fetch(url, {
            method: 'GET',   
        })
        .then(response=> response.text())
        .then((text) =>{
            // document.getElementById('responseJsonText').value = text;
            document.getElementById('responsePrism').innerHTML = text;
            Prism.highlightAll();
        });
    }

    else{
        fetch(url, {
            method: 'POST', 
            body: data,
            headers: {
                "Content-type": "application/json; charset=UTF-8"
              }  
        })
        .then(response=> response.text())
        .then((text) =>{
            // document.getElementById('responseJsonText').value = text;
            document.getElementById('responsePrism').innerHTML = text;
            Prism.highlightAll();
        });

    }


});

