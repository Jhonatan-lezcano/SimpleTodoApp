import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ButtonAdjustableRadius from '../components/atoms/ButtonAdjustableRadius/ButtonAdjustableRadius';
import {size} from '../theme/fonts';
import Spacer from '../components/atoms/Spacer/Spacer';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackAuthParams} from '../navigation/StackAuthNavigation';
import useTheme from '../hooks/useTheme';

interface Props
  extends NativeStackScreenProps<RootStackAuthParams, 'InitialScreen'> {}

const InitialLoginScreen = ({navigation: {navigate}}: Props) => {
  const {colors, globalContainer} = useTheme();
  return (
    <View style={[globalContainer.container, {paddingHorizontal: 30}]}>
      <View style={styles.logo}>
        <Text style={{fontSize: size.font38, color: colors.secondary}}>
          Logo app
        </Text>
      </View>
      <Spacer vertical={20} />
      <ButtonAdjustableRadius
        title="Sign Up With Google"
        radius="semicircular"
        backgroundColor={colors.primary}
        titleColor={colors.background}
        onPress={() => console.log('login with google')}
        shadow
      />
      <Spacer vertical={25} />
      <ButtonAdjustableRadius
        title="Sign Up With Email"
        radius="semicircular"
        backgroundColor={colors.background}
        titleColor={colors.text}
        onPress={() => navigate('signUpScreen')}
        shadow
      />
      <Spacer vertical={25} />
      <ButtonAdjustableRadius
        title=" Sign In"
        radius="semicircular"
        backgroundColor={colors.background}
        titleColor={colors.text}
        onPress={() => navigate('signInScreen')}
        shadow
      />
    </View>
  );
};

export default InitialLoginScreen;

const styles = StyleSheet.create({
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    width: '100%',
    borderWidth: 1,
    borderColor: 'red',
  },
});
