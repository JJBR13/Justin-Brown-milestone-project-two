//* Start game *// 

const startButton = document.getElementById('start-btn')
const narrationStoryLine = document.getElementById('story-segment')
const optionButtons = document.getElementById('answer-btn')

startButton.addEventListener('click', startGame);

function startGame () {
    startButton.classList.add('hide');
    narrationStoryLine.classList.remove('hide');
    optionButtons.classList.remove('hide');
}

/*
function showNarrations(stories) {
    narrationStoryLine.innerText = stories[0].narration1
}
*/

function showNarrations(object) {
    console.log(object.narration1)
    narrationStoryLine.innerText = stories[0].narration1
}

showNarrations(stories[0]);