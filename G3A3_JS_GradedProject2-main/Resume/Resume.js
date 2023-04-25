let resumes = [];
let filteredResumes = [...resumes];

var idx = 0;
window.onload = (event) => {
  if (localStorage.getItem("userPwd").length !== 0) {
    window.history.pushState(null, "", window.location.href);
    window.onpopstate = function () {
      window.history.pushState(null, "", window.location.href);
    };
  }
  fetch("Data.json")
    .then((response) => response.json())
    .then((data) => {
      resumes = data.resume;
      filteredResumes = [...resumes];

      if (idx === 0) {
        var prevButton = document.getElementById("prev");
        prevButton.classList.add("none");
      }

      document.getElementById("name").textContent =
        filteredResumes[idx].basics.name;
      document.getElementById("applied-position").textContent =
        filteredResumes[idx].basics.AppliedFor;
      document.getElementById("phone").textContent =
        filteredResumes[idx].basics.phone;
      document.getElementById("email").textContent =
        filteredResumes[idx].basics.email;
      document
        .getElementById("linkedIn")
        .setAttribute("href", filteredResumes[idx].basics.profiles.url);
      document.getElementById("linkedIn").textContent =
        filteredResumes[idx].basics.profiles.network;

      document.getElementById("ts-1").textContent =
        filteredResumes[idx].skills.keywords[0];
      document.getElementById("ts-2").textContent =
        filteredResumes[idx].skills.keywords[1];
      document.getElementById("ts-3").textContent =
        filteredResumes[idx].skills.keywords[2];

      document.getElementById("hobby-1").textContent =
        filteredResumes[idx].interests.hobbies[0];
      document.getElementById("hobby-2").textContent =
        filteredResumes[idx].interests.hobbies[1];
      document.getElementById("hobby-3").textContent =
        filteredResumes[idx].interests.hobbies[2];

      document.getElementById("company-name").textContent =
        filteredResumes[idx].work["Company Name"];
      document.getElementById("position").textContent =
        filteredResumes[idx].work.Position;
      document.getElementById("start-date").textContent =
        filteredResumes[idx].work["Start Date"];
      document.getElementById("end-date").textContent =
        filteredResumes[idx].work["End Date"];
      document.getElementById("summary").textContent =
        filteredResumes[idx].work.Summary;

      document.getElementById("project-name").textContent =
        filteredResumes[idx].projects.name + " : ";
      document.getElementById("project-desc").textContent =
        filteredResumes[idx].projects.description;

      document.getElementById("ug-institute").textContent =
        filteredResumes[idx].education.UG.institute + ";";
      document.getElementById("ug-course").textContent =
        filteredResumes[idx].education.UG.course + ",";
      document.getElementById("ug-start-date").textContent =
        filteredResumes[idx].education.UG["Start Date"] + ",";
      document.getElementById("ug-end-date").textContent =
        filteredResumes[idx].education.UG["End Date"] + ",";
      document.getElementById("ug-cgpa").textContent =
        filteredResumes[idx].education.UG.cgpa;

      document.getElementById("pg-institute").textContent =
        filteredResumes[idx].education["Senior Secondary"].institute + ",";
      document.getElementById("pg-cgpa").textContent =
        filteredResumes[idx].education["Senior Secondary"].cgpa;

      document.getElementById("high-school").textContent =
        filteredResumes[idx].education["High School"].institute + ",";
      document.getElementById("high-school-cgpa").textContent =
        filteredResumes[idx].education["High School"].cgpa;

      document.getElementById("internship-company-name").textContent =
        filteredResumes[idx].Internship["Company Name"];
      document.getElementById("internship-position").textContent =
        filteredResumes[idx].Internship.Position;
      document.getElementById("internship-start-date").textContent =
        filteredResumes[idx].Internship["Start Date"];
      document.getElementById("internship-end-date").textContent =
        filteredResumes[idx].Internship["End Date"];
      document.getElementById("internship-summary").textContent =
        filteredResumes[idx].Internship.Summary;

      document.getElementById("achievements-summary").textContent =
        filteredResumes[idx].achievements.Summary;
    })
    .catch((err) => {
      console.log(err);
    });
};

