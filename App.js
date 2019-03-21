/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from '~/Store';
import AppContainer from '~/App';
import EStyleSheet from 'react-native-extended-stylesheet';

class App extends Component {
  state = {}

  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

EStyleSheet.build({
  // always call EStyleSheet.build() even if you don't use global variables!
  $primary: '#2e7d32',
  $primaryLight: '#60ad5e',
  $primaryDark: '#005005',
  $secondary: '#0d47a1',
  $secondaryLight: '#5472d3',
  $secondaryDark: '#002171',
  $textColorPrimary: '#ffffff',
  $textColorSecondary: '#ffffff',
  $textColorBlack: '#ffffff',
});

export default App;
