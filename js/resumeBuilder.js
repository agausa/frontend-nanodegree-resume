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
}

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
}

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
}

var projects = {
  "projects":[
    {
      "title":"VOD 6.0",
      "dates":"2015",
      "description":"New Injest Process",
      "images":"http://www.bluepointstudios.com/images/aroundworld.png",
    },
    {
      "title":"VOD 7.0",
      "dates":"2016",
      "description":"Replace SeaChange Playback",
      "images":"http://www.bluepointstudios.com/images/ridejumper.png",
    }
  ]
}

projects.display = function()
{
  for(var project in projects.projects)
  {
    $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[project].title));
    $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[project].dates));
    $(".project-entry:last").append(HTMLprojectDescription.replace("%data%",  projects.projects[project].description));
    $(".project-entry:last").append(HTMLprojectImage.replace("%data%",  projects.projects[project].images));
  }
}

//__________________________________________________

bio.display = function()
{
  $("#header").prepend(HTMLheaderRole.replace("%data%", 'Web Developer'));
  $("#header").prepend(HTMLheaderName.replace("%data%", 'Igor Dagayev'));

  var contact = HTMLcontactGeneric.replace("%contact%", bio.contactInfo);
  $("#topContacts").append(contact.replace("%data%", bio.name));

  // top contact
  $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
  $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
  $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
  $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

  $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
  $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
  $("#header").append(HTMLskillsStart);

  for(var skill in bio.skills) {
    $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
  }

  //bottom contacts
  $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
  $("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
  $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
  $("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
}

//__________________________________________________

work.display = function()
{
  $("#workExperience").append(HTMLworkStart);
  for(job in work.jobs)
  {
      var workingPlacePlusTitle = HTMLworkEmployer.replace("%data%", work.jobs[job].employer) +
        HTMLworkTitle.replace("%data%",  work.jobs[job].title);
      $(".work-entry:last").append(workingPlacePlusTitle);
      $(".work-entry:last").append(HTMLworkDates.replace("%data%",  work.jobs[job].dates));
      $(".work-entry:last").append(HTMLworkLocation.replace("%data%",  work.jobs[job].location));
      $(".work-entry:last").append(HTMLworkDescription.replace("%data%",  work.jobs[job].description));
  }
}

//__________________________________________________

education.display = function()
{
  $("#education").append(HTMLschoolStart);
  for(school in education.schools)
  {
    var namePlusDgree = HTMLschoolName.replace("%data%", education.schools[school].name) +
      HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    $(".education-entry:last").append(namePlusDgree);
    $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
    $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
    $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors));
  }

  $(".education-entry:last").append(HTMLonlineClasses);
  for(online in education.onlineCourses)
  {
    var titlePlusSchool = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title) +
      HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
    $(".education-entry:last").append(titlePlusSchool);
    $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates));
    $(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[online].url));
  }
}

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
