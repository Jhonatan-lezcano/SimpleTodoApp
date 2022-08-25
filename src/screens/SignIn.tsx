import {KeyboardAvoidingView, Platform, StyleSheet, Text} from 'react-native';
import React from 'react';
import {colors} from '../theme/colors';
import {globalStyles} from '../theme/globalStyles';
import {size} from '../theme/fonts';
import Spacer from '../components/atoms/Spacer/Spacer';
import InputLineLabel from '../components/molecules/InputLineLabel/InputLineLabel';
import ButtonAdjustableRadius from '../components/atoms/ButtonAdjustableRadius/ButtonAdjustableRadius';
import ButtonText from '../components/atoms/ButtonText/ButtonText';
import {useForm, SubmitHandler} from 'react-hook-form';
import {EmailRequired, PasswordRequire} from '../utils/validations';
import {signIn} from '../firebase/services/login/signIn';
import {useAppDispatch} from '../store/hooks/hooks';
import {isAuth} from '../store/slices/auth/authSlice';

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
  const dispatch = useAppDispatch();

  const authChange = () => {
    dispatch(isAuth());
  };

  const onSubmit: SubmitHandler<SignInForm> = data => {
    signIn(data, authChange);
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={[globalStyles.container, {paddingHorizontal: 30}]}>
      <Text style={styles.title}>Login</Text>
      <Spacer vertical={20} />
      <InputLineLabel
        label="Email"
        width="100%"
        inputTypes="email-address"
        control={control}
        err={errors}
        rules={EmailRequired}
        name="email"
      />
      <Spacer vertical={40} />
      <InputLineLabel
        label="Password"
        width="100%"
        password
        name="password"
        control={control}
        err={errors}
        rules={PasswordRequire}
      />
      <Spacer vertical={50} />
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
    color: colors.primary,
    fontSize: size.font36,
    fontWeight: '700',
    width: '100%',
  },
});
