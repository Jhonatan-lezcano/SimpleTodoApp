import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {size} from '../../../theme/fonts';
import useTheme from '../../../hooks/useTheme';

interface Props {
  Animation?: () => JSX.Element;
  text: string;
}

const NoItemsFound = ({Animation, text}: Props) => {
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      {Animation && <Animation />}
      <Text style={[styles.text, {color: colors.text}]}>{text}</Text>
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
    fontSize: size.font24,
    textAlign: 'center',
  },
});
