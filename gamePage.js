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
    currentTeam = clickedTeam.textContent.trim(); // Assuming the team name is the text content
    console.log("Current Team: " + currentTeam);
}

let addPlayerButton = document.querySelector(".addPlayerButton");
let player1 = document.querySelector("#player1");
let playerName = document.querySelector(".playerName");

addPlayerButton.addEventListener("click", selectPlayer);

function selectPlayer() {
    if (currentTeam) {
        console.log("You have selected " + playerName.innerHTML + " for " + currentTeam + "!");
        player1.remove();
    } else {
        console.log("Please select a team first.");
    }
}