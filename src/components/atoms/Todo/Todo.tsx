import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../theme/colors';
import {size} from '../../../theme/fonts';
import Spacer from '../Spacer/Spacer';

interface Props {
  todo: any;
}

const Todo = ({todo: {title, complete}}: Props) => {
  return (
    <View style={styles.todoContainer}>
      <TouchableOpacity>
        <View
          style={{
            backgroundColor: complete
              ? colors.textSecondary
              : colors.background,
            borderWidth: 1,
            borderColor: colors.textSecondary,
            height: 18,
            width: 18,
          }}></View>
      </TouchableOpacity>
      <Spacer horizontal={15} />
      <Text
        style={[
          styles.title,
          {
            color: complete ? colors.textSecondary : colors.black,
            textDecorationLine: complete ? 'line-through' : 'none',
          },
        ]}>
        {title}
      </Text>
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  todoContainer: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: size.font16,
    fontWeight: '700',
  },
});
