import {createSlice} from '@reduxjs/toolkit';

export interface User {
  loading: boolean;
  id: string;
}

const initialState: User = {
  loading: false,
  id: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser: (state, action) => {
      return {
        ...state,
        id: action.payload,
      };
    },
  },
});

export const {getUser} = userSlice.actions;

export default userSlice.reducer;
