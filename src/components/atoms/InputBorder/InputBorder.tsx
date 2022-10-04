import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import useTheme from '../../../hooks/useTheme';

interface Props {
  value: string;
  onChange: Function;
  placeHolder: string;
  style?: {};
}

const InputBorder = ({value, onChange, placeHolder, style}: Props) => {
  const {colors} = useTheme();
  return (
    <TextInput
      style={[styles.input, style, {borderColor: colors.primary}]}
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
    borderRadius: 6,
    height: 40,
    paddingHorizontal: 15,
  },
});
