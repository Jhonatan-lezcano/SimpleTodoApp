import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {colors} from '../theme/colors';
import {useAppDispatch, useAppSelector} from '../store/hooks/hooks';
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from '../../config/firebase';
import {getUser} from '../store/slices/user/userSlice';

const Home = () => {
  const dispatch = useAppDispatch();
  // const {id} = useAppSelector(state => state.user);
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        dispatch(getUser({id: user.uid}));
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{color: colors.text}}>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
});
