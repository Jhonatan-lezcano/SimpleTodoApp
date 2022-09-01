import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAppDispatch, useAppSelector} from '../store/hooks/hooks';
import {onAuthStateChanged} from 'firebase/auth';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {colors} from '../theme/colors';
import {auth} from '../../config/firebase';
import {getUser} from '../store/slices/user/userSlice';
import {globalStyles} from '../theme/globalStyles';
import Title from '../components/atoms/Title/Title';
import SliderList from '../components/organisms/SliderList/SliderList';
import AddList from '../components/molecules/AddList/AddList';
import Spacer from '../components/atoms/Spacer/Spacer';
import {RootStackAppParams} from '../navigation/StackAppNavigation';
import ButtonMenu from '../components/atoms/ButtonMenu/ButtonMenu';
import MenuOptions from '../components/molecules/MenuOptions/MenuOptions';
import Menu from '../components/organisms/Menu/Menu';

interface Props
  extends NativeStackScreenProps<RootStackAppParams, 'homeScreen'> {}

const Home = ({navigation: {navigate}}: Props) => {
  const dispatch = useAppDispatch();
  const {listData} = useAppSelector(state => state.todoList);
  // const {id} = useAppSelector(state => state.user);

  onAuthStateChanged(auth, user => {
    if (user) {
      dispatch(getUser({id: user.uid}));
    }
  });

  return (
    <SafeAreaView
      style={[globalStyles.container, {marginTop: StatusBar.currentHeight}]}>
      <StatusBar
        backgroundColor={colors.background}
        translucent={true}
        barStyle="dark-content"
      />

      <Title title="Simple" secondWord="TodoList" divider />

      <Spacer vertical={48} />

      <AddList navigate={() => navigate('addListScreen')} />

      <Spacer vertical={48} />

      <SliderList boxes={listData} />
      <Menu />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
