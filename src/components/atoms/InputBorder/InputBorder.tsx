import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {colors} from '../../../theme/colors';

interface Props {
  value: string;
  onChange: Function;
  placeHolder: string;
}

const InputBorder = ({value, onChange, placeHolder}: Props) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={text => onChange(text)}
      placeholder={placeHolder}
      placeholderTextColor={colors.textSecondary}
      selectionColor={colors.primary}
    />
  );
};

export default InputBorder;

const styles = StyleSheet.create({
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.primary,
    borderRadius: 6,
    color: colors.primary,
    height: 40,
    paddingHorizontal: 15,
  },
});
