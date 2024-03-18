
// my api key
// initialize the news variables
let apiKey = 'af6b59d486ca48d1946263da1332f51c';
let source = 'bbc-news';

console.log('Project 3');

// get the accordian containers
let newsAccordian = document.getElementById('newsAccordian');
// create a ajax get requests
const xhr = new XMLHttpRequest();

xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

// what to do when response is ready
xhr.onload = function () {

    if (this.status === 200) {
        let json = JSON.parse(this.responseText);  // using a property response text to get text  from desired location given while opening the xhr object
        let article = json.articles;
        let newsHtml = "";
        console.log(article);
        article.forEach(function (element, index) {

            console.log(element);





            let news = ` <div class="accordion" id="newsAccordian">
                                <div class="accordion-item">
                                <h2 class="accordion-header" id="heading${index}">
                                    <button class="accordion-button  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                                    <b>Breaking News ${index + 1}: </b> ${element['title']}
                                    </button>
                                </h2>
                                <div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="heading${index}" data-bs-parent="#newsAccordian">
                                    <div class="accordion-body">
                                    ${element['content']} <a href="${element['url']}" target="_blank">Read More Here </a>
                                    </div>
                                </div>
                                </div>

                        </div>`;

            newsHtml += news;

        });
        newsAccordian.innerHTML = newsHtml;



    } else {
        console.log('Oops! Error occured');
    }

}

// send the request 

xhr.send();

