// Made by Ehab && Nadeen in 24/5/2023
const englishTest = [

    //--------------------- question(1) ------------------------
      {
        question: "Fill in the blank with the correct verb form: She _____ to the store yesterday.",
        options: ["go", "goes", "went", "going"],
        answer: "went"
      },
    //--------------------- question(2) ------------------------
      {
        question: "Choose the correct synonym for 'large':",
        options: ["tiny", "huge", "small", "little"],
        answer: "huge"
      },
    //--------------------- question(3) ------------------------
      {
        question: "Identify the noun in the following sentence: 'The cat chased the mouse.'",
        options: ["chased", "cat", "mouse", "the"],
        answer: "cat"
      },
    //--------------------- question(4) ------------------------
      {
        question: "Which of the following is an example of a compound sentence?",
        options: ["I like to read books.", "John and Mary went to the park.", "She is tall and beautiful.", "The dog barked loudly."],
        answer: "John and Mary went to the park."
      },
    //--------------------- question(5) ------------------------
      {
        question: "Select the correct form of the possessive pronoun to complete the sentence: 'Is this _____ book?'",
        options: ["your", "you're", "yours", "you"],
        answer: "your"
      },
    //--------------------- question(6) ------------------------
      {
        question: "Choose the correctly punctuated sentence:",
        options: [
          "I went to the store, but I forgot to buy milk.",
          "I went to the store but, I forgot to buy milk.",
          "I went to the store but I forgot, to buy milk.",
          "I went to the store but I forgot to buy milk."
        ],
        answer: "I went to the store, but I forgot to buy milk."
      },
    //--------------------- question(7) ------------------------
      {
        question: "Identify the adverb in the following sentence: 'He quickly ran to catch the bus.'",
        options: ["quickly", "ran", "catch", "bus"],
        answer: "quickly"
      },
    //--------------------- question(8) ------------------------
      {
        question: "Which word is a conjunction in the sentence: 'I like both chocolate and vanilla ice cream.'",
        options: ["like", "chocolate", "vanilla", "and"],
        answer: "and"
      },
    //--------------------- question(9) ------------------------
      {
        question: "Fill in the blank with the correct preposition: 'The book is _____ the table.'",
        options: ["in", "on", "at", "over"],
        answer: "on"
      },
    //--------------------- question(10) ------------------------
    
      {
        question: "Choose the correct past participle of the verb 'eat':",
        options: ["eat", "eating", "eats", "eaten"],
        answer: "eaten"
      },
    //--------------------- question(11) ------------------------
      {
        question: "Which of the following is a synonym for 'happy'?",
        options: ["sad", "angry", "joyful", "tired"],
        answer: "joyful"
      },
    //--------------------- question(12) ------------------------
      {
        question: "Identify the correct plural form of 'child':",
        options: ["childs", "childies", "children", "childes"],
        answer: "children"
      },
    //--------------------- question(13) ------------------------
      {
        question: "Choose the correct possessive form of the noun 'boy':",
        options: ["boy's", "boys'", "boys", "boyes"],
        answer: "boy's"
      },
    //--------------------- question(14) ------------------------
      {
        question: "Fill in the blank with the correct form of the verb in parentheses: 'They _____ football every Saturday.'",
        options: ["play", "plays", "played", "playing"],
        answer: "play"
      },
    //--------------------- question(15) ------------------------
      {
        question: "Which of the following sentences is written in passive voice?",
        options: ["John ate the cake.", "The cake was eaten by John.", "John is eating the cake.", "John will eat the cake."],
        answer: "The cake was eaten by John."
      },
    //--------------------- question(16) ------------------------
      {
        question: "Choose the correct form of the verb to complete the sentence: 'She _______ to the party last night.'",
        options: ["go", "goes", "went", "going"],
        answer: "went"
      },
    //--------------------- question(17) ------------------------
      {
        question: "Identify the correct comparative form of the adjective 'good':",
        options: ["gooder", "more good", "goodest", "better"],
        answer: "better"
      },
    //--------------------- question(18) ------------------------
    {
        question: "Fill in the blank with the correct article: 'I saw _____ interesting movie last night.'",
        options: ["a", "an", "the", "no article needed"],
        answer: "an"
      },
    //--------------------- question(19) ------------------------
      {
        question: "Choose the correct spelling:",
        options: ["occurence", "ocurrence", "occurrence", "ocurrense"],
        answer: "occurrence"
      },
    //--------------------- question(20) ------------------------
      {
        question: "Identify the indirect object in the following sentence: 'She gave me a gift.'",
        options: ["gave", "me", "a", "gift"],
        answer: "me"
      },
    //--------------------- question(21) ------------------------
      {
        question: "Which of the following is an example of a coordinating conjunction?",
        options: ["and", "because", "although", "however"],
        answer: "and"
      },
    //--------------------- question(22) ------------------------
      {
        question: "Select the correct form of the verb to complete the sentence: 'They _______ the exam yesterday.'",
        options: ["passes", "passing", "pass", "passed"],
        answer: "passed"
      },
    //--------------------- question(23) ------------------------
      {
        question: "Identify the adverbial phrase in the sentence: 'She sang with joy.'",
        options: ["She sang", "with joy", "sang with", "joy"],
        answer: "with joy"
      },
    //--------------------- question(24) ------------------------
      {
        question: "Choose the correct form of the pronoun to complete the sentence: '_______ going to the party tonight?'",
        options: ["Whose", "Who's", "Whom", "Who"],
        answer: "Who"
      },
    //--------------------- question(25) ------------------------
      {
        question: "Which of the following is a collective noun?",
        options: ["cat", "team", "house", "car"],
        answer: "team"
      },
    //--------------------- question(26) ------------------------
      {
        question: "Fill in the blank with the correct form of the verb in parentheses: 'The sun _______ in the east.'",
        options: ["rise", "rises", "rose", "risen"],
        answer: "rises"
      },
    //--------------------- question(27) ------------------------
      {
        question: "Identify the correct possessive form of the noun 'child':",
        options: ["childs'", "child's", "childrens'", "childs"],
        answer: "child's"
      },
    //--------------------- question(28) ------------------------
      {
        question: "Choose the correct form of the adjective to complete the sentence: 'She is the _______ person I know.'",
        options: ["happy", "happier", "happiest", "more happy"],
        answer: "happiest"
      },
    //--------------------- question(29) ------------------------
      {
        question: "Select the correct plural form of 'ox':",
        options: ["oxes", "oxen", "oxs", "oxies"],
        answer: "oxen"
      },
    //--------------------- question(30) ------------------------
      {
        question: "Fill in the blank with the correct preposition: 'She lives _______ New York City.'",
        options: ["in", "on", "at", "by"],
        answer: "in"
      }
    ];
    // {
    //     question: "Fill in the blank with the correct preposition: 'She lives _______ New York City.'",
    //     options: ["in", "on", "at", "by"],
    //     answer: "in"
    //   }

