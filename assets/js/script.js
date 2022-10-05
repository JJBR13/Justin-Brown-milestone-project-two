// Start game 

const optionContainer = document.getElementById('answer-btn')
const startButton = document.getElementById('start-btn')
const selectButtons = optionContainer.getElementsByClassName('op-btn')
const narrationStoryLine = document.getElementById('story-segment')
const instructions = document.getElementById('instructions')
const imageArea = document.getElementById('image-div')

let currentStoryIndex = 0;
let selectOptions = [];
let narrationType = 0;

startButton.addEventListener('click', startGame);
// selectButtons.addEventListener('click', imgSelect);

function startGame() {
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
        imgSelect();
        currentStoryIndex++; 
    }
    else{
        // have the code to program the finish
    }
    
}

// Displaying start Story 

function showNarrations(object) {
  //console.log(object.narration)
  narrationStoryLine.innerText = object.narration;
}

// Images pop up on click 

function imgSelect() {
    
    if (selectButtons[0].innerText == "Ate ONE apple") {
      let image_element = document.getElementById('image_id')

      image_element.src = '/assets/img/illustration/apple1.png'
      imageArea.classList.remove('hide')
      console.log('image_element')
    } else {
        console.log('nope')
    }
}
