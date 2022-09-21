import {StyleSheet, View, Dimensions, Pressable} from 'react-native';
import React from 'react';
import {colors} from '../../../theme/colors';
import {useAppDispatch} from '../../../store/hooks/hooks';

const {width, height} = Dimensions.get('screen');

interface Props {
  children: React.ReactNode;
  closeModal: () => void;
}

const MenuOptions = ({closeModal, children}: Props) => {
  const dispatch = useAppDispatch();

  return (
    <Pressable style={styles.closeMenu} onPress={closeModal}>
      <View style={styles.menuContainer}>{children}</View>
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
    width: width * 0.4,
    backgroundColor: colors.background,
    borderRadius: 5,
    position: 'absolute',
    top: 55,
    right: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
