import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { defaultOptions } from './navigation/options';

import CreateAccountScreen from './screens/CreateAccountScreen';
import TermsOfServiceScreen from './screens/TermsOfServiceScreen';

export type AppStackParamsList =  {
  CreateAccountScreen: undefined;
  TermsOfServiceScreen: undefined;
}

const {Navigator, Screen} = createNativeStackNavigator<AppStackParamsList>();

const App = () => (
  <NavigationContainer>
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
    </Navigator>
  </NavigationContainer>
);

export default App;