function prev() {
  --idx;
  if (idx <= filteredResumes.length - 2) {
    var nextButton = document.getElementById("next");
    nextButton.classList.remove("none");
  }
  if (idx <= 0) {
    var prevButton = document.getElementById("prev");
    prevButton.classList.add("none");
  } else {
    var prevButton = document.getElementById("prev");
    prevButton.classList.remove("none");
  }
  document.getElementById("name").textContent =
    filteredResumes[idx].basics.name;
  document.getElementById("applied-position").textContent =
    filteredResumes[idx].basics.AppliedFor;
  document.getElementById("phone").textContent =
    filteredResumes[idx].basics.phone;
  document.getElementById("email").textContent =
    filteredResumes[idx].basics.email;
  document
    .getElementById("linkedIn")
    .setAttribute("href", filteredResumes[idx].basics.profiles.url);
  document.getElementById("linkedIn").textContent =
    filteredResumes[idx].basics.profiles.network;

  document.getElementById("ts-1").textContent =
    filteredResumes[idx].skills.keywords[0];
  document.getElementById("ts-2").textContent =
    filteredResumes[idx].skills.keywords[1];
  document.getElementById("ts-3").textContent =
    filteredResumes[idx].skills.keywords[2];

  document.getElementById("hobby-1").textContent =
    filteredResumes[idx].interests.hobbies[0];
  document.getElementById("hobby-2").textContent =
    filteredResumes[idx].interests.hobbies[1];
  document.getElementById("hobby-3").textContent =
    filteredResumes[idx].interests.hobbies[2];

  document.getElementById("company-name").textContent =
    filteredResumes[idx].work["Company Name"];
  document.getElementById("position").textContent =
    filteredResumes[idx].work.Position;
  document.getElementById("start-date").textContent =
    filteredResumes[idx].work["Start Date"];
  document.getElementById("end-date").textContent =
    filteredResumes[idx].work["End Date"];
  document.getElementById("summary").textContent =
    filteredResumes[idx].work.Summary;

  document.getElementById("project-name").textContent =
    filteredResumes[idx].projects.name + " : ";
  document.getElementById("project-desc").textContent =
    filteredResumes[idx].projects.description;

  document.getElementById("ug-institute").textContent =
    filteredResumes[idx].education.UG.institute + ";";
  document.getElementById("ug-course").textContent =
    filteredResumes[idx].education.UG.course + ",";
  document.getElementById("ug-start-date").textContent =
    filteredResumes[idx].education.UG["Start Date"] + ",";
  document.getElementById("ug-end-date").textContent =
    filteredResumes[idx].education.UG["End Date"] + ",";
  document.getElementById("ug-cgpa").textContent =
    filteredResumes[idx].education.UG.cgpa;

  document.getElementById("pg-institute").textContent =
    filteredResumes[idx].education["Senior Secondary"].institute + ",";
  document.getElementById("pg-cgpa").textContent =
    filteredResumes[idx].education["Senior Secondary"].cgpa;

  document.getElementById("high-school").textContent =
    filteredResumes[idx].education["High School"].institute + ",";
  document.getElementById("high-school-cgpa").textContent =
    filteredResumes[idx].education["High School"].cgpa;

  document.getElementById("internship-company-name").textContent =
    filteredResumes[idx].Internship["Company Name"];
  document.getElementById("internship-position").textContent =
    filteredResumes[idx].Internship.Position;
  document.getElementById("internship-start-date").textContent =
    filteredResumes[idx].Internship["Start Date"];
  document.getElementById("internship-end-date").textContent =
    filteredResumes[idx].Internship["End Date"];
  document.getElementById("internship-summary").textContent =
    filteredResumes[idx].Internship.Summary;

  document.getElementById("achievements-summary").textContent =
    filteredResumes[idx].achievements.Summary;
}

