import { combineReducers, createStore } from 'redux';

import { boardReducer } from '../features/board/boardSlice.js';
import { scoreReducer } from '../features/score/scoreReducer.js';

const rootReducer = combineReducers({
  board: boardReducer,
  score: scoreReducer
});

export const store = createStore(rootReducer);