import { configureStore } from '@reduxjs/toolkit'
// import loginSlice from './features/users/loginSlice'
import authSlice from './features/users/loginSlice';



export const makeStore = () => {
  return configureStore({
    reducer: {
      auth:authSlice,
      },
    
  })
}
// store.js
// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './authSlice'; // Adjust the path as necessary

// const store = configureStore({
//   reducer: {
//     auth: authReducer,
//   },
// });

// export default store;



