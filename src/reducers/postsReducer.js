const postsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    default:
      return state;
  }
};

export default postsReducer;

// Reducer should always decide return new state based on input state and action
// rather than making an API request or DOM request

// State object should never be mutated (not that you can't)
// https://github.com/reduxjs/redux/blob/master/src/combineReducers.ts

// Bad                      Good
// state.pop                state.filter
// state.push               [...state, 'value']
// state[0] = 'value'       state.map(el => el === 'hi' ? 'bye': el)

// state.name = 'Sam'       {...state, name: 'Sam'}
// state.age = 30           {...state, age: 30}
// delete state.name        {...state, name: undefined}
