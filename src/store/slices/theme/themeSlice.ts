import {createSlice} from '@reduxjs/toolkit';
import {lightMode} from '../../../theme/colors';

export interface Colors {
  primary: string;
  background: string;
  text: string;
  secondary: string;
  tertiary: string;
  textSecondary: string;
  shadowColor: string;
}

export interface ThemeState {
  dark: boolean;
  colors: Colors;
}

const initialState: ThemeState = lightMode;

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setDarkTheme: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    setLightTheme: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const {setDarkTheme, setLightTheme} = themeSlice.actions;

export default themeSlice.reducer;