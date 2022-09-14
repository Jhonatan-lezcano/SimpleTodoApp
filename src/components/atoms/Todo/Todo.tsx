import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Todo} from '../../../store/slices/todoList/todoListSlice';
import {colors} from '../../../theme/colors';
import {size} from '../../../theme/fonts';
import Spacer from '../Spacer/Spacer';

interface Props {
  todo: Todo;
  updateTodo: (data: Todo) => void;
}

const Todos = ({todo, updateTodo}: Props) => {
  const {title, completed} = todo;
  return (
    <View style={styles.todoContainer}>
      <TouchableOpacity onPress={() => updateTodo(todo)}>
        <View
          style={{
            backgroundColor: completed
              ? colors.textSecondary
              : colors.background,
            borderWidth: 1,
            borderColor: colors.textSecondary,
            height: 18,
            width: 18,
          }}></View>
      </TouchableOpacity>
      <Spacer horizontal={15} />
      <Text
        style={[
          styles.title,
          {
            color: completed ? colors.textSecondary : colors.black,
            textDecorationLine: completed ? 'line-through' : 'none',
          },
        ]}>
        {title}
      </Text>
    </View>
  );
};

export default Todos;

const styles = StyleSheet.create({
  todoContainer: {
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: size.font16,
    fontWeight: '700',
  },
});
