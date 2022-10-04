import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackAppNavigation from './src/navigation/StackAppNavigation';
import StackAuthNavigation from './src/navigation/StackAuthNavigation';
import {useAppSelector} from './src/store/hooks/hooks';
import {View} from 'react-native';
import useTheme from './src/hooks/useTheme';

const Main = () => {
  const {userAuth} = useAppSelector(state => state.authUser);
  const {colors} = useTheme();
  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <NavigationContainer>
        {userAuth ? <StackAppNavigation /> : <StackAuthNavigation />}
      </NavigationContainer>
    </View>
  );
};

export default Main;
