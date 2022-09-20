import React, {useEffect} from 'react';
import {StatusBar, StyleSheet, Text} from 'react-native';
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
import Menu from '../components/organisms/Menu/Menu';
import {size} from '../theme/fonts';
import {List} from '../store/slices/todoList/todoListSlice';
import useTodoList from '../hooks/useTodoList';
import useTodo from '../hooks/useTodo';
import ItemMenuOption from '../components/atoms/ItemMenuOption/ItemMenuOption';

interface Props
  extends NativeStackScreenProps<RootStackAppParams, 'homeScreen'> {}

const Home = ({navigation: {navigate}}: Props) => {
  const dispatch = useAppDispatch();
  const {listData, isLoading} = useTodoList();
  const {todosData} = useTodo();
  const {id} = useAppSelector(state => state.user);

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user && id === '') {
        console.log('se ejecuta');
        dispatch(getUser(user.uid));
      }
    });
    console.log('first');
  }, []);

  const navigateAddList = () => navigate('addListScreen');

  const navigateAddTodo = (ListData: List) =>
    navigate('addTodoScreen', {ListData});

  return (
    <SafeAreaView style={[globalStyles.container]}>
      <StatusBar
        backgroundColor={colors.background}
        translucent={true}
        barStyle="dark-content"
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
          actionOption={() => console.log('Theme')}
          textOption="Theme"
          divider
        />
        <ItemMenuOption
          actionOption={() => console.log('Sign out')}
          textOption="Sign out"
        />
      </Menu>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