//random



  const english_ten_Random=[];
  const maxQuestions = 15; 
 while (english_ten_Random.length < maxQuestions) {

  const randomQuestion = Math.floor(Math.random() * englishTest.length);
  if (!english_ten_Random.includes(englishTest[randomQuestion])) {
      english_ten_Random.push(englishTest[randomQuestion]);
  }
}

console.log(english_ten_Random);

const totalQuestions = 15;
let index=0;
let correct_answers=0;
let button_submit_english=document.getElementById("button-eng");
let container_Q = document.getElementById("ques_container");
let container_A=document.getElementById("answe-contaier");
let answerPlusQuestion_user=[];
let timer_english=document.getElementById("timer_english_exam");
// 
let question_display;
let correct_answer ;
let Selected_answer;
// let random_Question=english_ten_Random[index];
const average = correct_answers / totalQuestions;
const accuracyPercentage = (average * 100).toFixed(2);

let timeLeft = localStorage.getItem('timeLeft_english') || (20 * 60); 

const countdown = setInterval(function() {
if (timeLeft <= 0) {
  clearInterval(countdown);

  window.location.href = '../index.html';
  
} else {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  // console.log(minutes + ' minutes ' + seconds + ' seconds remaining.');
  timer_english.innerHTML=`
<p class="circle_english p-3 ">${minutes}:${seconds}</p>
`;
localStorage.setItem('timeLeft_english', timeLeft);
  timeLeft--;
}
}, 1000);

