import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ButtonPlus from '../../atoms/ButtonPlus/ButtonPlus';
import {size} from '../../../theme/fonts';
import useTheme from '../../../hooks/useTheme';

interface Props {
  navigate: () => void;
}

const AddList = ({navigate}: Props) => {
  const {colors} = useTheme();
  return (
    <View>
      <ButtonPlus
        colorPlus={colors.secondary}
        borderColor={colors.secondary}
        sizePlus={size.font18}
        padding={16}
        onPress={navigate}
      />
      <Text style={[styles.addText, {color: colors.secondary}]}>Add List</Text>
    </View>
  );
};

export default AddList;

const styles = StyleSheet.create({
  addText: {
    fontWeight: '600',
    fontSize: size.font14,
    marginTop: 6,
  },
});
