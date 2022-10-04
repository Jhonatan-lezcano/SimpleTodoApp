import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import useTheme from '../../../hooks/useTheme';

interface Props {
  onPress: () => void;
}

const ButtonMenu = ({onPress}: Props) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {shadowColor: colors.shadowColor, backgroundColor: colors.background},
      ]}
      onPress={onPress}>
      <View style={[styles.Dot, {backgroundColor: colors.primary}]} />
      <View style={[styles.Dot, {backgroundColor: colors.primary}]} />
      <View style={[styles.Dot, {backgroundColor: colors.primary}]} />
    </TouchableOpacity>
  );
};

export default ButtonMenu;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    height: 30,
    width: 30,

    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  Dot: {
    borderRadius: 5,
    height: 5,
    marginHorizontal: 1,
    width: 5,
  },
});
