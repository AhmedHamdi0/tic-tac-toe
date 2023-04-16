import { useState } from 'react';
import Board from './Board';

function Game() {

  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);
  const currentSqaures = history[history.length - 1];

  function handlePlay(nextSquares){
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }

  const moves = history.map((squares, move) => {
    let description;
    if(move > 0){
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li>
        <button>{description}</button>
      </li>
    )
  })

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSqaures} onPlay={handlePlay}/>
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default Game;
