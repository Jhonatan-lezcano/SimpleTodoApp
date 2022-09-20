import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import React from 'react';
import {colors} from '../../../theme/colors';
import {size} from '../../../theme/fonts';

interface Props {
  actionOption: () => void;
  textOption: string;
  divider?: boolean;
}

const ItemMenuOption = ({actionOption, textOption, divider}: Props) => {
  return (
    <TouchableOpacity style={styles.option} onPress={actionOption}>
      <Text style={styles.textOption}>{textOption}</Text>
      {divider && <View style={styles.divider} />}
    </TouchableOpacity>
  );
};

export default ItemMenuOption;

const styles = StyleSheet.create({
  option: {
    height: 40,
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 10,
  },
  textOption: {
    color: colors.text,
    fontSize: size.font14,
  },
  divider: {
    height: 1,
    backgroundColor: colors.textSecondary,
    bottom: 0,
    left: '7%',
    position: 'absolute',
    width: '100%',
  },
});
