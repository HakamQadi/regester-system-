let page = document.body.id


// set data to local strage
function setData(key, value) {
    let data = []
    for (i = 0; i < value.length; i++) {
        data[i] =
        {
            username: value[i].username,
            email: value[i].email,
            pass: value[i].password,
            firstName: value[i].firstName,
            lastName: value[i].lastName,
            date: value[i].date,
        }
    }
    // console.log(data)
    localStorage.setItem(key, JSON.stringify(data))
}

// get data from local strage
function getData() {
    return JSON.parse(localStorage.getItem("user"))
}





if (page == "signup_page") {
    let username = document.getElementById("username")
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    let confirm_password = document.getElementById("confirm_password")
    let form_signUp = document.getElementById("form_signUp")

    let index = 0;
    let userInfo = [];

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
        else if (
            userNameValid === true &&
            emailValid === true &&
            passValid === true &&
            confirm_passValid === true
        ) {
            userInfo[index] = {
                username: username.value,
                email: email.value,
                password: password.value,
                confirm_password: confirm_password.value,
            }
            setData("user", userInfo)
            index++;
        }

    })


}
else if (page == "login_page") {
    let username = document.getElementById("username")
    let password = document.getElementById("password")
    let form_login = document.getElementById("form_login")

    form_login.addEventListener("submit", (e) => {
        let userNameValid = false;
        let passValid = false;

        let get_data = getData()
        // console.log(get_data[0].email);
        for (let i = 0; i < get_data.length; i++) {
            if (get_data[i].username == username.value && get_data[i].pass == password.value) {
                console.log("موجود")

                // sessionStorage.setItem("user_firstName", get_data[i].firstName)
                // sessionStorage.setItem("user_lastName", get_data[i].lastName)
                // sessionStorage.setItem("user_date", get_data[i].date)

                // window.open("https://www.google.com","_blank");
                // window.location.href = "profile.html"

                break;
            }

            else if (get_data[i].username !== username.value || get_data[i].pass !== password.value) {
                // check another user
                continue;
            }
            else {
                console.log("مش موجود")
                break;
            }


            // dataNew[i] =
            // {
            //     username: text,
            //     email: `${text}@email`,
            //     pass: `${text}_password`
            // }
        }


    })
}
else {
}