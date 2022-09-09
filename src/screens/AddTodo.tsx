import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackAppParams} from '../navigation/StackAppNavigation';
import {size} from '../theme/fonts';
import {colors} from '../theme/colors';
import InputBorder from '../components/atoms/InputBorder/InputBorder';
import ButtonPlus from '../components/atoms/ButtonPlus/ButtonPlus';
import {globalStyles} from '../theme/globalStyles';
import Todo from '../components/atoms/Todo/Todo';

interface Props
  extends NativeStackScreenProps<RootStackAppParams, 'addTodoScreen'> {}

const mockTodos = [
  {
    id: 1,
    title: 'Book Flight',
    complete: false,
  },
  {
    id: 2,
    title: 'Book Flight',
    complete: true,
  },
  {
    id: 3,
    title: 'Book Flight',
    complete: false,
  },
  {
    id: 4,
    title: 'Book Flight',
    complete: false,
  },
];

const AddTodo = ({route}: Props) => {
  const [newTodo, setNewTodo] = useState('');
  const {
    ListData: {color, name},
  } = route.params;
  console.log(route.params);
  return (
    <View style={[globalStyles.container]}>
      <View style={[styles.section, styles.header, {borderColor: color}]}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.taskCount}>1/3</Text>
      </View>

      <View style={[styles.section, {flex: 3}]}>
        <FlatList
          data={mockTodos}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <Todo todo={item} />}
          contentContainerStyle={{paddingHorizontal: 32, paddingVertical: 60}}
        />
      </View>
      <KeyboardAvoidingView style={[styles.section, styles.footer]}>
        <InputBorder
          placeHolder="New todo"
          onChange={setNewTodo}
          value={newTodo}
          style={{flex: 1, marginRight: 10}}
        />
        <ButtonPlus
          onPress={() => console.log('nueva tarea')}
          padding={12}
          sizePlus={size.font16}
          background={color}
          colorPlus="white"
        />
      </KeyboardAvoidingView>
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