function next() {
  ++idx;
  if (idx >= 1) {
    var prevButton = document.getElementById("prev");
    prevButton.classList.remove("none");
  }
  if (idx === filteredResumes.length - 1) {
    var nextButton = document.getElementById("next");
    nextButton.classList.add("none");
  } else {
    var nextButton = document.getElementById("next");
    nextButton.classList.remove("none");
  }
  document.getElementById("name").textContent =
    filteredResumes[idx].basics.name;
  document.getElementById("applied-position").textContent =
    filteredResumes[idx].basics.AppliedFor;
  document.getElementById("phone").textContent =
    filteredResumes[idx].basics.phone;
  document.getElementById("email").textContent =
    filteredResumes[idx].basics.email;
  document
    .getElementById("linkedIn")
    .setAttribute("href", filteredResumes[idx].basics.profiles.url);
  document.getElementById("linkedIn").textContent =
    filteredResumes[idx].basics.profiles.network;

  document.getElementById("ts-1").textContent =
    filteredResumes[idx].skills.keywords[0];
  document.getElementById("ts-2").textContent =
    filteredResumes[idx].skills.keywords[1];
  document.getElementById("ts-3").textContent =
    filteredResumes[idx].skills.keywords[2];

  document.getElementById("hobby-1").textContent =
    filteredResumes[idx].interests.hobbies[0];
  document.getElementById("hobby-2").textContent =
    filteredResumes[idx].interests.hobbies[1];
  document.getElementById("hobby-3").textContent =
    filteredResumes[idx].interests.hobbies[2];

  document.getElementById("company-name").textContent =
    filteredResumes[idx].work["Company Name"];
  document.getElementById("position").textContent =
    filteredResumes[idx].work.Position;
  document.getElementById("start-date").textContent =
    filteredResumes[idx].work["Start Date"];
  document.getElementById("end-date").textContent =
    filteredResumes[idx].work["End Date"];
  document.getElementById("summary").textContent =
    filteredResumes[idx].work.Summary;

  document.getElementById("project-name").textContent =
    filteredResumes[idx].projects.name + " : ";
  document.getElementById("project-desc").textContent =
    filteredResumes[idx].projects.description;

  document.getElementById("ug-institute").textContent =
    filteredResumes[idx].education.UG.institute + ";";
  document.getElementById("ug-course").textContent =
    filteredResumes[idx].education.UG.course + ",";
  document.getElementById("ug-start-date").textContent =
    filteredResumes[idx].education.UG["Start Date"] + ",";
  document.getElementById("ug-end-date").textContent =
    filteredResumes[idx].education.UG["End Date"] + ",";
  document.getElementById("ug-cgpa").textContent =
    filteredResumes[idx].education.UG.cgpa;

  document.getElementById("pg-institute").textContent =
    filteredResumes[idx].education["Senior Secondary"].institute + ",";
  document.getElementById("pg-cgpa").textContent =
    filteredResumes[idx].education["Senior Secondary"].cgpa;

  document.getElementById("high-school").textContent =
    filteredResumes[idx].education["High School"].institute + ",";
  document.getElementById("high-school-cgpa").textContent =
    filteredResumes[idx].education["High School"].cgpa;

  document.getElementById("internship-company-name").textContent =
    filteredResumes[idx].Internship["Company Name"];
  document.getElementById("internship-position").textContent =
    filteredResumes[idx].Internship.Position;
  document.getElementById("internship-start-date").textContent =
    filteredResumes[idx].Internship["Start Date"];
  document.getElementById("internship-end-date").textContent =
    filteredResumes[idx].Internship["End Date"];
  document.getElementById("internship-summary").textContent =
    filteredResumes[idx].Internship.Summary;

  document.getElementById("achievements-summary").textContent =
    filteredResumes[idx].achievements.Summary;
}

