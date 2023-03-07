import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Add import statements below
import { selectVisibleIDs, selectMatchedIDs, boardSlice } from '../../boardSlice';
import { scoreSlice } from '../../../score/scoreReducer';
let cardLogo = "https://static-assets.codecademy.com/Courses/Learn-Redux/matching-game/codecademy_logo.png";

export const Card = ({ id, contents }) => {
  // Add selected data and dispatch variables below
  const visibleIDs = useSelector(selectVisibleIDs);
  const matchedIDs = useSelector(selectMatchedIDs);
  const dispatch = useDispatch();
  
  // flip card action
  const flipHandler = (id) => {
    // Add action dispatch below
    dispatch(boardSlice.actions.flipCard(id));
  };

  let cardStyle = 'resting'
  let click = () => flipHandler(id);

  const unitedClicker = () => {
    click();
    if(visibleIDs.length === 1)dispatch(scoreSlice.actions.add());
  }
  
  let cardText = (
    <img src={cardLogo} className="logo-placeholder" alt="Card option" />
  );

  // 1st if statement
  // implement card id array membership check
  if (visibleIDs.includes(id) || matchedIDs.includes(id)) {
    cardText = contents;
    click = () => {};
  }

  // 2nd if statement
  // implement card id array membership check
  if (matchedIDs.includes(id)) {
    cardStyle = 'matched';
  }

  // 3rd if statement
  // implement number of flipped cards check
  // позволяет просматривать максимум две карты одновременно 
  if (visibleIDs.length === 2) {
    click = () => dispatch(boardSlice.actions.resetCards());
    if(!matchedIDs.includes(id)) cardStyle = 'no-match';
  }

  return (
    <button onClick={unitedClicker} className={`card ${cardStyle}`}>
      {cardText}
    </button>
  );
};
