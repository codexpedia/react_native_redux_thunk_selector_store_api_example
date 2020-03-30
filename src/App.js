import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import GitAccount from './views/GitAccount';
import GitApis from './views/GitApis';

console.log(`${Date()} initialization of Redux for the application.`);

export default class App extends Component {
  render() {
    console.log(`${Date()} Provider is a wrapper to the application and responsible for providing access to the created store`);
    return (
      <Provider store={store}>
        <ScrollView style={styles.container}>
          <GitAccount />
          <GitApis />
        </ScrollView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50
  }
});
