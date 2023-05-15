import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { defaultOptions } from './navigation/options';
import { theme } from './navigation/theme';

import CreateAccountScreen from './screens/CreateAccountScreen';
import TermsOfServiceScreen from './screens/TermsOfServiceScreen';
import LinkYourBankScreen from './screens/LinkYourBankScreen';

export type AppStackParamsList =  {
  CreateAccountScreen: undefined;
  TermsOfServiceScreen: undefined;
  LinkYourBankScreen: undefined;
}

const {Navigator, Screen} = createNativeStackNavigator<AppStackParamsList>();

const App = () => (
  <NavigationContainer theme={theme}>
    <Navigator screenOptions={defaultOptions}>
      <Screen
        name={'CreateAccountScreen'}
        component={CreateAccountScreen}
        options={{title: 'Create Your Account'}}
      />
      <Screen
        name={'TermsOfServiceScreen'}
        component={TermsOfServiceScreen}
        options={{title: 'Terms of Services'}}
      />
      <Screen
        name={'LinkYourBankScreen'}
        component={LinkYourBankScreen}
        options={{title: 'Link your bank!'}}
      />
    </Navigator>
  </NavigationContainer>
);

export default App;
