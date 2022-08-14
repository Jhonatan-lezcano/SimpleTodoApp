import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SignUpForm} from '../../../screens/SignUp';

import {colors} from '../../../theme/colors';
import InputLine, {InputTypes} from '../../atoms/InputLine/InputLine';
import {size} from '../../../theme/fonts';

interface Props {
  control: SignUpForm | any;
  err: any;
  inputTypes?: InputTypes;
  label: string;
  name: string;
  password?: boolean;
  rules?: any;
  width: string | number;
}
const InputLineLabel = ({
  control,
  err,
  name,
  width,
  label,
  inputTypes,
  password,
  rules,
}: Props) => {
  const [secureText, setSecureText] = useState(password);
  return (
    <View style={{width}}>
      <Text style={styles.label}>{label}</Text>
      <InputLine
        inputTypes={inputTypes}
        password={secureText}
        control={control}
        err={err}
        name={name}
        rules={rules}
      />
      <Text style={styles.error}>
        {err[name] && (err[name]?.message || 'error')}
      </Text>
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

export default InputLineLabel;

InputLineLabel.defaultProps = {
  inputTypes: 'default',
  label: '',
  password: false,
  value: '',
  width: '50%',
};

const styles = StyleSheet.create({
  label: {
    color: colors.textSecondary,
    paddingBottom: 5,
  },
  error: {
    color: colors.tertiary,
    fontSize: size.font12,
    height: 16,
  },
  btnPassword: {
    bottom: 25,
    position: 'absolute',
    right: 10,
    width: 25,
  },
});
