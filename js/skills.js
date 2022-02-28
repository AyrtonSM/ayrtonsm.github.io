
var backendLanguages = loadBackendLanguages();
var frontendLanguages = loadFrontendTechnologies();
var databaseLanguages = loadDatabaseTechnologies();
var frameworks = loadFrameworksTechnologies();
var clouds = loadCloudTechnologies();
var packageManagementTechnologies = loadPackageManagementTechnologies();
var packageOtherTechnologies = loadOtherTechnologies();

function loadBackendLanguages(){
    return [
        "Java",
        "PHP",
        "Python",
        "Node.js"
    ];
}

function loadFrontendTechnologies(){
    return [
        "VueJS",
        "Angular",
        "Bootstrap",
        "Materialize",
        "HTML5",
        "CSS3",
        "JQuery"
    ];
}

function loadDatabaseTechnologies(){
    return [
        "MySQL",
        "H2",
        "Hibernate",
        "SQLAlchemy",
        "Doctrine"
    ];
}

function loadFrameworksTechnologies(){
    return [
        "Spring Boot",
        "Symfony",
        "Laravel",
        "Flask",
        "CodeIgniter"
    ];
}

function loadCloudTechnologies(){
    return [
        "AWS EC2",
        "AWS SNS",
        "AWS S3"
    ];
}

function loadPackageManagementTechnologies(){
    return [
        "Composer", 
        "Npm", 
        "Gradle", 
        "Maven"
    ];
}
function loadOtherTechnologies(){
    return [
        "GIT",
        "Data Science",
        "Machine Learning", 
        "Numpy",
        "Pandas",
        "Keras",
        "Tensorflow",
        "C/C++",
        "C#", 
        "Gradle", 
        "Maven",
        "IBM Cloud"
    ];
}

function getTechnologies(){

    return {
        "frontend-languages-list" : frontendLanguages,
        "backend-languages-list" : backendLanguages,
        "database-tools-list" : databaseLanguages,
        "frameworks-list" : frameworks,
        "clouds" : clouds,
        "package-manegement-list" : packageManagementTechnologies,
        "other-list" : packageOtherTechnologies,
    };
  
}

function getSpokenLanguagesWithLevels(){

    return {
        "portuguese" : {
            html_ul_id : "portuguese-level-description-list",
            level : { 
            "speaking" : "Nativo", 
            "written" : "Nativo",
            "reading" : "Nativo",
            "listening" : "Nativo"
            }
        },
        "spanish" : {
            html_ul_id : "spanish-level-description-list",
            level : { 
                "speaking" : "Básico", 
                "written" : "Básico",
                "reading" : "Intermedio",
                "listening" : "Intermedio"
                }
        },
        "english" : { 
            html_ul_id : "english-level-description-list",
            level : { 
                "speaking" : "Advanced", 
                "written" : "Advanced",
                "reading" : "Advanced",
                "listening" : "Advanced"
                }
        },
        "japanese" : { 
            html_ul_id : "japanese-level-description-list",
            level : { 
                "speaking" : "基本", 
                "written" : "基本",
                "reading" : "基本",
                "listening" : "基本"
                }
            }
    };
  
}

function getWorkExperiences(){
    return [
//         {
//             title : "Software Development Manager",
//             company : "Samex LLC",
//             interval : "Sep/2021 - Jan/2022",
//             description : "Responsible for building custom APIs using PHP, Javascript, Python, Java and working with third-party API implementation to create customized software, code review using github and showing advice on client’s software architecture. I’ve also been responsible for architecting and building mainly VueJS, Vuex, Bootstrap frameworks. In regards to databases, I’ve been architecting databases and managing their data."
//         },
        {
            title : "Senior Software Engineer",
            company : "Samex LLC",
            interval : "Sep/2020 - Jan/2022",
            description : "Responsible for building custom APIs using PHP, Javascript, Python, Java and working with third-party API implementation to create customized software, code review using github and showing advice on client’s software architecture. I’ve also been responsible for architecting and building mainly VueJS, Vuex, Bootstrap frameworks. In regards to databases, I’ve been architecting databases and managing their data."
        },
        {
            title : "Programmer Analyst",
            company : "Samex LLC",
            interval : "Sep/2018 - Sep/2020",
            description : "Responsible for making custom APIs and working with third-party API implementation to create customized software, For the front-end, I was also responsible for building the view of the system and working closer to CRMs and CMSs."
        },
        {
            title : "Software Engineer Intern",
            company : "Samex LLC",
            interval : "Apr/2018 - Sep/2018",
            description : "Playing a role in managing applications, making modifications, and enhancements to existing code"
        },
    ];
}


function setLanguageLevelsViews(languageId, level){
    document.getElementById(languageId).innerHTML += "<li> <b>Speaking :</b> "+ level.speaking + "</li>"; 
    document.getElementById(languageId).innerHTML += "<li> <b>Writting :</b> "+ level.written + "</li>"; 
    document.getElementById(languageId).innerHTML += "<li> <b>Reading :</b> "+ level.reading + "</li>"; 
    document.getElementById(languageId).innerHTML += "<li> <b>Listening :</b> "+ level.listening + "</li>"; 
}

function buildSkillsView(techs) {
    for (const [stackId, stackData] of Object.entries(techs)) {
        stackData.forEach(info => {
            document.getElementById(stackId).innerHTML += "<li> "+ info + "</li>"; 
        });
    }
}

function buildExperiencesView(){
    var workExperiences = getWorkExperiences();
    workExperiences.forEach(experience => {
        document.getElementById("work-experience-list").innerHTML += '<div class="col-md-3"> <div class="card" style="width: 18rem; "> <!-- <img class="card-img-top" src="..." alt="Card image cap"> --> <div class="card-body"> <h5 class="card-title"><b>'+ experience.title +'</b></h5> <p class="card-text"><b>Company :</b> '+experience.company +'</p> <p class="card-text"><b>'+ experience.interval +'</b></p></div> </div> </div>';
    });
    
}


function buildLanguagesView() {
    var languages = getSpokenLanguagesWithLevels();

    for (const [language, data] of Object.entries(languages)) {
        var languageId = data.html_ul_id;
        setLanguageLevelsViews(languageId, data.level);
    }
}

function loadViews(){
    buildSkillsView(getTechnologies());
    buildLanguagesView();
    buildExperiencesView();
}
