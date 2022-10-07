// Start game 

const optionContainer = document.getElementById('option-btn')
const startButton = document.getElementById('start-btn')
const selectButtons = optionContainer.getElementsByClassName('op-btn')
const narrationStoryLine = document.getElementById('story-segment')
const instructions = document.getElementById('instructions')
const imageArea = document.getElementById('image-div')

let currentStoryIndex = 0;
let selectOptions = [];
let narrationType = 0;

startButton.addEventListener('click', startStory);

function startStory() {
  startButton.classList.add('hide');
  narrationStoryLine.classList.remove('hide');
  optionContainer.classList.remove('hide');
  instructions.classList.add('hide')

  advanceStory();
}

function advanceStory(){
    narrationType = 0;
    if(currentStoryIndex < stories.length){
        showNarrations(stories[currentStoryIndex]);
        selectButtons[0].innerHTML = stories[currentStoryIndex].answer.option1;
        typeText();
        imgSelect();
        currentStoryIndex++; 
    }
    else{
        // have the code to program the finish
        startFiveQuestions()
    }
    
}

// Displaying start Story 

function showNarrations(object) {
  //console.log(object.narration)
  narrationStoryLine.innerText = object.narration;
}

// Typing Text 

var txt = ['hello']; // text to type
var textPosition = 0;
var speed = 150;

typeText = () => {
  narrationStoryLine.innerHTML = txt[0].substring(0, textPosition);

  // incrementing position
  
  if (textPosition++ != txt[0].length)
  setTimeout(typeText, speed);
}

// Images pop up on click 

function imgSelect() {

  let image_element = document.getElementById('image_id')

    if (selectButtons[0].innerText == "Ate ONE apple") {
      image_element.src = '/assets/img/illustration/apple1.png'
      imageArea.classList.remove('hide')
      //console.log('image_element')
    } else if (selectButtons[0].innerText == "Ate TWO pairs") {
      image_element.src = '/assets/img/illustration/plum3.png'
      imageArea.classList.remove('hide')
    } else {
        console.log('nope')
    }
}


// Questions 

const startQuestionButton = document.getElementById('start-game')
const questionDisplay = document.getElementById('questions')
const answerButtons = document.getElementById('answer-btn')

let shuffleQuestions, currentQuestion

 function startFiveQuestions() {
  narrationStoryLine.classList.add('hide')
  optionContainer.classList.add('hide')
  
  // // hiding answer buttons when instructions show 

  // answerButtons.classList.add('hide')

  startQuestionButton.classList.remove('hide')
  questionDisplay.classList.remove('hide')
}


function startGame(){
 answerButtons.classList.remove('hide')
 startQuestionButton.classList.add('hide')
 shuffleQuestions = questions.sort(() => Math.random() - .5)
 currentQuestion = 0;
 setNextQuestion()
}


function setNextQuestion() {
  showQuestion(shuffleQuestions[currentQuestion])
}

function showQuestion(question) {
  questionDisplay.innerText = question.question
}

function selectAnswer() {

}

const questions = [
  { 
    question: 'On Tuesday what did Mr. Caterpillar eat?',
    answers: [ 
      { text: 'Pears', correct: true},
      { text: 'oranges', correct: false}
    ]
  }
]