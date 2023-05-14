import React from 'react';
import ScreenContainer from '../../components/ScreenContainer';
import Header from './components/Header';
import Colors from '../../constants/Colors';

const TermsOfServiceScreen = () => (
  <ScreenContainer statusBarColor={Colors.darkPurple}>
    <Header />
  </ScreenContainer>
);

export default TermsOfServiceScreen;
