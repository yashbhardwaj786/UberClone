/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RoootNavigator from './src/navigations/RootNavigator';
import {OriginContextProvider, DestinationContextProvider} from './src/context/context';

const App = () => {
  return (
    <DestinationContextProvider>
      <OriginContextProvider>
        <RoootNavigator />
      </OriginContextProvider>
    </DestinationContextProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
