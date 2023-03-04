const initialValue = 0;

export const scoreReducer = (score = initialValue, action) => {
  console.log('2')
  switch (action.type) {
    case 'score/add':
      return ++score;
    case 'score/reset':
      return 0;
    default:
      return score;
  }
}

export const addScore = () => {
  console.log('1')
  return { type: 'score/add' }
}

export const resetScore = () => {
  return {type: 'score/reset'}
}

export const selectScore = store => {
  return store.score
}