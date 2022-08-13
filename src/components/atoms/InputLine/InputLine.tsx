import {StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {colors} from '../../../theme/colors';

export type InputTypes =
  | 'default'
  | 'number-pad'
  | 'decimal-pad'
  | 'numeric'
  | 'email-address'
  | 'phone-pad'
  | 'url';

interface Props {
  placeholder?: string;
  width?: string | number;
  value: string;
  onChange: Function;
  password?: boolean;
  inputTypes?: InputTypes;
}

const InputLine = ({
  placeholder,
  width,
  value,
  onChange,
  password,
  inputTypes,
}: Props) => {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={colors.textSecondary}
      style={[styles.input, {width}]}
      value={value}
      onChangeText={text => onChange(text)}
      selectionColor={colors.primary}
      keyboardType={inputTypes}
      secureTextEntry={password}
    />
  );
};

export default InputLine;

InputLine.defaultProps = {
  placeholder: '',
  value: '',
  width: '100%',
  password: false,
  inputTypes: 'default',
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
    color: colors.primary,
    height: 40,
    paddingHorizontal: 5,
  },
});
