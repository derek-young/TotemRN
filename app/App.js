import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import Header from './components/Header/Header'
import styles from './styles';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Text>
          Hello World
        </Text>
      </View>
    );
  }
}
