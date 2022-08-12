import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../theme/colors';
import InputLine from '../components/atoms/InputLine/InputLine';
import {globalStyles} from '../theme/globalStyles';
import {size} from '../theme/fonts';

const SignIn = () => {
  const [name, setName] = useState('second');
  return (
    <View style={[globalStyles.container, {paddingHorizontal: 30}]}>
      <Text style={styles.title}>Login</Text>
      <InputLine placeholder="full Name" value={name} onChange={setName} />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  title: {
    alignSelf: 'flex-start',
    color: colors.primary,
    fontSize: size.font36,
    fontWeight: '700',
    width: '100%',
  },
});
