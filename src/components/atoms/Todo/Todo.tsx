import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Animated} from 'react-native';
import {Todo} from '../../../store/slices/todoList/todoListSlice';
import {colors} from '../../../theme/colors';
import {size} from '../../../theme/fonts';
import Spacer from '../Spacer/Spacer';

import Swipeable from 'react-native-gesture-handler/Swipeable';
import ButtonAdjustableRadius from '../ButtonAdjustableRadius/ButtonAdjustableRadius';

const rightActions = (
  onDeleteHandler: () => void,
  progress: Animated.AnimatedInterpolation,
) => {
  const opacity = progress.interpolate({
    inputRange: [-100, -30, 0],
    outputRange: [1, 0.7, 0],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View style={{opacity}}>
      <ButtonAdjustableRadius
        radius="straight"
        backgroundColor={colors.tertiary}
        title="Delete"
        onPress={onDeleteHandler}
        width={80}
        titleColor={colors.background}
      />
    </Animated.View>
  );
};

interface Props {
  todo: Todo;
  updateTodo: (data: Todo) => void;
  deleteTodo: (id: string) => void;
}

const Todos = ({todo, updateTodo, deleteTodo}: Props) => {
  const {title, completed, id} = todo;

  const onDeleteHandler = () => deleteTodo(id);

  return (
    <Swipeable
      renderRightActions={(dragX, progress) =>
        rightActions(onDeleteHandler, progress)
      }>
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
    </Swipeable>
  );
};

export default Todos;

const styles = StyleSheet.create({
  todoContainer: {
    paddingVertical: 15,
    paddingLeft: 32,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: size.font16,
    fontWeight: '700',
  },
});
