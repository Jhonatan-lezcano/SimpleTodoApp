import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../theme/colors';
import {size} from '../../../theme/fonts';
import AnimationView from '../../atoms/AnimationView/AnimationView';
import animationArrow from '../../../assets/LottieFiles/todoAnimation.json';

interface Props {
  Animation?: () => JSX.Element;
  text: string;
}

const NoItemsFound = ({Animation, text}: Props) => {
  return (
    <View style={styles.container}>
      {Animation && <Animation />}
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default NoItemsFound;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    width: '100%',
  },
  text: {
    color: colors.text,
    fontSize: size.font24,
    textAlign: 'center',
  },
});
