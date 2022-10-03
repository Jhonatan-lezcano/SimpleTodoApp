import React from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Dimensions,
  Text,
  ActivityIndicator,
} from 'react-native';
import {List, Todo} from '../../../store/slices/todoList/todoListSlice';
import {colors} from '../../../theme/colors';
import AnimationView from '../../atoms/AnimationView/AnimationView';
import ItemSlider from '../../molecules/ItemSlider/ItemSlider';
import NoItemsFound from '../../molecules/NoItemsFound/NoItemsFound';
import animationArrow from '../../../assets/LottieFiles/notFoundList.json';

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
      {!loading && boxes.length > 0 ? (
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
      ) : !loading && boxes.length === 0 ? (
        <NoItemsFound
          Animation={() =>
            AnimationView({animation: animationArrow, size: 200})
          }
          text="No lists found, start creating your lists :)"
        />
      ) : (
        loading && (
          <View
            style={{
              width: '100%',
              height: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size="large" color={colors.secondary} />
          </View>
        )
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
