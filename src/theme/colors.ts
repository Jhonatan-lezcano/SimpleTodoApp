import {ThemeState} from '../store/slices/theme/themeSlice';
export const colors = {
  primary: '#1d3557',
  background: '#f0efeb',
  card: 'rgb(255, 255, 255)',
  text: '#2D3436',
  border: 'rgb(199, 199, 204)',
  notification: 'rgb(255, 69, 58)',
  secondary: '#457b9d',
  tertiary: '#e63946',
  textSecondary: '#A4A4A4',
  black: '#212529',
};

export const lightMode: ThemeState = {
  dark: false,
  colors: {
    primary: '#1d3557',
    background: '#f0efeb',
    text: '#2D3436',
    secondary: '#457b9d',
    tertiary: '#e63946',
    textSecondary: '#A4A4A4',
    shadowColor: '#000',
    update: '#064789',
    success: '#388659',
    danger: '#bf0603',
  },
};

export const darkMode: ThemeState = {
  dark: true,
  colors: {
    primary: '#7f5af0',
    background: '#16161a',
    text: '#fffffe',
    secondary: '#72757e',
    tertiary: '#2cb67d',
    textSecondary: '#94a1b2',
    shadowColor: '#ffffff',
    update: '#064789',
    success: '#388659',
    danger: '#bf0603',
  },
};
