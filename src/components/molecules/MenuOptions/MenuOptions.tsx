import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {colors} from '../../../theme/colors';
import {OptionsType} from '../../../utils/MenuOptions';
import {size} from '../../../theme/fonts';
import {useAppDispatch} from '../../../store/hooks/hooks';

const {width} = Dimensions.get('screen');

interface Props {
  options: OptionsType[];
}

const MenuOptions = ({options}: Props) => {
  const dispatch = useAppDispatch();
  return (
    <View style={styles.menuContainer}>
      <FlatList
        data={options}
        keyExtractor={item => item.option}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={styles.option}
            onPress={() => item.onPress(dispatch)}>
            <Text style={styles.textOption}>{item.option}</Text>
            {index !== options.length - 1 && <View style={styles.divider} />}
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default MenuOptions;

const styles = StyleSheet.create({
  menuContainer: {
    width: width * 0.4,
    backgroundColor: colors.background,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  option: {
    height: 40,
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 10,
  },
  textOption: {
    color: colors.text,
    fontSize: size.font14,
  },
  divider: {
    height: 1,
    backgroundColor: '#dee2e6',
    bottom: 0,
    left: '8%',
    position: 'absolute',
    width: '100%',
  },
});
