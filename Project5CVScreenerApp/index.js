console.log('Project 5 CV Screener')


const profiles = [

    {
        name: 'Ali junaid',
        age :20,
        language: 'Javascript',
        framework :'React Js',
        image : 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
        name: 'Mansoor',
        age :20,
        language: 'Java',
        framework :'Spring Boot',
        image : 'https://randomuser.me/api/portraits/men/77.jpg'
    }
    ,
    {
        name: 'Sara Nasir',
        age :20,
        language: 'Javascript',
        framework :'Node Js',
        image : 'https://randomuser.me/api/portraits/women/75.jpg'
    },

    {
        name: 'Hassan',
        age :20,
        language: 'Kotlin',
        framework :'no framework',
        image : 'https://randomuser.me/api/portraits/men/76.jpg'
    },

    {
        name: 'Bashir',
        age :20,
        language: 'Python',
        framework :'Flask',
        image : 'https://randomuser.me/api/portraits/men/79.jpg'
    }





]


function profileIterator(profiles){

    arrayIndex = 0;

    return {
        next: function(){
            return arrayIndex <profiles.length ? {
                value: profiles[arrayIndex++],
                done : false

            }: {
                done: true

            }
        }
    };



}

const candidate = profileIterator(profiles);
nextCV();


let nextBtn = document.getElementById('next');
nextBtn.addEventListener('click' , nextCV);

function nextCV(){

    const nextCandidate = candidate.next().value;

    let imageDiv = document.getElementById('image');
    let profileDiv = document.getElementById('profile');
     
    if(nextCandidate !=undefined){

    

    imageDiv.innerHTML = `<img class=" border border-dark" src='${nextCandidate.image}' </img>`;

    profileDiv.innerHTML = `<ul class="list-group">

                        <li class="list-group-item">${nextCandidate.name}</li>
                        <li class="list-group-item">${nextCandidate.age}</li>
                        <li class="list-group-item">Primararily works on ${nextCandidate.language}</li>
                        <li class="list-group-item">uses ${nextCandidate.framework} framework</li>
                      
                    </ul>`;

    }else{
        alert('End of Candidate application');
        window.location.reload();
    }
    


}
