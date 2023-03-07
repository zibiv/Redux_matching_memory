import { configureStore } from '@reduxjs/toolkit';

import { boardSlice } from '../features/board/boardSlice.js';
import { scoreSlice } from '../features/score/scoreReducer.js';

export const store = configureStore({
  reducer:{
    board: boardSlice.reducer,
    score: scoreSlice.reducer
  }
});