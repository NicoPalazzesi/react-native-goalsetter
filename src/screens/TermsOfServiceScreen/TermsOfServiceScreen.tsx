import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScreenContainer, SvgImage } from '../../components';
import Header from './components/Header';
import Colors from '../../constants/Colors';
import TermsOfServicesText from './components/TermsOfServicesText';

const TermsOfServiceScreen = () => (
  <ScreenContainer statusBarColor={Colors.darkPurple}>
    <Header />
    <View style={styles.ContentContainer}>
      <SvgImage name={'flying-money-and-stars'} style={styles.image} />
      <TermsOfServicesText />
    </View>
  </ScreenContainer>
);

const styles = StyleSheet.create({
  ContentContainer: {
    paddingTop: 28,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  image: {
    marginBottom: 54,
  }
});

export default TermsOfServiceScreen;
