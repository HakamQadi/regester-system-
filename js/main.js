let page = document.body.id

let username = document.getElementById("username")
let email = document.getElementById("email")
let password = document.getElementById("password")
let confirm_password = document.getElementById("confirm_password")
let form_signUp = document.getElementById("form_signUp")



let emailPattern = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
let passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;


form_signUp.addEventListener("submit", (e) => {
    let userNameValid = false;
    let emailValid = false;
    let passValid = false;
    let confirm_passValid = false;

    if (username.value !== "") {
        userNameValid = true;
        console.log("True username")
    }
    if (emailPattern.test(email.value) && email.value !== "") {
        emailValid = true;
        console.log("email true");
    }




    if (password.value === confirm_password.value) {
        if (!passwordPattern.test(password.value) && password.value !== "") {
            passValid = false; // Change to false since the password is not valid
            console.log("Password does not meet the requirements");
        }
        else if (passwordPattern.test(password.value)) {
            passValid = true;
            confirm_passValid = true;
            console.log("Password valid");
        }
        else if (confirm_password.value !== "") {
            confirm_passValid = true;
            console.log("Confirm password true");
        }
        else {
            passValid = false; // Password and confirm password do not match
            console.log("Password and confirm password do not match");
        }
    }

    console.log(userNameValid);
    console.log(emailValid);
    console.log(passValid);
    console.log(confirm_passValid);

    if (
        userNameValid === false ||
        emailValid === false ||
        passValid === false ||
        confirm_passValid === false
    ) {
        e.preventDefault();
    }

})