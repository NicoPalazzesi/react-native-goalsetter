import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '../../../components';

const TermsOfServicesText = () => (
  <View>
    <Text
      text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
      style={styles.text}
    />
    <Text
      text={'1.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.n. .'}
      style={styles.text}
    />
    <Text
      text={'2. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'}
      style={styles.text}
    />
    <Text
      text={'3. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
    />
  </View>
);

const styles = StyleSheet.create({
  text: {
    marginBottom: 28,
  },
});

export default TermsOfServicesText;
