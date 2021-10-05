import { configureStore } from '@reduxjs/toolkit';

// import counterSlice from './counter';
// import authSlice from './auth';
import counterReducer from './counter';
import authReducer from './auth';


const store = configureStore({
  // reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }
  reducer: { counter: counterReducer, auth: authReducer }
});

export default store;




// import { createStore } from 'redux';

// function counterReducer(state = initialState, action) {
//   if (action.type === 'increment') {
//     return { 
//       counter: state.counter + 1,
//       showCounter: state.showCounter
//     };
//   }
  
//   if (action.type === 'increase') {
//     return { 
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter
//     };
//   }

//   if (action.type === 'decrement') {
//     return { 
//       counter: state.counter - 1,
//       showCounter: state.showCounter
//     };
//   }

//   if (action.type === 'toggle') {
//     return { 
//       counter: state.counter,
//       showCounter: !state.showCounter
//     };
//   }

  
//   return state;
// };

// const store = createStore(counterReducer);
