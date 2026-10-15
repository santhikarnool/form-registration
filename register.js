document.getElementById("registrationForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let course = document.getElementById("course").value;

    let gender = document.querySelector(
        'input[name="gender"]:checked'
    ).value;

    let skills = document.querySelectorAll(
        'input[name="skills"]:checked'
    );

    let selectedSkills = [];

    skills.forEach(function(skill) {
        selectedSkills.push(skill.value);
    });

    document.getElementById("result").innerHTML =
        "<h2>Registration Successful!</h2>" +
        "<p><b>Name:</b> " + name + "</p>" +
        "<p><b>Email:</b> " + email + "</p>" +
        "<p><b>Phone:</b> " + phone + "</p>" +
        "<p><b>Gender:</b> " + gender + "</p>" +
        "<p><b>Course:</b> " + course + "</p>" +
        "<p><b>Skills:</b> " +
        (selectedSkills.length
            ? selectedSkills.join(", ")
            : "None") +
        "</p>";

});

document.getElementById("registrationForm")
.addEventListener("reset", function() {
    document.getElementById("result").innerHTML = "";
});