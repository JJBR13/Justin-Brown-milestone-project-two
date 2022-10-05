// Start game 

const optionContainer = document.getElementById('answer-btn')
const startButton = document.getElementById('start-btn')
const selectButtons = optionContainer.getElementsByClassName('op-btn')
const narrationStoryLine = document.getElementById('story-segment')
const instructions = document.getElementById('instructions')

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
