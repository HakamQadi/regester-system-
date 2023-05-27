let techScoreContainer=document.getElementById("tech_score")
let englishScoreContainer=document.getElementById("english_score")

let techScore=localStorage.getItem("score_tech")
let englishScore=localStorage.getItem("score_english")


techScoreContainer.innerHTML=
`<h1 style="margin-top: 4rem">Technical Score</h1>
<div><span>${techScore}</span></div>`

englishScoreContainer.innerHTML=
`<h1 style="margin-top: 4rem">English Score</h1>
<div><span>${englishScore}</span></div>`