import {Text, StyleSheet} from 'react-native';
import React from 'react';
import {size} from '../../../theme/fonts';
import useTheme from '../../../hooks/useTheme';

interface Props {
  message: any;
}

const TextMessageError = ({message}: Props) => {
  const {colors} = useTheme();
  return (
    <Text style={[styles.textStyle, {color: colors.tertiary}]}>{message}</Text>
  );
};

export default TextMessageError;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: size.font12,
    height: 16,
  },
});
