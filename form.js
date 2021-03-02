
const form = document.querySelector("#form");
const fullName = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const message = document.querySelector("#message");
const button = document.querySelector("button");

form.addEventListener("submit", validateForm);
form.addEventListener("submit", submitForm);

function submitForm() {
    event.preventDefault();
    if (checkLength(fullName.value, 0) && checkLength(subject.value, 9) && checkLength(address.value, 24) && validateEmail(email.value)) {
        message.innerHTML = `<div class="message">Your message has been sent</div>`;
        form.reset();
    }
}

function validateForm(event) {
    event.preventDefault();

    if (checkLength(fullName.value, 0)) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }
    if (checkLength(subject.value, 9)) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }
    if (checkLength(address.value, 24)) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }
    if (validateEmail(email.value)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }
}

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}
