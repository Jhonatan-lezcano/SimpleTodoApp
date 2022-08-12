import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../theme/colors';
import InputLine from '../components/atoms/InputLine/InputLine';
import {globalStyles} from '../theme/globalStyles';
import {size} from '../theme/fonts';
import Spacer from '../components/atoms/Spacer/Spacer';
import InputLineLabel from '../components/molecules/InputLineLabel/InputLineLabel';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={[globalStyles.container, {paddingHorizontal: 30}]}>
      <Text style={styles.title}>Login</Text>
      <Spacer vertical={20} />
      <InputLineLabel
        label="Email"
        value={email}
        onChange={setEmail}
        width="100%"
        inputTypes="email-address"
      />
      <Spacer vertical={40} />
      <InputLineLabel
        label="Password"
        value={password}
        onChange={setPassword}
        width="100%"
        password
      />
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
