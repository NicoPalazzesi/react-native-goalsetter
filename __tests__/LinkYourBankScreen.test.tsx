import 'react-native';
import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import LinkYourBankScreen from '../src/screens/LinkYourBankScreen';

describe('Test: LinkYourBankScreen', () => {
  test('Screen contains correct title and button', async () => {
    const component = (
      <NavigationContainer>
        <LinkYourBankScreen />
      </NavigationContainer>
    );
    render(component);

    const title = await screen.findByText('Family banking');
    expect(title).toBeTruthy();

    const button = await screen.findByText('LINK A BANK');
    expect(button).toBeTruthy();
  });
});
