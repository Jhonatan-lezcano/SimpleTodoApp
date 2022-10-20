import {StyleSheet, StatusBar, useColorScheme, Appearance} from 'react-native';
import React, {useEffect} from 'react';
import {darkMode, lightMode} from '../theme/colors';
import {useAppSelector, useAppDispatch} from '../store/hooks/hooks';
import {setDarkTheme, setLightTheme} from '../store/slices/theme/themeSlice';

let didInit = false;

const useTheme = () => {
  const {dark, colors} = useAppSelector(state => state.theme);
  const dispatch = useAppDispatch();

  const colorScheme = useColorScheme();

  const changeTheme = () => {
    if (!dark) return dispatch(setDarkTheme(darkMode));
    dispatch(setLightTheme(lightMode));
  };

  useEffect(() => {
    colorScheme === 'light'
      ? dispatch(setLightTheme(lightMode))
      : dispatch(setDarkTheme(darkMode));
  }, [colorScheme]);

  const globalContainer = StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: colors.background,
      flex: 1,
      justifyContent: 'center',
      marginTop: StatusBar.currentHeight,
    },
  });

  return {changeTheme, globalContainer, colors, dark};
};

export default useTheme;
