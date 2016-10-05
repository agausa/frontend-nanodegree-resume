/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name" : "Igor Dagayev",
    "role" : "Director",
    "contacts" : {
      "mobile" : "(631) 418 6898",
      "email" : "idagayev@cablevision.com",
      "github" : "agausa.hithub.com",
      "location":"Blue Point, NY"
    },
    "contactInfo" : "Please contact:",
    "biopic" : "http://www.bluepointstudios.com/blogg/iGor1.jpg",
    //"biopic" : "images/fry.jpg",
    "welcomeMessage" : "Welcome to my lovely page",
    "skills" : ["C", "C++", "C#", "JS", "PHP", "Objective C"]
};

var education = {
  "schools": [
    {
      "name":"Donetsk State Univercity",
      "location": "Donetsk, Ukraine",
      "degree":"Master",
      "majors":["Microwave radiphysics", "Computer Science"],
      "dates":"1984 - 1991",
      "url":"http://donnu.ru/phys"
    },
    {
      "name":"Saint Petersburg Electrotechnical University",
      "location": "St. Petersburg, Russia",
      "degree":"Master",
      "majors":["Microelectronics"],
      "dates":"1983 - 1984",
      "url":"http://www.eltech.ru"
    }
  ],
  "onlineCourses": [
    {
      "title":"Front-End Web Developer Nanodegree",
      "school":"Udacity",
      "dates":"2016 - 2016",
      "url":"http://www.udacity.com"
    }
  ]
};

var work = {
  "jobs":[
    {
      "employer":"Cablevision",
      "title":"Director",
      "location":"Bethpage, NY USA",
      "dates":"2009 - 2016",
      "description":"Video on Demand"
    },
    {
      "employer":"ClickIt Inc.",
      "title":"Senior Software Developer",
      "location":"Hauppauge, NY USA",
      "dates":"2006 - 2009",
      "description":"Video security systems"
    },
    {
      "employer":"Philips",
      "title":"Senior Software Developer",
      "location":"New York, NY USA",
      "dates":"2005 - 2006",
      "description":"Mobile development"
    }
  ]
};

// let's reuse the same images, but dfifferent sequeince
var projects = {
  "projects":[
    {
      "title":"VOD 6.0",
      "dates":"2015",
      "description":"New Injest Process",
      "images":["http://www.bluepointstudios.com/images/aroundworld.png", "http://www.bluepointstudios.com/images/ridejumper.png"],
    },
    {
      "title":"VOD 7.0",
      "dates":"2016",
      "description":"Replace SeaChange Playback",
      "images":["http://www.bluepointstudios.com/images/ridejumper.png", "http://www.bluepointstudios.com/images/aroundworld.png"],
    }
  ]
};

projects.display = function()
{
  for(var project in projects.projects)
  {
    $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[project].title));
    $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[project].dates));
    $(".project-entry:last").append(HTMLprojectDescription.replace("%data%",  projects.projects[project].description));

    for(var image in projects.projects[project].images) {
      $(".project-entry:last").append(HTMLprojectImage.replace("%data%",  projects.projects[project].images[image]));
    }
  }
};

//__________________________________________________

bio.display = function()
{
  $("#header").prepend(HTMLheaderRole.replace("%data%", 'Web Developer'));
  $("#header").prepend(HTMLheaderName.replace("%data%", 'Igor Dagayev'));

  var contact = HTMLcontactGeneric.replace("%contact%", bio.contactInfo);
  $("#topContacts").append(contact.replace("%data%", bio.name));

  // top and bottom contacts
  $("#topContacts, #footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
  $("#topContacts, #footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
  $("#topContacts, #footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
  $("#topContacts, #footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

  $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
  $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
  $("#header").append(HTMLskillsStart);

  bio.skills.forEach(function(skill){
    $("#skills").append(HTMLskills.replace("%data%", skill));
  });
};

//__________________________________________________

work.display = function()
{
  $("#workExperience").append(HTMLworkStart);

  work.jobs.forEach(function(job){
    var workingPlacePlusTitle = HTMLworkEmployer.replace("%data%", job.employer) +
      HTMLworkTitle.replace("%data%",  job.title);
    $(".work-entry:last").append(workingPlacePlusTitle);
    $(".work-entry:last").append(HTMLworkDates.replace("%data%",  job.dates));
    $(".work-entry:last").append(HTMLworkLocation.replace("%data%",  job.location));
    $(".work-entry:last").append(HTMLworkDescription.replace("%data%",  job.description));
  });
};

//__________________________________________________

education.display = function()
{
  $("#education").append(HTMLschoolStart);

  education.schools.forEach(function(school){
    var namePlusDgree = HTMLschoolName.replace("%data%", school.name) +
      HTMLschoolDegree.replace("%data%", school.degree);
    $(".education-entry:last").append(namePlusDgree);
    $(".education-entry:last").append(HTMLschoolDates.replace("%data%", school.dates));
    $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", school.location));
    $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", school.majors));
  });

  $(".education-entry:last").append(HTMLonlineClasses);
  education.onlineCourses.forEach(function(online){
    var titlePlusSchool = HTMLonlineTitle.replace("%data%", online.title) +
      HTMLonlineSchool.replace("%data%", online.school);
    $(".education-entry:last").append(titlePlusSchool);
    $(".education-entry:last").append(HTMLonlineDates.replace("%data%", online.dates));
    $(".education-entry:last").append(HTMLonlineURL.replace("%data%", online.url));
  });
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
