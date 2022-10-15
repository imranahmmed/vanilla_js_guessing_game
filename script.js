// Player 1 Name
let playerOneNameBox = document.querySelector(".playerOneNameBox");
let playerOneStartTitle = document.querySelector(".playerOneStartTitle");
let playerOneStartInput = document.querySelector(".playerOneStartInput");
let playerOneStartButton = document.querySelector(".playerOneStartButton");
let playerOneStartError = document.querySelector(".playerOneStartError");

// Player 1 Number
let playerOneNumberBox = document.querySelector(".playerOneNumberBox");
let playerOneName = document.querySelector(".playerOneName");
let playerOneNumberTitle = document.querySelector(".playerOneNumberTitle");
let playerOneNumberInput = document.querySelector(".playerOneNumberInput");
let playerOnePlayButton = document.querySelector(".playerOnePlayButton");
let playerOneNumberError = document.querySelector(".playerOneNumberError");

// Player 2 Name
let playerTwoNameBox = document.querySelector(".playerTwoNameBox");
let playerTwoStartTitle = document.querySelector(".playerTwoStartTitle");
let playerTwoStartInput = document.querySelector(".playerTwoStartInput");
let playerTwoStartButton = document.querySelector(".playerTwoStartButton");
let playerTwoStartError = document.querySelector(".playerTwoStartError");

// Player 2 Number
let playerTwoCount = 5;
let playerTwoCounting = document.querySelector(".playerTwoCounting");
let playerTwoNumberBox = document.querySelector(".playerTwoNumberBox");
let playerTwoName = document.querySelector(".playerTwoName");
let playerTwoNumberTitle = document.querySelector(".playerTwoNumberTitle");
let playerTwoNumberInput = document.querySelector(".playerTwoNumberInput");
let playerTwoPlayButton = document.querySelector(".playerTwoPlayButton");
let playerTwoNumberError = document.querySelector(".playerTwoNumberError");

// Player 3 Name
let playerThreeNameBox = document.querySelector(".playerThreeNameBox");
let playerThreeStartTitle = document.querySelector(".playerThreeStartTitle");
let playerThreeStartInput = document.querySelector(".playerThreeStartInput");
let playerThreeStartButton = document.querySelector(".playerThreeStartButton");
let playerThreeStartError = document.querySelector(".playerThreeStartError");

// Player 3 Number
let playerThreeCount = 5;
let playerThreeCounting = document.querySelector(".playerThreeCounting");
let playerThreeNumberBox = document.querySelector(".playerThreeNumberBox");
let playerThreeName = document.querySelector(".playerThreeName");
let playerThreeNumberTitle = document.querySelector(".playerThreeNumberTitle");
let playerThreeNumberInput = document.querySelector(".playerThreeNumberInput");
let playerThreePlayButton = document.querySelector(".playerThreePlayButton");
let playerThreeNumberError = document.querySelector(".playerThreeNumberError");

// result
let resultBox = document.querySelector(".resultBox");
let playerOneResult = document.querySelector(".playerOneResult");
let playerTwoResult = document.querySelector(".playerTwoResult");
let playerThreeResult = document.querySelector(".playerThreeResult");
let resultPlayerOneName = document.querySelector(".resultPlayerOneName");
let resultPlayerTwoName = document.querySelector(".resultPlayerTwoName");
let resultPlayerThreeName = document.querySelector(".resultPlayerThreeName");


// Player 1 Event
playerOneStartButton.addEventListener("click", function () {
    if (playerOneStartInput.value == "") {
        playerOneStartError.innerHTML = "Please Enter Your Name";
        playerOneStartError.style.display = "block";
    } else {
        playerOneStartError.style.display = "none";
        playerOneNameBox.style.display = "none";
        playerOneNumberBox.style.display = "block";
        playerOneName.innerHTML = playerOneStartInput.value;
    }
});


playerOnePlayButton.addEventListener("click", function () {
    if (playerOneNumberInput.value < 1 || playerOneNumberInput.value > 10) {
        playerOneNumberError.innerHTML = "Please Enter a Number Between 1-10"
        playerOneNumberError.style.display = "block";
    } else {
        playerOneNumberError.style.display = "none";
        if (playerOneNumberInput.value - 11) {
            playerOneNumberBox.style.display = "none";
            playerTwoNameBox.style.display = "block";
        } else {
            playerOneNumberError.innerHTML = "Please Enter a Number. String Not Allowed";
            playerOneNumberError.style.display = "block";
        };
    };
});

