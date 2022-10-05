// Start game 

const optionContainer = document.getElementById('answer-btn')
const startButton = document.getElementById('start-btn')
const selectButtons = optionContainer.getElementsByClassName('op-btn')
const narrationStoryLine = document.getElementById('story-segment')


let currentStoryIndex = 0;
let selectOptions = [];

startButton.addEventListener('click', startGame);

function startGame() {
  startButton.classList.add('hide');
  narrationStoryLine.classList.remove('hide');
  optionContainer.classList.remove('hide');

  advanceStory();
}

function advanceStory(){
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
  console.log(object.narration)
  narrationStoryLine.innerText = object.narration

}

// Narration Typed

// Img pop up 

var images = ["assets/img/illustration/plum3.png", "assets/illustration/strawberry4.png", "assets/illustration/orange5.png"]

function imgPopUp () {
    document.getElementById('images').src = images[0];

    for( i = 0; i < images.length; i++) {
        console.log('images[i]')
    }
}
