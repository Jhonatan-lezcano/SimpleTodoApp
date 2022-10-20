import {KeyboardAvoidingView, Platform, StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';
import {size} from '../theme/fonts';
import Spacer from '../components/atoms/Spacer/Spacer';
import ButtonAdjustableRadius from '../components/atoms/ButtonAdjustableRadius/ButtonAdjustableRadius';
import ButtonText from '../components/atoms/ButtonText/ButtonText';
import {useForm, SubmitHandler} from 'react-hook-form';
import {EmailRequired, PasswordRequire} from '../utils/validations';
import {signIn} from '../firebase/services/login/signIn';
import {useAppDispatch} from '../store/hooks/hooks';
import {isAuth} from '../store/slices/auth/authSlice';
import TextMessageError from '../components/atoms/TextMessageError/TextMessageError';
import Input from '../components/atoms/Input/Input';
import useTheme from '../hooks/useTheme';

interface SignInForm {
  email: string;
  password: string;
}

const SignIn = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<SignInForm>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const [errorSignIn, setErrorSignIn] = useState('');
  const dispatch = useAppDispatch();
  const {colors, globalContainer} = useTheme();

  const authChange = () => {
    dispatch(isAuth());
  };

  const errorSignInMessage = (message: string) => setErrorSignIn(message);

  const onSubmit: SubmitHandler<SignInForm> = data => {
    signIn(data, authChange, errorSignInMessage);
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={[globalContainer.container, {paddingHorizontal: 30}]}>
      <Text style={[styles.title, {color: colors.primary}]}>Login</Text>
      <Spacer vertical={20} />
      <Input
        control={control}
        err={errors}
        inputTypes="email-address"
        label="Email"
        name="email"
        outline="line"
        rules={EmailRequired}
        borderColor={colors.primary}
      />
      <Spacer vertical={40} />
      <Input
        control={control}
        err={errors}
        label="Password"
        name="password"
        outline="line"
        password
        rules={PasswordRequire}
        borderColor={colors.primary}
      />
      <Spacer vertical={18} />
      <TextMessageError message={errorSignIn} />
      <Spacer vertical={34} />
      <ButtonAdjustableRadius
        title="Sign in"
        radius="circular"
        onPress={handleSubmit(onSubmit)}
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
    fontSize: size.font36,
    fontWeight: '700',
    width: '100%',
  },
});
