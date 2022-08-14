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
import {SubmitHandler, useForm} from 'react-hook-form';
import {EmailRequired, PasswordRequire} from '../utils/validations';

interface Props
  extends NativeStackScreenProps<RootStackAuthParams, 'signUpScreen'> {}

export interface SignUpForm {
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp = ({navigation: {navigate}}: Props) => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm<SignUpForm>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });
  const pwd = watch('password');

  const onSubmit: SubmitHandler<SignUpForm> = data => console.log(data);
  console.log(errors);

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
        width="100%"
        control={control}
        err={errors}
        name="email"
        rules={EmailRequired}
        inputTypes="email-address"
      />
      <Spacer vertical={10} />
      <InputLineLabel
        label="Password"
        width="100%"
        control={control}
        err={errors}
        name="password"
        password
        rules={PasswordRequire}
      />
      <Spacer vertical={10} />
      <InputLineLabel
        label="Confirm Password"
        width="100%"
        control={control}
        err={errors}
        name="confirmPassword"
        password
        rules={{
          validate: (value: string) => value === pwd || 'Password do not match',
        }}
      />
      <Spacer vertical={27} />
      <ButtonAdjustableRadius
        title="Sign Up"
        onPress={handleSubmit(onSubmit)}
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
