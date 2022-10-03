import React from 'react';
import Lottie, {AnimationObject} from 'lottie-react-native';
import {View} from 'react-native';

interface Props {
  animation: AnimationObject;
  size: number | string;
}

const AnimationView = ({animation, size}: Props) => {
  return (
    <View style={{height: size, width: size}}>
      <Lottie source={animation} autoPlay loop />
    </View>
  );
};

export default AnimationView;
