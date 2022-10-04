import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useTheme from '../../../hooks/useTheme';

interface Props {
  title: string;
  textAlign?: 'center' | 'auto' | 'left' | 'right' | 'justify' | undefined;
  secondWord?: string;
  divider?: boolean;
  fontSize: number;
}

const Title = ({title, secondWord, divider, textAlign, fontSize}: Props) => {
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      {divider && (
        <View style={[styles.divider, {backgroundColor: colors.secondary}]} />
      )}
      <Text
        style={[
          styles.title,
          {
            fontSize,
            textAlign: textAlign,
            width: !divider ? '100%' : 'auto',
            color: colors.text,
          },
        ]}>
        {title}
        {secondWord && (
          <Text style={[styles.secondWord, {color: colors.secondary}]}>
            {' '}
            {secondWord}
          </Text>
        )}
      </Text>
      {divider && (
        <View style={[styles.divider, {backgroundColor: colors.secondary}]} />
      )}
    </View>
  );
};

export default Title;

Title.defaultProps = {
  textAlign: undefined,
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
  secondWord: {
    fontWeight: 'normal',
  },
  divider: {
    alignSelf: 'center',
    flex: 1,
    height: 1,
  },
});
