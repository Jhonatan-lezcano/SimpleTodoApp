import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../../theme/colors';

interface Props {
  onPress: Function;
}

const ButtonMenu = ({onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress()}>
      <View style={styles.Dot} />
      <View style={styles.Dot} />
      <View style={styles.Dot} />
    </TouchableOpacity>
  );
};

export default ButtonMenu;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: colors.background,
    flexDirection: 'row',
    justifyContent: 'center',
    height: 30,
    width: 30,

    shadowColor: '#000',
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
    backgroundColor: colors.primary,
    height: 5,
    marginHorizontal: 1,
    width: 5,
  },
});
