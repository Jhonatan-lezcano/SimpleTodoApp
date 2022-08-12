import {View} from 'react-native';
import React from 'react';

interface Props {
  horizontal?: string | number;
  vertical?: string | number;
}

const Spacer = ({horizontal, vertical}: Props) => {
  return <View style={{height: vertical, width: horizontal}} />;
};

export default Spacer;

Spacer.defaultProps = {
  horizontal: 2,
  vertical: 2,
};
