import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {colors} from '../../../theme/colors';
import InputLine, {InputTypes} from '../../atoms/InputLine/InputLine';

interface Props {
  value: string;
  onChange: Function;
  width: string | number;
  label: string;
  inputTypes?: InputTypes;
  password?: boolean;
}

const InputLineLabel = ({
  value,
  onChange,
  width,
  label,
  inputTypes,
  password,
}: Props) => {
  return (
    <View style={{width}}>
      <Text style={styles.label}>{label}</Text>
      <InputLine
        value={value}
        onChange={onChange}
        inputTypes={inputTypes}
        password={password}
      />
      <TouchableOpacity>
        <Image source={require('../../../assets/view.png')} />
      </TouchableOpacity>
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
});
