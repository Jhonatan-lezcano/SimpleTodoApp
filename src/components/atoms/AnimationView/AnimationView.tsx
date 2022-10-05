import React, {useEffect, useRef} from 'react';
import Lottie, {AnimationObject} from 'lottie-react-native';
import {View} from 'react-native';

interface Props {
  animation: AnimationObject;
  size: number | string;
}

const AnimationView = ({animation, size}: Props) => {
  const animationRef = useRef<Lottie>(null);

  useEffect(() => {
    animationRef.current?.play();
  }, []);

  return (
    <View style={{height: size, width: size}}>
      <Lottie ref={animationRef} source={animation} autoPlay loop />
    </View>
  );
};

export default AnimationView;
