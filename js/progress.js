const circles = document.querySelectorAll(".circle"),
  progressBar = document.querySelector(".indicator"),
  buttons = document.querySelectorAll("button");
  let nextBtn = document.getElementById("next") 
  var URLarry = ['html/personal-info.html', 'html/Testenglish.html', 'html/Testtechnical.html', 'html/score.html'];
let currentStep = 1;
// function that updates the current step and updates the DOM
const updateSteps = (e) => {
  // update current step based on the button clicked
  if (e.target.id === "next") {
    currentStep++;
  nextBtn.innerText = "Next"

  for (let index = 0; index < URLarry.length; index++) {
    if (currentStep === index + 2) {
      window.open(URLarry[index], "_blank")
    } 
  }  
  
  } else {
    currentStep--;
  }
  
  // loop through all circles and add/remove "active" class based on their index and current step
  circles.forEach((circle, index) => {
    circle.classList[`${index < currentStep ? "add" : "remove"}`]("active");
  });
  // update progress bar width based on current step
  progressBar.style.width = `${((currentStep - 1) / (circles.length - 1)) * 100}%`;
  // check if current step is last step or first step and disable corresponding buttons
  if (currentStep === circles.length) {
    buttons[1].disabled = true;
  } else if (currentStep === 1) {
    buttons[0].disabled = true;
  } else {
    buttons.forEach((button) => (button.disabled = false));
  }
};
// add click event listeners to all buttons
buttons.forEach((button) => {
  button.addEventListener("click", updateSteps);
});