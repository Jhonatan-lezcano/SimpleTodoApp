import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {List, Todo} from '../../../store/slices/todoList/todoListSlice';
import {colors} from '../../../theme/colors';
import {size} from '../../../theme/fonts';

interface Props {
  listData: List;
  index: number;
  navigate: Function;
  todos: Todo[];
}

const ItemSlider = ({listData, index, navigate, todos}: Props) => {
  const {name, color, id} = listData;
  const todosInfo = todos.filter(item => item.idList === id);
  const completed = todosInfo.filter(item => item.completed).length;
  const pending = todosInfo.length - completed;

  return (
    <View
      style={[
        styles.listContainer,
        {
          marginLeft: index > 0 ? 0 : 32,
        },
      ]}>
      <TouchableOpacity
        style={[styles.list, {backgroundColor: color}]}
        onPress={() => navigate(listData)}>
        <Text style={[styles.listTitle, styles.textColor]} numberOfLines={1}>
          {name}
        </Text>
        <View style={styles.containerInfo}>
          <Text style={[styles.textColor, styles.count]}>{completed}</Text>
          <Text style={[styles.textColor]}>Completed</Text>
        </View>
        <View style={styles.containerInfo}>
          <Text style={[styles.textColor, styles.count]}>{pending}</Text>
          <Text style={[styles.textColor]}>Pending to do</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ItemSlider;

const styles = StyleSheet.create({
  listContainer: {
    height: 275,
    marginHorizontal: 12,
    marginVertical: 18,
    width: 200,
  },
  list: {
    alignItems: 'center',
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 32,
    width: '100%',
    height: '100%',
  },
  listTitle: {
    fontSize: size.font22,
    fontWeight: '700',
  },
  textColor: {
    color: colors.background,
  },
  containerInfo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    fontSize: size.font48,
    fontWeight: '100',
  },
});
