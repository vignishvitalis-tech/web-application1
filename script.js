/* ===================================================
   QUESTION 5: JAVASCRIPT PROGRAMMING
   =================================================== */

// a) Variables and console.log()
let studentName = "Mary Wanjiku";
let registrationNumber = "CS/001/2024";
let academicProgramme = "Computer Science";

console.log("Student Name: " + studentName);
console.log("Registration Number: " + registrationNumber);
console.log("Academic Programme: " + academicProgramme);

// b) calculateGrade() function
function calculateGrade(score) {
    if (score >= 70 && score <= 100) {
        return "A";
    } else if (score >= 60) {
        return "B";
    } else if (score >= 50) {
        return "C";
    } else if (score >= 40) {
        return "D";
    } else {
        return "E";
    }
}

// c) Call the function with 75 and display the grade using alert()
let grade = calculateGrade(75);
alert("The grade for a score of 75 is: " + grade);


/* ===================================================
   QUESTION 6: DOM MANIPULATION AND EVENT HANDLING
   =================================================== */

// a) Retrieve the registration form
const form = document.getElementById("registrationForm");
const successMessage = document.getElementById("successMessage");
const output = document.getElementById("output");

// Helper functions for validation messages
function showError(inputId, errorId, message) {
    document.getElementById(errorId).textContent = message;
    document.getElementById(inputId).classList.add("invalid");
}

function clearError(inputId, errorId) {
    document.getElementById(errorId).textContent = "";
    document.getElementById(inputId).classList.remove("invalid");
}

/* ===================================================
   QUESTION 7: FORM VALIDATION
   =================================================== */

// b) Email format check
function isValidEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

// a) and b) Validate all fields; returns true only if all are valid
function validateForm(name, regNo, email) {
    let valid = true;

    clearError("fullname", "nameError");
    clearError("regno", "regnoError");
    clearError("email", "emailError");

    if (name === "") {
        showError("fullname", "nameError", "Full name must not be empty.");
        valid = false;
    }

    if (regNo === "") {
        showError("regno", "regnoError", "Registration number must not be empty.");
        valid = false;
    }

    if (email === "") {
        showError("email", "emailError", "Email address must not be empty.");
        valid = false;
    } else if (!isValidEmail(email)) {
        showError("email", "emailError", "Enter a valid email, e.g. name@example.com.");
        valid = false;
    }

    return valid;
}

// b) Event listener for form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop the page from reloading

    // c) Retrieve values from the form
    const name = document.getElementById("fullname").value.trim();
    const regNo = document.getElementById("regno").value.trim();
    const email = document.getElementById("email").value.trim();

    // Q7: validate before accepting the submission
    if (!validateForm(name, regNo, email)) {
        successMessage.hidden = true;
        output.hidden = true;
        return;
    }

    // c) Display the name and registration number on the page
    output.innerHTML =
        "<strong>Student Name:</strong> " + name + "<br>" +
        "<strong>Registration Number:</strong> " + regNo;
    output.hidden = false;

    // d) Display a success message
    successMessage.textContent = "Registration successful! Welcome, " + name + ".";
    successMessage.hidden = false;
});

// Clear messages when the Reset button is clicked
form.addEventListener("reset", function () {
    clearError("fullname", "nameError");
    clearError("regno", "regnoError");
    clearError("email", "emailError");
    successMessage.hidden = true;
    output.hidden = true;
});

/* ===================================================
   QUESTION 7c: TESTING (results appear in the console)
   =================================================== */
console.log("--- Validation tests ---");
console.log("Valid email (mary@example.com):", isValidEmail("mary@example.com")); // true
console.log("Invalid email (mary@com):", isValidEmail("mary@com"));               // false
console.log("Invalid email (mary.example.com):", isValidEmail("mary.example.com")); // false
console.log("Grade for 85:", calculateGrade(85)); // A
console.log("Grade for 65:", calculateGrade(65)); // B
console.log("Grade for 55:", calculateGrade(55)); // C
console.log("Grade for 45:", calculateGrade(45)); // D
console.log("Grade for 30:", calculateGrade(30)); // E