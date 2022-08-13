import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {globalStyles} from '../theme/globalStyles';
import {colors} from '../theme/colors';
import {size} from '../theme/fonts';
import ButtonText from '../components/atoms/ButtonText/ButtonText';
import Spacer from '../components/atoms/Spacer/Spacer';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackAuthParams} from '../navigation/StackAuthNavigation';
import InputLineLabel from '../components/molecules/InputLineLabel/InputLineLabel';
import ButtonAdjustableRadius from '../components/atoms/ButtonAdjustableRadius/ButtonAdjustableRadius';

interface Props
  extends NativeStackScreenProps<RootStackAuthParams, 'signUpScreen'> {}

const SignUp = ({navigation: {navigate}}: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <KeyboardAvoidingView
      style={[globalStyles.container, {paddingHorizontal: 30}]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Text style={styles.title}>Get Started</Text>
      <View style={{flexDirection: 'row', width: '100%', paddingTop: 5}}>
        <Text style={{color: colors.textSecondary}}>
          Already have a account?
        </Text>
        <Spacer horizontal={5} />
        <ButtonText
          title="Sign in"
          titleColor={colors.primary}
          onPress={() => navigate('signInScreen')}
        />
      </View>
      <Spacer vertical={50} />
      <InputLineLabel
        label="Email"
        onChange={setEmail}
        value={email}
        width="100%"
      />
      <Spacer vertical={27} />
      <InputLineLabel
        label="Password"
        onChange={setPassword}
        value={password}
        width="100%"
        password
      />
      <Spacer vertical={27} />
      <InputLineLabel
        label="Confirm Password"
        onChange={setConfirmPassword}
        value={confirmPassword}
        width="100%"
        password
      />
      <Spacer vertical={27} />
      <ButtonAdjustableRadius
        title="Sign Up"
        onPress={() => console.log('sign up with Email')}
        backgroundColor={colors.primary}
        titleColor={colors.background}
      />
      <Spacer vertical={20} />
      <Text style={{color: colors.textSecondary}}>
        By Sign up you agree to our{' '}
        <Text style={styles.terms}>Privacy Policy</Text> and{' '}
        <Text style={styles.terms}>Terms and Condition</Text>
      </Text>
    </KeyboardAvoidingView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  title: {
    color: colors.primary,
    fontSize: size.font28,
    fontWeight: '700',
    width: '100%',
  },
  terms: {
    textDecorationLine: 'underline',
  },
});
