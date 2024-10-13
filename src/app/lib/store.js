import { configureStore } from '@reduxjs/toolkit'
// import loginSlice from './features/users/loginSlice'
import authSlice from './features/users/loginSlice';
// import userSlice from './features/users/userSlice';
import userSlice from './features/users/usersSlice';



export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authSlice,
      users: userSlice
      },
    
  })
}




