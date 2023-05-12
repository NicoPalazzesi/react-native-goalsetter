import React, { useState } from 'react';
import ScreenContainer from '../../components/ScreenContainer';
import Header from './components/Header';
import Form from './components/Form';
import Button from '../../components/Button';
import { StyleSheet, View } from 'react-native';
import { Account } from './model/interface';
import { useAddParent } from './hooks/useAddParent';

const CreateAccountScreen = () => {
  const [account, setAccount] = useState<Account>();
  const [disabled, setDisabled] = useState(true);

  const {loading, addParent} = useAddParent();

  const onFieldsChange = (completed: boolean, fields: Account) => {
    setDisabled(!completed)
    completed && setAccount(fields);
  }

  return (
    <ScreenContainer loading={loading} style={styles.container}>
      <View>
        <Header />
        <Form onFieldsChange={onFieldsChange} />
      </View>
      <Button
        label={'CREATE FREE ACCOUNT'}
        onPress={() => addParent(account as Account)}
        style={styles.button}
        disabled={disabled}
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
