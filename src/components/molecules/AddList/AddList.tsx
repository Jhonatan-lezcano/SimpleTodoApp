import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ButtonPlus from '../../atoms/ButtonPlus/ButtonPlus';
import {colors} from '../../../theme/colors';
import {size} from '../../../theme/fonts';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackAppParams} from '../../../navigation/StackAppNavigation';

interface Props {
  navigate: () => void;
}

const AddList = ({navigate}: Props) => {
  return (
    <View>
      <ButtonPlus
        colorPlus={colors.secondary}
        borderColor={colors.secondary}
        sizePlus={size.font18}
        padding={16}
        onPress={navigate}
      />
      <Text style={styles.addText}>Add List</Text>
    </View>
  );
};

export default AddList;

const styles = StyleSheet.create({
  addText: {
    color: colors.secondary,
    fontWeight: '600',
    fontSize: size.font14,
    marginTop: 6,
  },
});
