let page = document.body.id;
// console.log(page+" page");

if (page == "english_test") {
    let englishScoreContainer = document.getElementById("english_score")
    let englishScore = localStorage.getItem("score_english")

    englishScoreContainer.innerHTML =
        `<h1 style="margin-top: 4rem">English Score</h1>
    <div><span>${englishScore}</span></div>`

}

if (page == "tech_test") {
    let techScoreContainer = document.getElementById("tech_score")
    let techScore = localStorage.getItem("score_tech")

    techScoreContainer.innerHTML =
        `<h1 style="margin-top: 4rem">Technical Score</h1>
    <div><span>${techScore}</span></div>`
}

if (page == "personal_info") {
    // console.log(page);
    let firstName = document.getElementById("firstname_input")
    let lastName = document.getElementById("lastname_input")
    let nextBtn = document.getElementById("next_btn")

    nextBtn.addEventListener("click", () => {
        console.log("asd");
        localStorage.setItem("firstName", firstName.value)
        localStorage.setItem("lastName", lastName.value)

    })

  
}


if (page=="edu_info") {
    let eduLvl=document.getElementById("edu_lvl")
    let major=document.getElementById("major")
    let nextBtn = document.getElementById("next_btn")
    
    nextBtn.addEventListener("click",()=>{
        localStorage.setItem("major",major.value)
        localStorage.setItem("edu_lvl",eduLvl.value)
    })
}


if (page=="contact") {
    let country=document.getElementById("country")
    let city=document.getElementById("city")
    let phone=document.getElementById("phone")
    let finishBtn = document.getElementById("finish_btn")
    
    finishBtn.addEventListener("click",()=>{
        // console.log("object");
        localStorage.setItem("address",country.value +","+city.value)
        localStorage.setItem("phone",phone.value)
    })

}


if (page == "score") {
    let firstNameContainer=document.getElementById("first_name")
    let firstname=localStorage.getItem("firstName")
    firstNameContainer.innerHTML=
    `<p>First Name : ${firstname}</p>`


    let lastNameContainer=document.getElementById("last_name")
    let lastname=localStorage.getItem("lastName")
    lastNameContainer.innerHTML=
    `<p>Last Name : ${lastname}</p>`


    let eduLvlContainer=document.getElementById("education_level")
    let eduLevel=localStorage.getItem("edu_lvl")
    eduLvlContainer.innerHTML=
    ` <p>Educational level : ${eduLevel}</p>`

    let majorContainer =document.getElementById("major")
    let major=localStorage.getItem("major")
    majorContainer.innerHTML=
    `<p>Majoring in : ${major}</p>`

    let addressContainer=document.getElementById("address")
    let phoneContainer=document.getElementById("phone")
    let phone=localStorage.getItem("phone")
    let address=localStorage.getItem("address")
    addressContainer.innerHTML=
    `<p>Address : ${address}</p>`
    phoneContainer.innerHTML=
    `<p>Phone : ${phone}</p>`


}



