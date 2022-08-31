import React, {useEffect} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';

import {colors} from '../theme/colors';
import {useAppDispatch, useAppSelector} from '../store/hooks/hooks';
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from '../../config/firebase';
import {getUser} from '../store/slices/user/userSlice';
import {globalStyles} from '../theme/globalStyles';
import Title from '../components/atoms/Title/Title';
import {SafeAreaView} from 'react-native-safe-area-context';
import SliderList from '../components/organisms/SliderList/SliderList';
import AddList from '../components/molecules/AddList/AddList';
import Spacer from '../components/atoms/Spacer/Spacer';

const Home = () => {
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

      <AddList />

      <Spacer vertical={48} />

      <SliderList boxes={listData} />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
