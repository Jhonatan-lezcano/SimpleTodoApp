import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

interface Props {
  title: string;
  titleColor: string;
  onPress: Function;
}

const ButtonText = ({title, titleColor, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <Text style={{color: titleColor}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonText;
