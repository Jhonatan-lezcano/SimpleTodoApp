import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {colors} from '../../../theme/colors';

interface Props {
  placeholder?: string;
  width?: string | number;
  value: string;
  onChange: Function;
}

const InputLine = ({placeholder, width, value, onChange}: Props) => {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={colors.textSecondary}
      style={[styles.input, {width}]}
      value={value}
      onChangeText={text => onChange(text)}
      selectionColor={colors.primary}
    />
  );
};

export default InputLine;

InputLine.defaultProps = {
  width: '100%',
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
    color: colors.primary,
    height: 40,
    paddingHorizontal: 10,
  },
});
