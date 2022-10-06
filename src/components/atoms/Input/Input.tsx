import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import {SignUpForm} from '../../../screens/SignUp';
import {Controller} from 'react-hook-form';
import TextMessageError from '../TextMessageError/TextMessageError';
import useTheme from '../../../hooks/useTheme';

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
  password?: boolean;
  inputTypes?: InputTypes;
  style?: {};
  outline?: 'line' | 'borders';
  borderColor?: string;
  width?: string | number;
  label?: string;
}

const Input = ({
  control,
  name,
  placeholder,
  password,
  inputTypes,
  rules,
  outline,
  style,
  borderColor,
  width,
  label,
  err,
}: Props) => {
  const [secureText, setSecureText] = useState(password);
  const {colors} = useTheme();

  return (
    <View style={[style, {width}]}>
      {label && (
        <Text style={[styles.label, {color: colors.textSecondary}]}>
          {label}
        </Text>
      )}
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({field: {onChange, value, onBlur}, fieldState: {error}}) => (
          <TextInput
            placeholder={placeholder}
            placeholderTextColor={colors.textSecondary}
            style={[
              outline === 'line'
                ? styles.line
                : outline === 'borders' && styles.borders,
              {
                color: colors.primary,
                borderColor: error ? colors.danger : borderColor,
                paddingHorizontal:
                  outline === 'line' ? 5 : outline === 'borders' ? 15 : 0,
              },
              styles.input,
            ]}
            value={value}
            onChangeText={onChange}
            selectionColor={colors.primary}
            keyboardType={inputTypes}
            secureTextEntry={secureText}
            onBlur={onBlur}
          />
        )}
      />
      <TextMessageError
        message={err[name] && (err[name]?.message || 'error')}
      />
      {password && (
        <TouchableOpacity
          style={styles.btnPassword}
          onPress={() => setSecureText(!secureText)}>
          <Image
            source={
              secureText
                ? require('../../../assets/view.png')
                : require('../../../assets/hide.png')
            }
            style={{width: '100%'}}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;

Input.defaultProps = {
  placeholder: '',
  value: '',
  width: '100%',
  password: false,
  inputTypes: 'default',
};

const styles = StyleSheet.create({
  input: {
    height: 40,
  },
  line: {
    borderBottomWidth: 1,
  },
  borders: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 6,
  },
  btnPassword: {
    bottom: 25,
    position: 'absolute',
    right: 10,
    width: 25,
  },
  label: {
    paddingBottom: 5,
  },
});
