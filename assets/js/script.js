// Start game 

const optionContainer = document.getElementById('answer-btn')
const startButton = document.getElementById('start-btn')
const selectButton = document.getElementsByClassName('op-btn')
const narrationStoryLine = document.getElementById('story-segment')


let currentStoryIndex = 0;
let selectOptions = [];

startButton.addEventListener('click', startGame);

function startGame () {
    startButton.classList.add('hide');
    narrationStoryLine.classList.remove('hide');
    optionContainer.classList.remove('hide');
}

// Displaying start Story 

function showNarrations(object) {
    console.log(object.narration1)
    narrationStoryLine.innerText = object.narration
}

// showNarrations(stories[0]);
// now not working as changed optionButtons to selectButton
function showOptions(object) {
    for (let answer in object.answer) {
        const button = document.createElement('button')
        button.classList.add('op-btn')
        optionButtons.appendChild(button)
        console.log(object.answer[answer])
        button.innerText = object.answer[answer]
    }

    showOptions(stories[0]);
}

function giveOption (selected) {
    selectOptions.push(selected)
    currentStoryIndex += 1 
    showNarrations(stories[currentStoryIndex]);
}
for (let optionBtn of selectButton) {
    optionBtn.addEventListener("click", function(event) {
        const id = event.target.getAttribute("data-id")
        giveOption(id)
    })
}

showNarrations(stories[currentStoryIndex]);



