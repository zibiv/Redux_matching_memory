import './App.css';
import React from 'react';
import { Score } from './features/score/Score.jsx';
import { Board } from './features/board/Board.jsx';
// Add import statements below
import { setBoard, resetCards } from './features/board/boardSlice'
import { resetScore } from './features/score/scoreReducer.js';
import { useDispatch } from 'react-redux';


const App = () => {
  // Add dispatch variable below
  const dispatch = useDispatch();
  

  const startGameHandler = () => {
    // Add action dispatch below
    dispatch(setBoard());
    dispatch(resetScore());
  };

  const tryAgainHandler = () => {
    // Add action dispatch below
    dispatch(resetCards());
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
