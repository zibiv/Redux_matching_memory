import React from 'react';
// Add import statement below
import { useSelector } from 'react-redux';
import { selectMatchedIDs } from '../board/boardSlice';
import { selectScore } from '../score/scoreReducer';

export const Score = () => {
  // Add selected data variable below
  const matched = useSelector(selectMatchedIDs);
  const score = useSelector(selectScore);
  

  return (
    // implement selected data inside <div>
    <div className='scoreTable'>
      <div className="score-container">Matched: {matched.length}/12</div>
      <div className="score-container">Try: {score}</div>
    </div>
  );
};