import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import Main from './Main';

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
