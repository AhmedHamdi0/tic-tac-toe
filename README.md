# Tic-Tac-Toe Game with Time Travel

 This is a simple Tic-Tac-Toe game built using React. It allows players to make moves on a 3x3 game board, keeps track of the game history, and enables time travel to previous moves.
 
## Features
- Game board with 3x3 squares
- Alternate turns between "X" and "O"
- Displays winner when a player wins or a draw when the game is tied
- Keeps track of game history and allows time travel to previous moves
- Responsive design

## Technologies Used
- React
- JavaScript
- CSS

## Project Structure

The project is structured as follows:

- `Square.js`: A React component representing a single square on the game board.
- `Board.js`: A React component representing the game board, which includes multiple `Square` components.
- `Game.js`: A React component that holds the game state and manages the time travel feature.
- `calculateWinner.js`: A helper function to determine the winner of the game based on the current state of the squares.

## How to Run the Project
1- Clone the repository to your local machine using the following command:<br/>
`git clone https://github.com/AhmedEldeep88/tic-tac-toe.git`

2- Navigate to the project directory:
`cd tic-tac-toe`

3- Install the dependencies using npm or yarn:
`npm install`

4- Start the development server:
`npm run dev`

5- Open your web browser and go to `http://localhost:3000` to play the game.

## How to Play
1- Click on an empty square on the game board to make a move.

2- The game will automatically switch turns between "X" and "O".

3- The game will display a winner when a player wins or a draw when the game is tied.

4- To go back in time and view previous moves, use the buttons in the "Game Info" section.

5- To restart the game, click on the "Go to game start" button.

## Contributing

Contributions to this project are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## Acknowledgements
This project is based on the React tutorial by Facebook: [Tutorial: Tic-Tac-Toe](https://react.dev/learn/tutorial-tic-tac-toe).
