import './App.css';
import React from 'react';
import { Score } from './features/score/Score.jsx';
import { Board } from './features/board/Board.jsx';
// Add import statements below



const App = () => {
  // Add dispatch variable below
  

  const startGameHandler = () => {
    // Add action dispatch below
    
  };

  const tryAgainHandler = () => {
    // Add action dispatch below
    
  };

  return (
    <div className="App">
      <Score />
      <Board />
      <footer className="footer">
        <button onClick={startGameHandler} className="start-button">
          Start Game
        </button>
        <button onClick={tryAgainHandler} className="try-new-pair-button">
          Try New Pair
        </button>
      </footer>
    </div>
  );
};

export default App;