playerTwoStartButton.addEventListener("click", function () {
    if (playerTwoStartInput.value == "") {
        playerTwoStartError.innerHTML = "Please Enter Your Name";
        playerTwoStartError.style.display = "block";
    } else {
        playerTwoStartError.style.display = "none";
        playerTwoNameBox.style.display = "none";
        playerTwoNumberBox.style.display = "block";
        playerTwoName.innerHTML = playerTwoStartInput.value;
    }
});

playerTwoPlayButton.addEventListener("click", function () {
    if (playerTwoNumberInput.value < 1 || playerTwoNumberInput.value > 10) {
        playerTwoNumberError.innerHTML = "Please Enter a Number Between 1-10"
        playerTwoNumberError.style.display = "block";
    } else {
        playerTwoNumberError.style.display = "none";

        if (playerTwoNumberInput.value - 11) {
            if (playerOneNumberInput.value == playerTwoNumberInput.value) {
                resultPlayerTwoName.innerHTML = `${playerTwoStartInput.value} Winner`;
                resultPlayerOneName.innerHTML = `${playerOneStartInput.value} Loose`;
                playerTwoNumberBox.style.display = "none";
                playerThreeNameBox.style.display = "block";
            } else {
                playerTwoCount--
                playerTwoCounting.innerHTML = playerTwoCount
                if (playerTwoCount == 0) {
                    resultPlayerOneName.innerHTML = `${playerOneStartInput.value} Winner`;
                    resultPlayerTwoName.innerHTML = `${playerTwoStartInput.value} Loose`;
                    playerTwoNumberBox.style.display = "none";
                    playerThreeNameBox.style.display = "block";
                }
            }
        } else {
            playerTwoNumberError.innerHTML = "Please Enter a Number. String Not Allowed";
            playerTwoNumberError.style.display = "block";
        };
    };
});

playerThreeStartButton.addEventListener("click", function () {
    if (playerThreeStartInput.value == "") {
        playerThreeStartError.innerHTML = "Please Enter Your Name";
        playerThreeStartError.style.display = "block";
    } else {
        playerThreeStartError.style.display = "none";
        playerThreeNameBox.style.display = "none";
        playerThreeNumberBox.style.display = "block";
        playerThreeName.innerHTML = playerThreeStartInput.value;
    }
});

playerThreePlayButton.addEventListener("click", function () {
    if (playerThreeNumberInput.value < 1 || playerThreeNumberInput.value > 10) {
        playerThreeNumberError.innerHTML = "Please Enter a Number Between 1-10"
        playerThreeNumberError.style.display = "block";
    } else {
        playerThreeNumberError.style.display = "none";
        if (playerThreeNumberInput.value - 11) {
            if (playerOneNumberInput.value == playerThreeNumberInput.value) {
                resultPlayerOneName.innerHTML = `${playerOneStartInput.value} Loose`;
                resultPlayerThreeName.innerHTML = `${playerThreeStartInput.value} winner`;
                playerThreeNumberBox.style.display = "none";
                resultBox.style.display = "block";
            } else {
                playerThreeCount--
                playerThreeCounting.innerHTML = playerThreeCount
                if (playerThreeCount == 0) {
                    resultPlayerOneName.innerHTML = `${playerOneStartInput.value} Winner`;
                    resultPlayerThreeName.innerHTML = `${playerThreeStartInput.value} Loose`;
                    playerThreeNumberBox.style.display = "none";
                    resultBox.style.display = "block";
                }

            }
        } else {
            playerThreeNumberError.innerHTML = "Please Enter a Number. String Not Allowed";
            playerThreeNumberError.style.display = "block";
        }
    }

    if (playerOneNumberInput.value == playerTwoNumberInput.value || playerOneNumberInput.value == playerThreeNumberInput.value) {
        resultPlayerOneName.innerHTML = `${playerOneStartInput.value} Loose`;
    }
});