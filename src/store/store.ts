import {combineReducers, configureStore} from '@reduxjs/toolkit';
import authSlice from './slices/auth/authSlice';
import counterSlice from './slices/counter/counterSlice';
import userSlice from './slices/user/userSlice';
import todoListSlice from './slices/todoList/todoListSlice';

const rootReducer = combineReducers({
  counter: counterSlice,
  authUser: authSlice,
  user: userSlice,
  todoList: todoListSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
