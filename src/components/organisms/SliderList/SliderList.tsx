import React from 'react';
import {FlatList, StyleSheet, View, Dimensions, Text} from 'react-native';
import {List, Todo} from '../../../store/slices/todoList/todoListSlice';
import {colors} from '../../../theme/colors';
import ItemSlider from '../../molecules/ItemSlider/ItemSlider';

interface Props {
  boxes: List[];
  loading: boolean;
  navigate: Function;
  todos: Todo[];
}

const {width} = Dimensions.get('screen');

const SliderList = ({boxes, loading, navigate, todos}: Props) => {
  return (
    <View style={styles.sliderContainer}>
      {!loading ? (
        <FlatList
          data={boxes}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <ItemSlider
                listData={item}
                index={index}
                navigate={navigate}
                todos={todos}
              />
            );
          }}
        />
      ) : (
        <Text style={{color: colors.text}}>No hay listas</Text>
      )}
    </View>
  );
};

export default SliderList;

const styles = StyleSheet.create({
  sliderContainer: {
    height: 310,
    width,
  },
});
