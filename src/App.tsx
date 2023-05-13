import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CreateAccountScreen from './screens/CreateAccountScreen';

const {Navigator, Screen} = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name={'CreateAccountScreen'} component={CreateAccountScreen} />
    </Navigator>
  </NavigationContainer>
);

export default App;