function search() {
  let x = document.getElementById("search").value;
  if (x.length === 0) {
    filteredResumes = [...resumes];
  } else {
    filteredResumes = resumes.filter(
      (resume) => resume.basics.AppliedFor.toLowerCase() === x.toLowerCase()
    );
  }

  if (filteredResumes.length === 0) {
    document.getElementById("error").classList.remove("none");
    document.getElementById("resume").classList.add("none");
    document.getElementById("next").classList.add("none");
  } else {
    document.getElementById("error").classList.add("none");
    document.getElementById("resume").classList.remove("none");
    document.getElementById("next").classList.remove("none");

    if (filteredResumes.length === 1) {
      document.getElementById("prev").classList.add("none");
      document.getElementById("next").classList.add("none");
    }

    document.getElementById("name").textContent =
      filteredResumes[idx].basics.name;
    document.getElementById("applied-position").textContent =
      filteredResumes[idx].basics.AppliedFor;
    document.getElementById("phone").textContent =
      filteredResumes[idx].basics.phone;
    document.getElementById("email").textContent =
      filteredResumes[idx].basics.email;
    document
      .getElementById("linkedIn")
      .setAttribute("href", filteredResumes[idx].basics.profiles.url);
    document.getElementById("linkedIn").textContent =
      filteredResumes[idx].basics.profiles.network;

    document.getElementById("ts-1").textContent =
      filteredResumes[idx].skills.keywords[0];
    document.getElementById("ts-2").textContent =
      filteredResumes[idx].skills.keywords[1];
    document.getElementById("ts-3").textContent =
      filteredResumes[idx].skills.keywords[2];

    document.getElementById("hobby-1").textContent =
      filteredResumes[idx].interests.hobbies[0];
    document.getElementById("hobby-2").textContent =
      filteredResumes[idx].interests.hobbies[1];
    document.getElementById("hobby-3").textContent =
      filteredResumes[idx].interests.hobbies[2];

    document.getElementById("company-name").textContent =
      filteredResumes[idx].work["Company Name"];
    document.getElementById("position").textContent =
      filteredResumes[idx].work.Position;
    document.getElementById("start-date").textContent =
      filteredResumes[idx].work["Start Date"];
    document.getElementById("end-date").textContent =
      filteredResumes[idx].work["End Date"];
    document.getElementById("summary").textContent =
      filteredResumes[idx].work.Summary;

    document.getElementById("project-name").textContent =
      filteredResumes[idx].projects.name + " : ";
    document.getElementById("project-desc").textContent =
      filteredResumes[idx].projects.description;

    document.getElementById("ug-institute").textContent =
      filteredResumes[idx].education.UG.institute + ";";
    document.getElementById("ug-course").textContent =
      filteredResumes[idx].education.UG.course + ",";
    document.getElementById("ug-start-date").textContent =
      filteredResumes[idx].education.UG["Start Date"] + ",";
    document.getElementById("ug-end-date").textContent =
      filteredResumes[idx].education.UG["End Date"] + ",";
    document.getElementById("ug-cgpa").textContent =
      filteredResumes[idx].education.UG.cgpa;

    document.getElementById("pg-institute").textContent =
      filteredResumes[idx].education["Senior Secondary"].institute + ",";
    document.getElementById("pg-cgpa").textContent =
      filteredResumes[idx].education["Senior Secondary"].cgpa;

    document.getElementById("high-school").textContent =
      filteredResumes[idx].education["High School"].institute + ",";
    document.getElementById("high-school-cgpa").textContent =
      filteredResumes[idx].education["High School"].cgpa;

    document.getElementById("internship-company-name").textContent =
      filteredResumes[idx].Internship["Company Name"];
    document.getElementById("internship-position").textContent =
      filteredResumes[idx].Internship.Position;
    document.getElementById("internship-start-date").textContent =
      filteredResumes[idx].Internship["Start Date"];
    document.getElementById("internship-end-date").textContent =
      filteredResumes[idx].Internship["End Date"];
    document.getElementById("internship-summary").textContent =
      filteredResumes[idx].Internship.Summary;

    document.getElementById("achievements-summary").textContent =
      filteredResumes[idx].achievements.Summary;
  }
}
