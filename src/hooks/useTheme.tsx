import {StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import {darkMode, lightMode} from '../theme/colors';
import {useAppSelector, useAppDispatch} from '../store/hooks/hooks';
import {setDarkTheme, setLightTheme} from '../store/slices/theme/themeSlice';

const useTheme = () => {
  const {dark, colors} = useAppSelector(state => state.theme);
  const dispatch = useAppDispatch();

  const changeTheme = () => {
    if (!dark) return dispatch(setDarkTheme(darkMode));
    dispatch(setLightTheme(lightMode));
  };

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
