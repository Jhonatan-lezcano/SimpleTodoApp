import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';

interface Props {
  colorPlus?: string;
  background?: string;
  borderColor?: string;
  sizePlus: number;
  padding: number;
  onPress: () => void;
}

const ButtonPlus = ({
  colorPlus,
  background,
  borderColor,
  sizePlus,
  padding,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: background ? background : 'transparent',
          borderWidth: borderColor ? 2 : 0,
          borderColor: borderColor,
          padding,
        },
      ]}>
      <View style={[{width: sizePlus, height: sizePlus}]}>
        <View
          style={[
            styles.lineVertical,
            {
              backgroundColor: colorPlus,
              width: sizePlus * 0.1,
              right: sizePlus * 0.5,
              transform: [{translateX: sizePlus * 0.05}],
            },
          ]}
        />
        <View
          style={[
            styles.lineHorizontal,
            {
              backgroundColor: colorPlus,
              height: sizePlus * 0.1,
              bottom: sizePlus * 0.5,
              transform: [{translateY: sizePlus * 0.05}],
            },
          ]}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ButtonPlus;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 4,
    justifyContent: 'center',
  },
  lineVertical: {
    height: '100%',
    position: 'absolute',
    top: 0,
  },
  lineHorizontal: {
    width: '100%',
    position: 'absolute',
    left: 0,
  },
});
