import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    logedin: "",
    userData: {}
};


export const loginSlice = createSlice({
  name: 'login',
  initialState,

  reducers: {
    loginHandler: (state, action)=>{
        state.logedin = action.payload.status;
        state.userData = action.payload.player;
        console.log(action.payload.status)
    },
    logOutHandler: (state, action)=>{
        state.logedin = action.payload;
    }
  },
 
});

export const { loginHandler, logOutHandler } = loginSlice.actions;

export const logedin = (state) => state.login.logedin;
export const userData = (state) => state.login.userData;




export default loginSlice.reducer;
