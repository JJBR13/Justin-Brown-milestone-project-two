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

  // looping through answer.option1 on both btns 

  let index = 0;
  for (let optionBtn of selectButtons) {
    optionBtn.innerHTML = stories[index].answer.option1;
    optionBtn.addEventListener("click", function (event) {
      const id = event.target.getAttribute("data-id")
      giveOption(id)
    })
    index++
  }
  showNarrations(stories[currentStoryIndex]);
}

// Displaying start Story 

function showNarrations(object) {
  console.log(object.narration)
  narrationStoryLine.innerText = object.narration

}

// Narration Typed

// Options

function giveOption(selected) {
  selectOptions.push(selected)
  currentStoryIndex += 1
  showNarrations(stories[currentStoryIndex]);
}

// Img pop up 

var images = ["assets/img/illustration/plum3.png", "assets/illustration/strawberry4.png", "assets/illustration/orange5.png"]

function imgPopUp () {
    document.getElementById('images').src = images[0];

    for( i = 0; i < images.length; i++) {
        console.log('images[i]')
    }
}