//  the landing page(first question ) of quiz english

container_Q.innerHTML=`
  <div class="row row_hederquestion">
  <div class="col-11 d-flex justify-content-center align-items-center">
      <p class="h5 question_cont border-bottom ml-4" >Question 1/15</p>
  </div>
  <div class="col-1 arrow p-0 me-auto d-flex justify-content-end">
      <img src="../assets/img/Arrow.svg" alt="">
  </div>
</div>
<div class="row justify-content-center mt-3">
  <img src="../assets/img/photo.svg" alt="" class="image_question">
</div>
<div class="row mt-1">
  <p class="h5 question_ d-flex justify-content-center align-items-center p-5 " >${english_ten_Random[index].question}</p>
</div>
  `;
//(first answer)
container_A.innerHTML=`
<div class="form-check mt-4 mb-2 form-check1 check_english ">
                      <input class="form-check-input " type="radio"  name="option-${index}" id="exampleRadios1" value="${english_ten_Random[index].options[0]}" onclick="checkValue(value)">
                      <label class="form-check-label" for="exampleRadios1">
                       <span>A.</span>${english_ten_Random[index].options[0]}
                      </label>
                    </div>
                    <div class="form-check mt-4 mb-1 check_english">
                      <input class="form-check-input" type="radio" name="option-${index}" id="exampleRadios2" value="${english_ten_Random[index].options[1]}" onclick="checkValue(value)">
                      <label class="form-check-label" for="exampleRadios2">
                      <span>B.</span> ${english_ten_Random[index].options[1]}
                      </label>
                    </div>
                    <div class="form-check mt-4 mb-1 check_english">
                    <input class="form-check-input" type="radio" name="option-${index}" id="exampleRadios3" value="${english_ten_Random[index].options[2]}" onclick="checkValue(value)">
                    <label class="form-check-label" for="exampleRadios3">
                    <span>B.</span> ${english_ten_Random[index].options[2]}
                    </label>
                  </div>
                    <div class="form-check mt-4 mb-1 form-check1 check_english">
                      <input class="form-check-input" type="radio"  name="option-${index}" id="exampleRadios4" value="${english_ten_Random[index].options[3]}" onclick="checkValue(value)" >
                      <label class="form-check-label" for="exampleRadios4">
                        <span>D.</span>  ${english_ten_Random[index].options[3]}
                      </label>
                    </div>
`;

const Radios = container_A.querySelectorAll(`input[name="option-${index}"]`);
Radios.forEach(radio => {
radio.addEventListener("click", () => {
  let question_display = english_ten_Random[index-1].question;
  let correct_answer = english_ten_Random[index-1].answer;
  let selected_answer = radio.value;
  let alreadyCorrect = answerPlusQuestion_user.some(obj => obj.question === question_display && obj.selected === correct_answer);
  // Check if the selected answer matches the correct answer
  if (selected_answer === correct_answer && !alreadyCorrect) {
    correct_answers++;
  }
  let obj_user_choose = { question: question_display, selected: selected_answer, answer: correct_answer };
  answerPlusQuestion_user.push(obj_user_choose);
});
});

 console.log(correct_answers);
 console.log(answerPlusQuestion_user);
 console.log(index);
 console.log("the average"+ accuracyPercentage);
