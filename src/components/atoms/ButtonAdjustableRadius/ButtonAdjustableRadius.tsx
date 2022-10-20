import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {size} from '../../../theme/fonts';
import useTheme from '../../../hooks/useTheme';

interface Props {
  radius: 'circular' | 'semicircular' | 'straight';
  title: string;
  onPress: () => void;
  width: string | number;
  shadow?: boolean;
  backgroundColor: string;
  titleColor: string;
}

const ButtonAdjustableRadius = ({
  radius,
  title,
  onPress,
  width,
  shadow,
  backgroundColor,
  titleColor,
}: Props) => {
  const {colors} = useTheme();
  const shadowButton = {
    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  };
  return (
    <TouchableOpacity
      style={[
        styles.button,
        shadow && shadowButton,
        {
          borderRadius:
            radius === 'circular' ? 30 : radius === 'semicircular' ? 10 : 0,
          backgroundColor,
          width,
        },
      ]}
      onPress={onPress}>
      <Text style={[styles.text, {color: titleColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonAdjustableRadius;

ButtonAdjustableRadius.defaultProps = {
  radius: 'circular',
  width: '100%',
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    padding: 16,
  },
  text: {
    fontSize: size.font14,
  },
});
