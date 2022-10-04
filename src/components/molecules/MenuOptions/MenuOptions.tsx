import {StyleSheet, View, Dimensions, Pressable} from 'react-native';
import React from 'react';
import useTheme from '../../../hooks/useTheme';

const {width, height} = Dimensions.get('screen');

interface Props {
  children: React.ReactNode;
  closeModal: () => void;
}

const MenuOptions = ({closeModal, children}: Props) => {
  const {colors} = useTheme();

  return (
    <Pressable style={styles.closeMenu} onPress={closeModal}>
      <View
        style={[
          styles.menuContainer,
          {backgroundColor: colors.background, shadowColor: colors.shadowColor},
        ]}>
        {children}
      </View>
    </Pressable>
  );
};

export default MenuOptions;

const styles = StyleSheet.create({
  closeMenu: {
    height,
    position: 'absolute',
    right: -20,
    top: -20,
    width,
  },
  menuContainer: {
    borderRadius: 5,
    position: 'absolute',
    top: 55,
    right: 20,
    width: width * 0.45,

    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
