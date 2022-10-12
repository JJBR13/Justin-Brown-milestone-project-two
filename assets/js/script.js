const optionContainer = document.getElementById('option-btn')
const startButton = document.getElementById('start-btn')
const selectButtons = optionContainer.getElementsByClassName('op-btn')
const narrationStoryLine = document.getElementById('story-segment')
const instructions = document.getElementById('instructions')
const imageArea = document.getElementById('image-div')
const defaultStart = document.getElementById('default')
const storyHouse = document.getElementById('housing1')
const storyHouse2 = document.getElementById('housing2')

let currentStoryIndex = 0;
let selectOptions = [];

startButton.addEventListener('click', startStory);

function onLoad() {
  defaultStart.classList.remove('hide')
}

window.onload = onLoad();

// Start game  

function startStory() {
  startButton.classList.add('hide');
  narrationStoryLine.classList.remove('hide');
  optionContainer.classList.remove('hide');
  instructions.classList.add('hide');
  answerButtons.classList.add('hide');
  storyHouse.classList.remove('hide');

  advanceStory();
}

function advanceStory(){
    if(currentStoryIndex < stories.length){
        showNarrations(stories[currentStoryIndex]);
        selectButtons[0].innerHTML = stories[currentStoryIndex].answer.option1;
        //typeText();
        imgSelect();
        currentStoryIndex++; 
    } else{
        // have the code to program the finish
        startFiveQuestions()
    }
    
}

// Displaying start Story 

function showNarrations(object) {
  narrationStoryLine.innerText = object.narration;
}

// Typing Text 

let txt = stories[0].narration; // text to type
let textPosition = 0;
let speed = 100;

typeText = () => {
  narrationStoryLine.innerHTML = txt.substring(0, textPosition);
  // incrementing position
  if (textPosition++ != txt.length)
  setTimeout(typeText, speed);
}

// Images pop up on click 

function imgSelect() {
  let image_element = document.getElementById('image_id')

  if (selectButtons[0].innerText == "Caterpillar") {
    image_element.src = '/assets/img/illustration/0.png'
    imageArea.classList.remove('hide')
  } else if (selectButtons[0].innerText == "Ate ONE apple. But he was still hungry.") {
    image_element.src = '/assets/img/illustration/1.png'
    imageArea.classList.remove('hide')
  } else if (selectButtons[0].innerText == "Ate TWO pairs. But he was still hungry.") {
    image_element.src = '/assets/img/illustration/2.png'
    imageArea.classList.remove('hide')
  } else {
      console.log('nope')
  }
  }


// Questions 

const startQuestionButton = document.getElementById('start-game')
const nextButton = document.getElementById('next-btn')
const questionDisplay = document.getElementById('questions')
const answerButtons = document.getElementById('answer-btn')
const gameContainer = document.getElementById('game-container')
const thankYou = document.getElementById('thank_you')
const backButton = document.getElementById('toStart')

let shuffleQuestions, currentQuestion

nextButton.addEventListener('click', () => {
  currentQuestion++
  setNextQuestion()
})

 function startFiveQuestions() {
  gameContainer.classList.remove('hide')
  storyHouse.classList.add('hide')
  imageArea.classList.add('hide')
  
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
  orignalState()
  showQuestion(shuffleQuestions[currentQuestion])
}

function showQuestion(question) {
  questionDisplay.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('ans-btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', chooseAnswer)
    answerButtons.appendChild(button)
  })
}

function orignalState () {
  nextButton.classList.add('hide')

  // Checking if there is a child within answerButtons, if not removing it. 
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild)
  }
}

function chooseAnswer(event) {
  const buttonSelected = event.target
  const correct = buttonSelected.dataset.correct
  // creating array from buttons, allowing loop
  Array.from(answerButtons.children).forEach(button => { 
    setResult(button, button.dataset.correct)
  })
  if (shuffleQuestions.length > currentQuestion + 1) {
  nextButton.classList.remove('hide')
  } else {
    // End of questions 
    gameContainer.classList.add('hide')
    storyHouse2.classList.remove('hide')
    thankYou.classList.remove('hide')
    backButton.classList.remove('hide')
  }
}

function setResult (i, correct) {
  clearSetResult(i) 
  if (correct) {
    i.classList.add('correct')
    //remove hover function??
  } else {
    i.classList.add('wrong')
    //remove hover function??
  }
}

function clearSetResult (i) {
    i.classList.remove('correct')
    i.classList.remove('wrong')
}

backButton.addEventListener('click', backToStart);

function backToStart() {
  startButton.classList.remove('hide');
  instructions.classList.remove('hide');
  storyHouse2.classList.add('hide')
  console.log(defaultStart);
}