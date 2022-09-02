import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../theme/colors';
import {size} from '../../../theme/fonts';

interface Props {
  title: string;
  textAlign?: 'center' | 'auto' | 'left' | 'right' | 'justify' | undefined;
  secondWord?: string;
  divider?: boolean;
  fontSize: number;
}

const Title = ({title, secondWord, divider, textAlign, fontSize}: Props) => {
  return (
    <View style={styles.container}>
      {divider && <View style={styles.divider} />}
      <Text
        style={[
          styles.title,
          {
            fontSize,
            textAlign: textAlign,
            width: !divider ? '100%' : 'auto',
          },
        ]}>
        {title}
        {secondWord && <Text style={styles.secondWord}> {secondWord}</Text>}
      </Text>
      {divider && <View style={styles.divider} />}
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
    color: colors.text,
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
  secondWord: {
    color: colors.secondary,
    fontWeight: 'normal',
  },
  divider: {
    alignSelf: 'center',
    backgroundColor: colors.secondary,
    flex: 1,
    height: 1,
  },
});
