// Function to simulate a math game
function loadMathGame() {
    const mathGameDiv = document.getElementById("math-game");
    mathGameDiv.innerHTML = `
        <p>Solve this: 5 + 3 = ?</p>
        <button onclick="checkAnswer(8)">8</button>
        <button onclick="checkAnswer(6)">6</button>
        <button onclick="checkAnswer(7)">7</button>
        <p id="result"></p>
    `;
}

// Check the answer for the math game
function checkAnswer(answer) {
    const result = document.getElementById("result");
    if (answer === 8) {
        result.innerHTML = "Correct! Well done!";
    } else {
        result.innerHTML = "Oops! Try again.";
    }
}

// Function to display science experiments
function loadScienceExperiments() {
    const scienceDiv = document.getElementById("science-experiments");
    scienceDiv.innerHTML = `
        <p>Experiment 1: Make a Volcano</p>
        <p>Experiment 2: Invisible Ink</p>
        <p>Experiment 3: Growing Crystals</p>
    `;
}

// Function to simulate reading a story
function startReading() {
    const storyDiv = document.getElementById("story-section");
    storyDiv.innerHTML = `
        <p>Once upon a time, in a land far, far away...</p>
        <p>(Story continues...)</p>
    `;
}

// General function to start a game (randomly chosen from activities)
function startGame() {
    const random = Math.floor(Math.random() * 3) + 1;
    if (random === 1) {
        loadMathGame();
    } else if (random === 2) {
        loadScienceExperiments();
    } else {
        startReading();
    }
}