function generateResume() {

    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let DOB = document.getElementById("dob").value;

    let email = document.getElementById("email").value;
    let phone = document.getElementById("number").value;
    let adress = document.getElementById("resarea").value;

    let profsum = document.getElementById("prosum").value;

    let Iname = document.getElementById("Iname").value;
    let Pyear = document.getElementById("YP").value;
    let project = document.getElementById("Pro").value;

    let course = document.querySelector('input[name="course"]:checked');
    let year = document.querySelector('input[name="Year"]:checked');

    let skills = document.querySelectorAll('input[name="skills"]:checked');

    let courseValue = "Not selected";
    let yearValue = "Not selected";
    let skillsValue = "";

    if (course != null) {
        courseValue = course.value;
    }

    if (year != null) {
        yearValue = year.value;
    }

    if (skills.length == 0) {
        skillsValue = "Not selected";
    } 
    else {
        for (let i = 0; i < skills.length; i++) {
            skillsValue = skillsValue + skills[i].value + ", ";
        }
    }

    let display = document.getElementById("Displayform");

    display.innerHTML = `
        <h2>RESUME</h2>

        <h3>Personal Details</h3>
        <p>Name: ${fname} ${lname}</p>
        <p>Date Of Birth: ${DOB}</p>

        <h3>Contact Information</h3>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Address: ${adress}</p>

        <h3>Profile Summary</h3>
        <p>${profsum}</p>

        <h3>Education</h3>
        <p>Course: ${courseValue}</p>
        <p>Current Year: ${yearValue}</p>
        <p>Institution: ${Iname}</p>
        <p>Passing Out Year: ${Pyear}</p>

        <h3>Skills</h3>
        <p>${skillsValue}</p>

        <h3>Projects</h3>
        <p>${project}</p>
    `;
}

function resetResume() {
    document.getElementById("Displayform").innerHTML = "";
}

function toggleTheme(){
    let body = document.body;
    body.classList.toggle("dark-mode");
    let themeToggleBtn = document.getElementById("DT");
    if (body.classList.contains("dark-mode")) {
        DT.innerHTML = "☀️ Light Mode";

        localStorage.setItem("theme" , "Dark");
    } 
    else {
        DT.innerHTML = "🌙 Dark Mode";

        localStorage.setItem("theme" , "Light");
    }


}

document.addEventListener("DOMContentLoaded", function() {

    let body = document.getElementById("BP");
    let button = document.getElementById("DT");

    let savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {

        body.classList.add("dark-mode");
        button.innerHTML = "☀️ Light Mode";

    }
    else {

        body.classList.remove("dark-mode");
        button.innerHTML = "🌙 Dark Mode";

    }

});