import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../theme/colors';
import InputLine from '../components/atoms/InputLine/InputLine';
import {globalStyles} from '../theme/globalStyles';
import {size} from '../theme/fonts';
import Spacer from '../components/atoms/Spacer/Spacer';
import InputLineLabel from '../components/molecules/InputLineLabel/InputLineLabel';
import ButtonAdjustableRadius from '../components/atoms/ButtonAdjustableRadius/ButtonAdjustableRadius';
import ButtonText from '../components/atoms/ButtonText/ButtonText';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={[globalStyles.container, {paddingHorizontal: 30}]}>
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
      <Spacer vertical={50} />
      <ButtonAdjustableRadius
        title="Sign in"
        radius="circular"
        onPress={() => console.log('Sign in')}
        backgroundColor={colors.primary}
        titleColor={colors.background}
        width="100%"
      />
      <Spacer vertical={15} />
      <ButtonText
        title="Forgot Password?"
        titleColor={colors.primary}
        onPress={() => console.log('Forgot Password?')}
      />
    </KeyboardAvoidingView>
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
