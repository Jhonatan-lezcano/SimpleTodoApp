import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

export type RootStackAuthParams = {
  signInScreen: undefined;
  signUpScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackAuthParams>();

const StackAuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="signInScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="signInScreen" component={SignIn} />
      <Stack.Screen name="signUpScreen" component={SignUp} />
    </Stack.Navigator>
  );
};

export default StackAuthNavigation;
