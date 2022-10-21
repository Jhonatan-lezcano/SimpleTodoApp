import React, {useEffect} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAppDispatch} from '../store/hooks/hooks';
import {onAuthStateChanged, signOut} from 'firebase/auth';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {auth} from '../../config/firebase';
import {getUser} from '../store/slices/user/userSlice';
import Title from '../components/atoms/Title/Title';
import SliderList from '../components/organisms/SliderList/SliderList';
import AddList from '../components/molecules/AddList/AddList';
import Spacer from '../components/atoms/Spacer/Spacer';
import {RootStackAppParams} from '../navigation/StackAppNavigation';
import Menu from '../components/organisms/Menu/Menu';
import {size} from '../theme/fonts';
import {getCurrentList, List} from '../store/slices/todoList/todoListSlice';
import useList from '../hooks/useList';
import ItemMenuOption from '../components/atoms/ItemMenuOption/ItemMenuOption';
import useTheme from '../hooks/useTheme';
import {isAuth} from '../store/slices/auth/authSlice';

interface Props
  extends NativeStackScreenProps<RootStackAppParams, 'homeScreen'> {}

const Home = ({navigation: {navigate}}: Props) => {
  const dispatch = useAppDispatch();
  const {listData, isLoading, todosData} = useList();
  const {changeTheme, globalContainer, colors, dark} = useTheme();

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        dispatch(getUser(user.uid));
      }
    });
  }, []);

  console.log('render');

  const navigateAddList = () => navigate('addListScreen');

  const navigateAddTodo = (ListData: List) => {
    dispatch(getCurrentList(ListData));
    navigate('addTodoScreen');
  };

  const signOutSession = () => {
    signOut(auth)
      .then(() => {
        dispatch(isAuth());
      })
      .catch(error => console.log(error));
  };
  return (
    <SafeAreaView style={[globalContainer.container]}>
      <StatusBar
        backgroundColor={colors.background}
        translucent={true}
        barStyle={dark ? 'light-content' : 'dark-content'}
      />

      <Title
        title="Simple"
        secondWord="TodoList"
        divider
        fontSize={size.font34}
      />

      <Spacer vertical={48} />

      <AddList navigate={navigateAddList} />

      <Spacer vertical={48} />

      <SliderList
        boxes={listData}
        loading={isLoading}
        navigate={navigateAddTodo}
        todos={todosData}
      />
      <Menu>
        <ItemMenuOption
          actionOption={changeTheme}
          textOption={dark ? 'Light Mode' : 'Dark Mode'}
          divider
          iconSrc={
            dark
              ? require('../assets/sol.png')
              : require('../assets/nightMode.png')
          }
        />
        <ItemMenuOption
          actionOption={signOutSession}
          textOption="Sign out"
          iconSrc={require('../assets/exit.png')}
        />
      </Menu>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
