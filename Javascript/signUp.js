let getSignUp_BTN = document.getElementsByClassName("SignUp_BTN")[0];
let getLogInSection2 = document.getElementsByClassName("Log_In_Section")[0];
let getLogInPage2 = document.getElementsByClassName("Log_In_Page")[0];
let getSignUpSection = document.getElementsByClassName("Sign_Up_Section")[0];
let getSignUpPage = document.getElementsByClassName("Sign_Up_Page")[0];
let getCreateAccountBtn = document.getElementsByClassName("Create_Account_BTN")[0]

getSignUp_BTN.addEventListener("click", function (event) {
    event.preventDefault()

    getLogInSection2.style.display = "none"
    getLogInPage2.style.display = "none"
    getSignUpSection.style.display = "flex"
    getSignUpPage.style.display = "block"
})
getCreateAccountBtn.addEventListener("click", function () {
    getUsername_SignUp = document.getElementsByClassName("Username_SignUp")[0].value;
    getPassword_SignUp = document.getElementsByClassName("Password")[1].value;
    getConfirmPass = document.getElementsByClassName("Password")[2].value;
    document.body.style.overflowY = "visible"
    if (getUsername_SignUp != "" && getPassword_SignUp != "" && getConfirmPass != "") {

        getSignUpPage.style.display = "none"
        getSignUpSection.style.display = "none"
    }

    let createIntro2 = document.createElement('span');
    createIntro2.innerHTML = `Hey, welcome to Greenofy, ${getUsername_SignUp}!!`
    getLogo.appendChild(createIntro2)
})