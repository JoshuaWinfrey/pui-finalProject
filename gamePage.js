let currentTeam = null;

function initDragula() {
    dragula([document.querySelector('#dragParent')]);
}

document.addEventListener("DOMContentLoaded", function () {
    var dragThings = document.querySelectorAll('.dragThing');

    dragThings.forEach(function (dragThing) {
        dragThing.addEventListener('click', function () {
            switchTeam(dragThing);
        });
    });
});

function switchTeam(clickedTeam) {
    // Remove the 'selected' class from all elements
    document.querySelectorAll('.dragThing').forEach(function (element) {
        element.classList.remove('selected');
    });

    // Add the 'selected' class to the clicked element
    clickedTeam.classList.add('selected');

    // Set the currentTeam to the clicked team
    currentTeam = clickedTeam.textContent.trim(); // The team name is the text content
    console.log("Current Team: " + currentTeam);
}

let addPlayerButton = document.querySelector(".addPlayerButton");
let player1 = document.querySelector("#player1");
let playerName = document.querySelector(".playerName");
let playerSchool = document.querySelector(".playerSchool");
let rosterPhoto = document.querySelector(".rosterPhoto");

addPlayerButton.addEventListener("click", selectPlayer);

function selectPlayer() {
    if (currentTeam) {
        console.log("You have selected " + playerName.innerHTML + " for " + currentTeam + "!");

        // Create a new player element
        let newPlayerElement = document.createElement('div');
        newPlayerElement.className = 'selectedPlayer';

        // Copy player information to the new player element
        let playerInfo = document.createElement('div');
        let playerImage = document.createElement('div');
        playerInfo.className = 'playerInfo';
        playerImage.className = 'playerImage';
        playerInfo.appendChild(playerName.cloneNode(true));
        playerInfo.appendChild(playerSchool.cloneNode(true));
        playerImage.appendChild(rosterPhoto.cloneNode(true));

        newPlayerElement.appendChild(playerInfo);
        newPlayerElement.appendChild(playerImage);

        // Append the new player element to the selected team
        let selectedTeam = document.querySelector('.selected');
        selectedTeam.appendChild(newPlayerElement);

        // Remove the original player from the list
        player1.remove();
    } else {
        console.log("Please select a team first.");
    }
}