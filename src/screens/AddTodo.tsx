import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  FlatList,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackAppParams} from '../navigation/StackAppNavigation';
import {size} from '../theme/fonts';
import {colors} from '../theme/colors';
import InputBorder from '../components/atoms/InputBorder/InputBorder';
import ButtonPlus from '../components/atoms/ButtonPlus/ButtonPlus';
import {globalStyles} from '../theme/globalStyles';
import {createTodo} from '../firebase/services/app/todosServices';
import Todos from '../components/atoms/Todo/Todo';
import useTodo from '../hooks/useTodo';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Menu from '../components/organisms/Menu/Menu';
import ItemMenuOption from '../components/atoms/ItemMenuOption/ItemMenuOption';
import {useAppSelector} from '../store/hooks/hooks';
import NoItemsFound from '../components/molecules/NoItemsFound/NoItemsFound';
import AnimationView from '../components/atoms/AnimationView/AnimationView';
import animationTodo from '../assets/LottieFiles/todoAnimation.json';

interface Props
  extends NativeStackScreenProps<RootStackAppParams, 'addTodoScreen'> {}

const AddTodo = ({navigation: {navigate}}: Props) => {
  const [title, setTitle] = useState('');
  const {updateTodo, deleteTodo, deleteAllTodos, deleteList, currentTodos} =
    useTodo();
  const {currentList} = useAppSelector(state => state.todoList);
  const {id, idUser, name, color} = currentList;
  const tasks = currentTodos.length;
  const tasksCompleted = currentTodos.filter(item => item.completed).length;

  const onSubmit = () => {
    if (title === '') return console.log('este campo no puede estar vacio');

    createTodo({idUser, title, completed: false, idList: id});
    setTitle('');
  };

  return (
    <View style={[globalStyles.container]}>
      <View style={[styles.section, styles.header, {borderColor: color}]}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.taskCount}>
          {tasksCompleted}/{tasks}
        </Text>
      </View>
      {currentTodos.length > 0 ? (
        <GestureHandlerRootView style={[styles.section, {flex: 3}]}>
          <FlatList
            data={currentTodos}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <Todos
                todo={item}
                updateTodo={updateTodo}
                deleteTodo={deleteTodo}
              />
            )}
            contentContainerStyle={{paddingVertical: 60}}
          />
        </GestureHandlerRootView>
      ) : (
        <View style={[styles.section, {flex: 3, justifyContent: 'center'}]}>
          <NoItemsFound
            Animation={() =>
              AnimationView({animation: animationTodo, size: '80%'})
            }
            text="No to-dos found, start creating your to-dos :)"
          />
        </View>
      )}
      <KeyboardAvoidingView style={[styles.section, styles.footer]}>
        <InputBorder
          placeHolder="New todo"
          onChange={setTitle}
          value={title}
          style={{flex: 1, marginRight: 10}}
        />
        <ButtonPlus
          onPress={() => onSubmit()}
          padding={12}
          sizePlus={size.font16}
          background={color}
          colorPlus="white"
        />
      </KeyboardAvoidingView>
      <Menu>
        <ItemMenuOption
          textOption="Delete list"
          actionOption={() => {
            deleteList(id);
            navigate('homeScreen');
          }}
          divider
        />
        <ItemMenuOption
          textOption="Delete All todos"
          actionOption={() => {
            deleteAllTodos(id);
          }}
        />
      </Menu>
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  section: {
    flex: 1,
    alignSelf: 'stretch',
  },
  header: {
    justifyContent: 'flex-end',
    marginLeft: 60,
    borderBottomWidth: 3,
  },
  title: {
    color: colors.text,
    fontSize: size.font30,
    fontWeight: '800',
  },
  taskCount: {
    color: colors.textSecondary,
    fontWeight: '600',
    marginTop: 4,
    marginBottom: 16,
  },
  footer: {
    paddingHorizontal: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addTodo: {
    borderRadius: 4,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
});
