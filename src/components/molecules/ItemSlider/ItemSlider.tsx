import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {List, Todo} from '../../../store/slices/todoList/todoListSlice';
import {size} from '../../../theme/fonts';
import useList from '../../../hooks/useList';
import useTheme from '../../../hooks/useTheme';

interface Props {
  listData: List;
  index: number;
  navigate: Function;
  todos: Todo[];
}

const ItemSlider = ({listData, index, navigate, todos}: Props) => {
  const {colors} = useTheme();
  const {name, color, id} = listData;
  const todosInfo = todos.filter(item => item.idList === id);
  const completed = todosInfo.filter(item => item.completed).length;
  const pending = todosInfo.length - completed;

  const textColor = {
    color: colors.white,
  };

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
        onPress={() => navigate(listData)}
        activeOpacity={0.8}>
        <Text style={[styles.listTitle, textColor]} numberOfLines={1}>
          {name}
        </Text>
        <View style={styles.containerInfo}>
          <Text style={[textColor, styles.count]}>{completed}</Text>
          <Text style={[textColor]}>Completed</Text>
        </View>
        <View style={styles.containerInfo}>
          <Text style={[textColor, styles.count]}>{pending}</Text>
          <Text style={[textColor]}>Pending to do</Text>
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
  containerInfo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    fontSize: size.font48,
    fontWeight: '100',
  },
});
