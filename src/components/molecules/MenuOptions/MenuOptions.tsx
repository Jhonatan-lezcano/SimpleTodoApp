import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import {colors} from '../../../theme/colors';
import {OptionsType} from '../../../utils/MenuOptions';
import {size} from '../../../theme/fonts';
import {useAppDispatch} from '../../../store/hooks/hooks';

const {width} = Dimensions.get('screen');

interface Props {
  children: React.ReactNode;
  closeModal: () => void;
}

const MenuOptions = ({closeModal, children}: Props) => {
  const dispatch = useAppDispatch();

  return (
    <Pressable style={{flex: 1}} onPress={closeModal}>
      <View style={styles.menuContainer}>{children}</View>
    </Pressable>
  );
};

export default MenuOptions;

const styles = StyleSheet.create({
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
