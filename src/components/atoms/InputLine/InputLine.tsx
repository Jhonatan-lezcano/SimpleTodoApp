import {StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {colors} from '../../../theme/colors';
import {SignUpForm} from '../../../screens/SignUp';
import {Controller} from 'react-hook-form';

export type InputTypes =
  | 'default'
  | 'number-pad'
  | 'decimal-pad'
  | 'numeric'
  | 'email-address'
  | 'phone-pad'
  | 'url';

interface Props {
  control: SignUpForm | any;
  err: any;
  name: string;
  rules?: any;
  placeholder?: string;
  width?: string | number;
  password?: boolean;
  inputTypes?: InputTypes;
}

const InputLine = ({
  control,
  name,
  placeholder,
  width,
  password,
  inputTypes,
  rules,
}: Props) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {onChange, value, onBlur}, fieldState: {error}}) => (
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={colors.textSecondary}
          style={[
            styles.input,
            {
              width,
              borderBottomColor: error ? colors.tertiary : colors.primary,
            },
          ]}
          value={value}
          onChangeText={onChange}
          selectionColor={colors.primary}
          keyboardType={inputTypes}
          secureTextEntry={password}
          onBlur={onBlur}
        />
      )}
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
    color: colors.primary,
    height: 40,
    paddingHorizontal: 5,
  },
});
