import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import AddList from '../screens/AddList';
import AddTodo from '../screens/AddTodo';
import {Todo, List} from '../store/slices/todoList/todoListSlice';

interface PropsAddTodo {
  ListData: List;
}

export type RootStackAppParams = {
  homeScreen: undefined;
  addListScreen: undefined;
  addTodoScreen: PropsAddTodo;
};

const Stack = createNativeStackNavigator<RootStackAppParams>();

const StackAppNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="homeScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="homeScreen" component={Home} />
      <Stack.Screen name="addListScreen" component={AddList} />
      <Stack.Screen name="addTodoScreen" component={AddTodo} />
    </Stack.Navigator>
  );
};

export default StackAppNavigation;
