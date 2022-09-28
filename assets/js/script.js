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

/* Displaying start Story */ 

function showNarrations(object) {
    console.log(object.narration1)
    narrationStoryLine.innerText = object.narration1    
}

showNarrations(stories[0]);

function showOptions(object) {
    for (let answer in object.answer) {
        const button = document.createElement('button')
        button.classList.add('btn')
        // button.addEventListener('click')
        optionButtons.appendChild(button)
        console.log(object.answer[answer])
        button.innerText = object.answer[answer]
    }
}

showOptions(stories[0]);


/*
function showOptions(object) {
    console.log(object.answers)
    optionButtons.innertext = object.answer.option1
}
*/



