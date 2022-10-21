import {StyleSheet} from 'react-native';
import React from 'react';
import ButtonAdjustableRadius from '../../atoms/ButtonAdjustableRadius/ButtonAdjustableRadius';
import useTheme from '../../../hooks/useTheme';

interface Props {
  background: string;
  title: string;
  onPress: () => void;
}

const ButtonActionsTodos = ({background, title, onPress}: Props) => {
  const {colors} = useTheme();
  return (
    <ButtonAdjustableRadius
      radius="straight"
      backgroundColor={background}
      title={title}
      onPress={onPress}
      width={80}
      titleColor={colors.background}
    />
  );
};

export default ButtonActionsTodos;

const styles = StyleSheet.create({});
