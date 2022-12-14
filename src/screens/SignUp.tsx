import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {size} from '../theme/fonts';
import ButtonText from '../components/atoms/ButtonText/ButtonText';
import Spacer from '../components/atoms/Spacer/Spacer';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackAuthParams} from '../navigation/StackAuthNavigation';
import ButtonAdjustableRadius from '../components/atoms/ButtonAdjustableRadius/ButtonAdjustableRadius';
import {SubmitHandler, useForm} from 'react-hook-form';
import {EmailRequired, PasswordRequire} from '../utils/validations';
import {registerUser} from '../firebase/services/login/registerUser';
import Input from '../components/atoms/Input/Input';
import useTheme from '../hooks/useTheme';

interface Props
  extends NativeStackScreenProps<RootStackAuthParams, 'signUpScreen'> {}

export interface SignUpForm {
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp = ({navigation: {navigate}}: Props) => {
  const {
    control,
    handleSubmit,
    formState: {errors, isSubmitSuccessful},
    formState,
    watch,
    reset,
  } = useForm<SignUpForm>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });
  const {colors, globalContainer} = useTheme();
  const pwd = watch('password');

  const onSubmit: SubmitHandler<SignUpForm> = data => {
    registerUser(data);
    navigate('signInScreen');
  };

  useEffect(() => {
    if (isSubmitSuccessful)
      reset({email: '', password: '', confirmPassword: ''});
  }, [formState]);

  return (
    <KeyboardAvoidingView
      style={[globalContainer.container, {paddingHorizontal: 30}]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Text style={[styles.title, {color: colors.primary}]}>Get Started</Text>
      <View style={{flexDirection: 'row', width: '100%', paddingTop: 5}}>
        <Text style={{color: colors.text}}>Already have a account?</Text>
        <Spacer horizontal={5} />
        <ButtonText
          title="Sign in"
          titleColor={colors.primary}
          onPress={() => navigate('signInScreen')}
        />
      </View>
      <Spacer vertical={50} />
      <Input
        label="Email"
        control={control}
        err={errors}
        name="email"
        rules={EmailRequired}
        inputTypes="email-address"
        outline="line"
        borderColor={colors.primary}
      />
      <Spacer vertical={10} />
      <Input
        label="Password"
        control={control}
        err={errors}
        name="password"
        password
        rules={PasswordRequire}
        outline="line"
        borderColor={colors.primary}
      />
      <Spacer vertical={10} />
      <Input
        label="Confirm Password"
        control={control}
        err={errors}
        name="confirmPassword"
        password
        rules={{
          validate: (value: string) => value === pwd || 'Password do not match',
        }}
        outline="line"
        borderColor={colors.primary}
      />
      <Spacer vertical={27} />
      <ButtonAdjustableRadius
        title="Sign Up"
        onPress={handleSubmit(onSubmit)}
        backgroundColor={colors.primary}
        titleColor={colors.background}
      />
      <Spacer vertical={20} />
      <Text style={{color: colors.text}}>
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
    fontSize: size.font28,
    fontWeight: '700',
    width: '100%',
  },
  terms: {
    textDecorationLine: 'underline',
  },
});
