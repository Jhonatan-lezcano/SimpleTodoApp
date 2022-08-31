import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import {List} from '../../../store/slices/todoList/todoListSlice';
import ItemSlider from '../../molecules/ItemSlider/ItemSlider';

interface Props {
  boxes: List[];
}

const {width} = Dimensions.get('screen');

const SliderList = ({boxes}: Props) => {
  return (
    <View style={styles.sliderContainer}>
      <FlatList
        data={boxes}
        keyExtractor={item => item.id}
        horizontal={true}
        renderItem={({item, index}) => {
          return <ItemSlider listData={item} index={index} />;
        }}
      />
    </View>
  );
};

export default SliderList;

const styles = StyleSheet.create({
  sliderContainer: {
    height: 310,
    width,
  },
  //styles ItemSlider
});
