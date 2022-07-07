/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RoootNavigator from './src/navigations/RootNavigator'

const App = () => {
  return (
    <RoootNavigator />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
