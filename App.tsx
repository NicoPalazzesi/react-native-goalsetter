import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

const App = (): JSX.Element => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.title}>Goalsetter</Text>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20
  }
});

export default App;
