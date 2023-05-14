import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScreenContainer } from '../../components';
import Header from './components/Header';
import Colors from '../../constants/Colors';
import TermsOfServicesText from './components/TermsOfServicesText';

const TermsOfServiceScreen = () => (
  <ScreenContainer statusBarColor={Colors.darkPurple}>
    <Header />
    <View style={styles.ContentContainer}>
      <TermsOfServicesText />
    </View>
  </ScreenContainer>
);

const styles = StyleSheet.create({
  ContentContainer: {
    paddingTop: 28,
    paddingHorizontal: 20,
  },
});

export default TermsOfServiceScreen;
