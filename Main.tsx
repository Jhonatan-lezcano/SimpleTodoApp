import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackAppNavigation from './src/navigation/StackAppNavigation';
import StackAuthNavigation from './src/navigation/StackAuthNavigation';

const Main = () => {
  const userAuth = false;
  return (
    <NavigationContainer>
      {userAuth ? <StackAppNavigation /> : <StackAuthNavigation />}
    </NavigationContainer>
  );
};

export default Main;
