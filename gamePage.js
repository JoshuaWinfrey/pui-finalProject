let players = [
    {
        name: "Caleb Williams",
        school: "USC",
        position: "QB",
        id: "player1"
    },
    {
        name: "Drake Maye",
        school: "UNC",
        position: "QB",
        id: "player2"
    }];


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

function selectPlayer() {
    if (currentTeam) {
        let selectedPlayer = document.querySelector('.selected .selectedPlayer');

        // Create a new player element
        let newPlayerElement = document.createElement('div');
        newPlayerElement.className = 'selectedPlayer';

        // Copy player information to the new player element
        let playerInfo = document.createElement('div');
        let playerImage = document.createElement('div');
        playerInfo.className = 'playerInfo';
        playerImage.className = 'playerImage';
        playerPosition.className = ('playerInfo', 'selectedPlayerPosition');
        playerSchool.className = 'selectedPlayerSchool';
        playerInfo.appendChild(playerName);
        playerInfo.appendChild(playerPosition);
        playerInfo.appendChild(playerSchool);
        playerImage.appendChild(rosterPhoto);
        addPlayerButton.remove();

        newPlayerElement.appendChild(playerInfo);
        newPlayerElement.appendChild(playerImage);

        // Append the new player element to the selected team
        let selectedTeam = document.querySelector('.selected');
        selectedTeam.appendChild(newPlayerElement);
        console.log(currentTeam + " has selected " + playerName.innerHTML + "!");
        
    } else {
        console.log("Please select a team first.");
    }
}

function addTeam(teamName, pick) {
    let dragParent = document.querySelector('#dragParent');

    let newTeam = document.createElement('div');
    newTeam.className = 'dragThing';

    let teamNameElement = document.createElement('div');
    let pickElement = document.createElement('div');
    teamNameElement.className = 'teamName';
    pickElement.className = 'pick';

    teamNameElement.textContent = teamName;
    pickElement.textContent = pick;

    newTeam.appendChild(teamNameElement);
    newTeam.appendChild(pickElement);

    dragParent.appendChild(newTeam);
}

addTeam("Chicago Bears", 1);
addTeam("Arizona Cardinals", 2);
addTeam("New England Patriots", 3);
addTeam("Chicago Bears", 4);
addTeam("Washington Commanders", 5);
addTeam("New York Giants", 6);
addTeam("Tampa Bay Buccaneers", 7);
addTeam("New York Jets", 8);
addTeam("Los Angeles Chargers", 9);
addTeam("Tennessee Titans", 10);
addTeam("Las Vegas Raiders", 11);
addTeam("New Orleans Saints", 12);
addTeam("Green Bay Packers", 13);
addTeam("Los Angeles Rams", 14);
addTeam("Cincinnati Bengals", 15);
addTeam("Buffalo Bills", 16);
addTeam("Arizona Cardinals", 17);
addTeam("Denver Broncos", 18);
addTeam("Atlanta Falcons", 19);
addTeam("Minnesota Vikings", 20);
addTeam("Indianapolis Colts", 21);
addTeam("Seattle Seahawks", 22);
addTeam("Pittsburgh Steelers", 23);
addTeam("Houstan Texans", 24);
addTeam("Miami Dolphins", 25);
addTeam("Dallas Cowboys", 26);
addTeam("Detroit Lions", 27);
addTeam("Jacksonville Jaguars", 28);
addTeam("Kansas City Chiefs", 29);
addTeam("San Francisco 49ers", 30);
addTeam("Baltimore Ravens", 31);
addTeam("Philadelphia Eagles", 32);

function addPlayer(){
    let availablePlayers = document.querySelector('.availablePlayers');
    availablePlayers.className = 'availablePlayers';

    for (let i=0; i<players.length; i++){
        let newPlayer = document.createElement('div');
    newPlayer.className = 'players';
    newPlayer.id = players[i].id;

    let playerNameElement = document.createElement('div');
    let schoolElement = document.createElement('div');
    let positionElement = document.createElement('div');
    let playerPhotoElement = document.createElement('div'); 
    let rosterPhotoElement = document.createElement('img');
    rosterPhotoElement.src = "Assets/" + players[i].name + ".png";
    let addButton = document.createElement('img');
    addButton.src = "Assets/Icon Plus.png";
    

    playerNameElement.className = 'playerName';
    schoolElement.className = 'playerSchool';
    positionElement.className = 'playerPosition';
    rosterPhotoElement.className = 'rosterPhoto';
    addButton.className = 'addPlayerButton';

    playerNameElement.textContent = players[i].name;
    schoolElement.textContent = players[i].school;
    positionElement.textContent = players[i].position;

    playerPhotoElement.appendChild(rosterPhotoElement);
    playerPhotoElement.appendChild(addButton);
    newPlayer.appendChild(playerPhotoElement);
    newPlayer.appendChild(playerNameElement);
    newPlayer.appendChild(positionElement);
    newPlayer.appendChild(schoolElement);

    availablePlayers.appendChild(newPlayer);  

    }
}

addPlayer();


let addPlayerButton = document.querySelector(".addPlayerButton");
addPlayerButton.addEventListener("click", selectPlayer);