//  localStorage.setItem(`user_answer${index}`, JSON.stringify(answerPlusQuestion_user));
//  localStorage.setItem(`average${index}`,accuracyPercentage+"%");
let questionRandom = 2;

index++; 
// 1-14 question 

  
  button_submit_english.addEventListener("click",()=>{

    container_Q.innerHTML=`
    <div class="row row_hederquestion">
    <div class="col-11 d-flex justify-content-center align-items-center">
        <p class="h5 question_cont border-bottom ml-4" >Question ${questionRandom}/15</p>
    </div>
    <div class="col-1 arrow p-0 me-auto d-flex justify-content-end">
        <img src="../assets/img/Arrow.svg" alt="">
    </div>
</div>
<div class="row justify-content-center mt-3">
    <img src="../assets/img/photo.svg" alt="" class="image_question">
</div>
<div class="row mt-1">
    <p class="h5 question_ d-flex justify-content-center align-items-center p-5 " >${english_ten_Random[index].question}</p>
</div>
    `;
  container_A.innerHTML=`
  <div class="form-check mt-4 mb-2 form-check1 check_english">
  <input class="form-check-input input_check answers" type="radio" name="option-${index}" id="exampleRadios1"  value="${english_ten_Random[index].options[0]}" onclick="checkValue(value)" >
  <label class="form-check-label " for="exampleRadios1">
   <span>A.</span>${english_ten_Random[index].options[0]}
  </label>
</div>
<div class="form-check mt-4 mb-1 check_english">
  <input class="form-check-input answers" type="radio" name="option-${index}" id="exampleRadios2"  value="${english_ten_Random[index].options[1]}" onclick="checkValue(value)">
  <label class="form-check-label" for="exampleRadios2">
  <span>B.</span> ${english_ten_Random[index].options[1]}
  </label>
</div>
<div class="form-check mt-4 mb-1 check_english">
  <input class="form-check-input answers" type="radio"  name="option-${index}" id="exampleRadios3"  value="${english_ten_Random[index].options[2]}" onclick="checkValue(value)">
  <label class="form-check-label" for="exampleRadios3">
   <span>C.</span> ${english_ten_Random[index].options[2]}
</div>
<div class="form-check mt-4 mb-1 form-check1 answers check_english">
  <input class="form-check-input answers" type="radio"  name="option-${index}" id="exampleRadios4"  value="${english_ten_Random[index].options[3]}" onclick="checkValue(value)" >
  <label class="form-check-label" for="exampleRadios4">
    <span>D.</span>  ${english_ten_Random[index].options[3]}
  </label>
</div>
  `;
  const Radios=container_A.querySelectorAll(`input[name="option-${index}"]`);
    Radios.forEach(radio =>{
     radio.addEventListener("click",()=>{
      let question_display=  english_ten_Random[index-1].question;
       let correct_answer =english_ten_Random[index-1].answer;
       let Selected_answer =radio.value;
       let alreadyCorrect = answerPlusQuestion_user.some(obj => obj.question === question_display && obj.selected === correct_answer);
       if (Selected_answer === correct_answer && !alreadyCorrect) {
        correct_answers++;
       }
       let obj_user_choose ={ question:question_display , selected: Selected_answer , answer: correct_answer};
       answerPlusQuestion_user.push(obj_user_choose);
      
     })
   });

    console.log(correct_answers);
    console.log(answerPlusQuestion_user);
    index++;
    questionRandom = questionRandom + 1;

    const average = correct_answers / totalQuestions;
    const accuracyPercentage = (average * 100).toFixed(2);
    localStorage.setItem(`average${index-1}`,accuracyPercentage+"%");

  console.log("the average of "+ accuracyPercentage);
  localStorage.setItem(`user_answer${index-1}`, JSON.stringify(answerPlusQuestion_user));
});
 
function checkValue(v) {
}




