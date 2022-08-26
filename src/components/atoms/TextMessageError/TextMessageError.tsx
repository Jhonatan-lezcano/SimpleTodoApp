import {Text, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../../../theme/colors';
import {size} from '../../../theme/fonts';

interface Props {
  message: string;
}

const TextMessageError = ({message}: Props) => {
  return <Text style={styles.textStyle}>{message}</Text>;
};

export default TextMessageError;

const styles = StyleSheet.create({
  textStyle: {
    color: colors.tertiary,
    fontSize: size.font12,
    height: 16,
  },
});
