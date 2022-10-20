import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  FlatList,
} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackAppParams} from '../navigation/StackAppNavigation';
import {size} from '../theme/fonts';
import ButtonPlus from '../components/atoms/ButtonPlus/ButtonPlus';
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
import useTheme from '../hooks/useTheme';
import {SubmitHandler, useForm} from 'react-hook-form';
import Input from '../components/atoms/Input/Input';
import {Required} from '../utils/validations';

interface Props
  extends NativeStackScreenProps<RootStackAppParams, 'addTodoScreen'> {}

interface TodoInputs {
  title: string;
}

const AddTodo = ({navigation: {navigate}}: Props) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
    resetField,
  } = useForm<TodoInputs>({
    defaultValues: {
      title: '',
    },
  });
  const {globalContainer, colors} = useTheme();
  const {updateTodo, deleteTodo, deleteAllTodos, deleteList, currentTodos} =
    useTodo();
  const {currentList} = useAppSelector(state => state.todoList);
  const {id, idUser, name, color} = currentList;
  const tasks = currentTodos.length;
  const tasksCompleted = currentTodos.filter(item => item.completed).length;

  const onSubmit: SubmitHandler<TodoInputs> = data => {
    createTodo({idUser, title: data.title, completed: false, idList: id});
    resetField('title');
  };

  return (
    <View style={[globalContainer.container]}>
      <View style={[styles.section, styles.header, {borderColor: color}]}>
        <Text style={[styles.title, {color: colors.text}]}>{name}</Text>
        <Text style={[styles.taskCount, {color: colors.textSecondary}]}>
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
            contentContainerStyle={{paddingVertical: 20}}
            showsVerticalScrollIndicator={false}
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
        <Input
          control={control}
          err={errors}
          name="title"
          outline="borders"
          placeholder="New todo"
          rules={Required}
          style={{flex: 1, marginRight: 10}}
          width="auto"
          borderColor={color}
        />
        <ButtonPlus
          onPress={handleSubmit(onSubmit)}
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
    fontSize: size.font30,
    fontWeight: '800',
  },
  taskCount: {
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
