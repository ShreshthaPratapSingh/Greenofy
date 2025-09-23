let getLogInSection = document.getElementsByClassName("Log_In_Section")[0];
let getLogInPage = document.getElementsByClassName("Log_In_Page")[0];
let getBody = document.getElementsByTagName("body");
let getLogin_BTN = document.getElementsByClassName("Submit_BTN")[0];
let getLogo = document.getElementsByClassName("logo")[0];

setTimeout(() => {

    getLogInSection.style.display = "flex"
    getLogInPage.style.display = "block"
    if (getLogInPage.style.display == "block" && getLogInSection.style.display == "flex") {
        getLogInPage.scrollIntoView({
            behavior: "smooth",
            block: "center"
        })
    }
    document.body.style.overflowY = "hidden"
    getLogin_BTN.addEventListener("click", function (event) {
        event.preventDefault();

        let getUsername = document.getElementsByClassName("Username")[0].value;
        let getPassword = document.getElementsByClassName("Password")[0].value;
        let getRole = document.getElementById("userPanel").value;

        if (getUsername != "" && getPassword != "" && getRole != "Who are you?") {
            getLogInPage.style.display = "none"
            getLogInSection.style.display = "none"
            document.body.style.overflowY = "visible"

            let createIntro = document.createElement('span');
            createIntro.innerHTML = `Hey, welcome to Greenofy, ${getUsername}!!`
            getLogo.appendChild(createIntro)
        }
    })


}, 3000);
let getMiniGames = document.getElementsByClassName("Mini_Games")[0];
let getMain = document.getElementsByTagName("main")[0];
let getFooter = document.getElementsByTagName("footer")[0]
let getMini_Games = document.getElementsByClassName("Mini-Games")[0];
let getHomeTab = document.getElementsByClassName("Home_Tab")[0];

getMiniGames.addEventListener("click", function(){
    getMain.style.display = "none";
    getFooter.style.display = "none";
    getMini_Games.style.display = "flex";
})
getHomeTab.addEventListener("click", function(){
    getMini_Games.style.display = "none"
    getMain.style.display = "block"
    getFooter.style.display = "block"
})