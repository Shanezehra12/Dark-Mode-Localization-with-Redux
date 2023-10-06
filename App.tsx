import {View, Text} from 'react-native';
import React from 'react';
import Dashboard from './src/screens/Dashboard';
import AppNavigator from './src/AppNavigator';
import {Provider} from 'react-redux';
import store from './src/redux/Srore';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
