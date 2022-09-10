import {auth} from '../../config/firebase';
import {signOut} from 'firebase/auth';
import {AppDispatch} from '../store/store';
import {isAuth} from '../store/slices/auth/authSlice';

export interface OptionsType {
  option: string;
  icon: string;
  onPress: Function;
}

export const Options: OptionsType[] = [
  {
    option: 'Theme',
    icon: '',
    onPress: () => console.log('dark mode'),
  },
  {
    option: 'Sign out',
    icon: '',
    onPress: (dispatch: AppDispatch) => {
      signOut(auth)
        .then(() => {
          dispatch(isAuth());
        })
        .catch(error => console.log(error));
    },
  },
];
