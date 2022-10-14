import { configureStore } from '@reduxjs/toolkit';
import gamesSlice from '../features/gamesSlice';
import loginSlice from '../features/loginSlice';

export const store = configureStore({
  reducer: {
    games: gamesSlice,
    login: loginSlice
  },
});
