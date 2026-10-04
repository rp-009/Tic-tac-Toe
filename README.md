# Tic-Tac-Toe

A simple, interactive Tic-Tac-Toe web game built using HTML, CSS, and vanilla JavaScript.

## Live Demo

🌍 **[Play the Game Here](https://rp-009.github.io/Tic-tac-Toe/)**

## Features

* **Two-Player Gameplay:** Alternates turns between Player O and Player X, applying distinct font colors for each player's move.
* **Automatic Game Resolution:** Evaluates moves against an array of eight winning patterns to declare a winner, and detects tie conditions if all nine boxes are filled without a win.
* **Game Controls:** Includes "Reset Game" and "New Game" buttons to clear the board, hide victory messages, and reset player turns.
* **Clean UI:** Utilizes CSS Flexbox to maintain a centered 3x3 grid layout and distinct visual styling, including a `#548687` background.

## Project Structure

* `index.html`: The core HTML structure containing the game board, hidden message container, and control buttons.
* `style.css`: The stylesheet defining the visual theme, sizes using viewport units (vmin/vh), and flexbox alignment.
* `script.js`: The JavaScript game logic handling DOM manipulation, turn tracking, win evaluation, and click event listeners.

## How to Run Locally

1. Clone this repository to your local machine.
2. Open the `index.html` file in any modern web browser to start playing.
