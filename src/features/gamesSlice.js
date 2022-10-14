import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  baseGames: [],
  games: [],
};


export const gamesSlice = createSlice({
  name: 'games',
  initialState,

  reducers: {
    handleGamesList: (state, action)=>{
      state.baseGames = action.payload
      state.games = action.payload
    },
    CategoryFilter: (state, action)=>{
      state.games = action.payload
    },
    searchHandler: (state, action)=>{
      state.games = action.payload
    }
  },
 
});

export const { handleGamesList, CategoryFilter, searchHandler } = gamesSlice.actions;

export const games = (state) => state.games.games;
export const baseGames = (state) => state.games.baseGames;





export default gamesSlice.reducer;
