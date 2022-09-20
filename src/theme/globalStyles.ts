import {StyleSheet, StatusBar} from 'react-native';
import {colors} from './colors';

export const globalStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight,
  },
});
