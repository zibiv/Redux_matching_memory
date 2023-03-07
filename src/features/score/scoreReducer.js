import { createSlice } from '@reduxjs/toolkit';

const initialValue = 0;

export const scoreSlice = createSlice({
  name: 'score',
  initialState: initialValue,
  reducers: {
    add(state) {
      return ++state
    },
    reset() {
      return 0;
    }
  }
});

export const selectScore = (store) => {
  return store.score;
};


//стандартный подход 
export const scoreReducer = (score = initialValue, action) => {
  console.log('2');
  switch (action.type) {
    case 'score/add':
      return ++score;
    case 'score/reset':
      return 0;
    default:
      return score;
  }
};

export const addScore = () => {
  console.log('1');
  return { type: 'score/add' };
};

export const resetScore = () => {
  return { type: 'score/reset' };
};


