// App.js
import React from 'react';
import MainRouter from './routers/index';
import { Provider } from 'react-redux';
import { PaperProvider } from 'react-native-paper';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/index';

const store = configureStore({reducer: rootReducer});

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <MainRouter />
      </PaperProvider>
    </Provider>
  );
};

export default App;
