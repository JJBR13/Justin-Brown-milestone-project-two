// Start game 

const optionContainer = document.getElementById('answer-btn')
const startButton = document.getElementById('start-btn')
const selectButtons = optionContainer.getElementsByClassName('op-btn')
const narrationStoryLine = document.getElementById('story-segment')


let currentStoryIndex = 0;
let selectOptions = [];

startButton.addEventListener('click', startGame);

function startGame () {
    startButton.classList.add('hide');
    narrationStoryLine.classList.remove('hide');
    optionContainer.classList.remove('hide');
    
    let index = 0;
    for (let optionBtn of selectButtons) {
        optionBtn.innerHTML = stories[index].answer.option1;
        optionBtn.addEventListener("click", function(event) {
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

function giveOption (selected) {
    selectOptions.push(selected)
    currentStoryIndex += 1 
    showNarrations(stories[currentStoryIndex]);
}

