import {View,StyleSheet } from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import HomeScreen from './src/screens/HomeScreen';
import {store} from './src/store/store';

const App = () => {
 
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider> 
  );
};
const styles = StyleSheet.create({});
  
export default App;
