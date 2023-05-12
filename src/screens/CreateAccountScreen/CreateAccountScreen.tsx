import React from 'react';
import ScreenContainer from '../../components/ScreenContainer';
import Header from './components/Header';
import Form from './components/Form';
import Button from '../../components/Button';
import { StyleSheet, View } from 'react-native';

const CreateAccountScreen = () => {
  return (
    <ScreenContainer style={styles.container}>
      <View>
        <Header />
        <Form />
      </View>
      <Button
        label={'CREATE FREE ACCOUNT'}
        onPress={() => {}}
        style={styles.button}
        disabled={true}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  button: {
    marginHorizontal: 60,
    marginBottom: 29,
  }
});

export default CreateAccountScreen;
