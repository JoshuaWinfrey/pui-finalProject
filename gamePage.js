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

let teams = [
    {
        name: "Chicago Bears",
        pick: 1,
        id: "bears1"
    },
    {
        name: "Arizona Cardinals",
        pick: 2,
        id: "cardinals1"
    },
    {
        name: "New England Patriots",
        pick: 3,
        id: "patriots1"
    },
    {
        name: "Chicago Bears",
        pick: 4,
        id: "bears2"
    },
    {
        name: "Washington Commanders",
        pick: 5,
        id: "commanders1"
    },
    {
        name: "New York Giants",
        pick: 6,
        id: "giants1"
    },
    {
        name: "Tampa Bay Buccaneers",
        pick: 7,
        id: "buccaneers1"
    },
    {
        name: "New York Jets",
        pick: 8,
        id: "jets1"
    },
    {
        name: "Los Angeles Chargers",
        pick: 9,
        id: "chargers1"
    },
    {
        name: "Tennessee Titans",
        pick: 10,
        id: "titans1"
    },
    {
        name: "Las Vegas Raiders",
        pick: 11,
        id: "raiders1"
    },
    {
        name: "New Orleans Saints",
        pick: 12,
        id: "saints1"
    },
    {
        name: "Green Bay Packers",
        pick: 13,
        id: "packers1"
    },
    {
        name: "Los Angeles Rams",
        pick: 14,
        id: "rams1"
    },
    {
        name: "Cincinnati Bengals",
        pick: 15,
        id: "bengals1"
    },
    {
        name: "Buffalo Bills",
        pick: 16,
        id: "bills1"
    },
    {
        name: "Arizona Cardinals",
        pick: 17,
        id: "cardinals2"
    },
    {
        name: "Denver Broncos",
        pick: 18,
        id: "broncos1"
    },
    {
        name: "Atlanta Falcons",
        pick: 19,
        id: "falcons1"
    },
    {
        name: "Minnesota Vikings",
        pick: 20,
        id: "vikings1"
    },
    {
        name: "Indianapolis Colts",
        pick: 21,
        id: "colts1"
    },
    {
        name: "Seattle Seahawks",
        pick: 22,
        id: "seahawks1"
    },
    {
        name: "Pittsburgh Steelers",
        pick: 23,
        id: "steelers1"
    },
    {
        name: "Houston Texans",
        pick: 24,
        id: "texans1"
    },
    {
        name: "Miami Dolphins",
        pick: 25,
        id: "dolphins1"
    },
    {
        name: "Dallas Cowboys",
        pick: 26,
        id: "cowboys1"
    },
    {
        name: "Detroit Lions",
        pick: 27,
        id: "lions1"
    },
    {
        name: "Jacksonville Jaguars",
        pick: 28,
        id: "jaguars1"
    },
    {
        name: "Kansas City Chiefs",
        pick: 29,
        id: "chiefs1"
    },
    {
        name: "San Francisco 49ers",
        pick: 30,
        id: "49ers1"
    },
    {
        name: "Baltimore Ravens",
        pick: 31,
        id: "ravens1"
    },
    {
        name: "Philadelphia Eagles",
        pick: 32,
        id: "eagles1"
    },

];


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
    currentTeam = clickedTeam.querySelector('.teamName').textContent.trim(); // The team name is the text content
    console.log("Current Team: " + currentTeam);
}

function selectPlayer() {
    if (currentTeam) {
        
        let selectedPlayerElement = this.closest('.players');
        if (selectedPlayerElement) {
            let playerName = selectedPlayerElement.querySelector('.playerName').textContent;
            console.log(playerName);

            // Create a new player element
            let newPlayerElement = document.createElement('div');
            newPlayerElement.className = 'selectedPlayer';

            // Copy player information to the new player element
            let playerInfo = document.createElement('div');
            let playerImage = document.createElement('div');
            let playerPosition = document.createElement('div');
            let playerSchool = document.createElement('div');
            playerInfo.className = 'playerInfo';
            playerImage.className = 'playerImage';
            playerPosition.className = 'selectedPlayerPosition';
            playerSchool.className = 'selectedPlayerSchool';
            playerInfo.appendChild(document.createTextNode(playerName)); // Set player name
            playerInfo.appendChild(playerPosition);
            playerInfo.appendChild(playerSchool);
            playerImage.appendChild(selectedPlayerElement.querySelector('.rosterPhoto').cloneNode(true));
            selectedPlayerElement.remove();

            newPlayerElement.appendChild(playerInfo);
            newPlayerElement.appendChild(playerImage);

            // Append the new player element to the selected team
            let selectedTeam = document.querySelector('.selected');
            selectedTeam.appendChild(newPlayerElement);

            // Remove the selected player from the availablePlayers div
            let availablePlayers = document.querySelector('.availablePlayers');
            let selectedPlayer = document.querySelector('.selected');

            console.log(currentTeam + " has selected " + playerName + "!");
        } else {
            console.error("Error: Unable to find selected player element.");
        }
    } else {
        console.log("Please select a team first.");
    }
}



function addTeam() {
    let dragParent = document.querySelector('#dragParent');

    for (let i =0; i<teams.length; i++){
    let newTeam = document.createElement('div');
    newTeam.className = 'dragThing';
    newTeam.id = teams[i].id;

    let teamNameElement = document.createElement('div');
    let pickElement = document.createElement('div');
    teamNameElement.className = 'teamName';
    pickElement.className = 'pick';

    teamNameElement.textContent = teams[i].name;
    pickElement.textContent = teams[i].pick;

    newTeam.appendChild(teamNameElement);
    newTeam.appendChild(pickElement);

    dragParent.appendChild(newTeam);
}
}

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
    newPlayer.appendChild(addButton);
    newPlayer.appendChild(playerPhotoElement);
    newPlayer.appendChild(playerNameElement);
    newPlayer.appendChild(positionElement);
    newPlayer.appendChild(schoolElement);

    availablePlayers.appendChild(newPlayer);  

    }
}

addPlayer();
addTeam();


let addPlayerButtons = document.querySelectorAll(".addPlayerButton");
addPlayerButtons.forEach( (addPlayerButton) => {
    addPlayerButton.addEventListener("click", selectPlayer);
})







