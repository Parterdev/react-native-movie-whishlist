import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BottomTabNavigator } from './src/navigator/BottomTabNavigator'
//Redux
import { Provider } from 'react-redux';
import { store, appPersist } from './src/redux/store';
import { PersistGate }  from 'redux-persist/integration/react';

const App = () => {
  return (
    <NavigationContainer>
        <BottomTabNavigator />
    </NavigationContainer>
  )
}

export default () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={appPersist}>
        <App />
      </PersistGate>
    </Provider>
  )
};
