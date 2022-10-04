import {Text, TouchableOpacity, StyleSheet, View, Image} from 'react-native';
import React from 'react';
import {size} from '../../../theme/fonts';
import useTheme from '../../../hooks/useTheme';

interface Props {
  actionOption: () => void;
  textOption: string;
  divider?: boolean;
  iconSrc?: any;
}

const ItemMenuOption = ({
  actionOption,
  textOption,
  divider,
  iconSrc,
}: Props) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity style={styles.option} onPress={actionOption}>
      <View style={{flexDirection: 'row', height: '99%', alignItems: 'center'}}>
        {iconSrc && (
          <Image
            source={iconSrc}
            style={{height: 20, width: 20, marginRight: 15}}
          />
        )}
        <Text style={[styles.textOption, {color: colors.text}]}>
          {textOption}
        </Text>
      </View>
      {divider && (
        <View
          style={[styles.divider, {backgroundColor: colors.textSecondary}]}
        />
      )}
    </TouchableOpacity>
  );
};

export default ItemMenuOption;

const styles = StyleSheet.create({
  option: {
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 15,
    width: '100%',
  },
  textOption: {
    fontSize: size.font14,
  },
  divider: {
    alignSelf: 'flex-end',
    height: 1,
    width: '100%',
  },
});
