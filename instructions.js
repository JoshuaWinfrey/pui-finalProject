let returnIcon = document.querySelector('#returnIcon');
let returnToGame = document.querySelector('.returnToGameText');

returnIcon.addEventListener('click',gamePage);
returnToGame.addEventListener('click',gamePage);


function gamePage (){
    location.href = './index.html';
}