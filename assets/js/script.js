//* Start game *// 

const startButton = document.getElementById('start-btn');
const storyContainer = document.getElementById('story-segment')

startButton.addEventListener('click', startGame);

function startGame () {
    startButton.classList.add('hide');
    storyContainer.classList.remove('hide');
}


function narrations() {

}