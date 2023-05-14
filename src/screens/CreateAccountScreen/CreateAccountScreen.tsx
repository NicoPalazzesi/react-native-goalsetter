import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ScreenContainer, Button } from '../../components';
import Header from './components/Header';
import Form from './components/Form';
import TermsOfServiceNote from './components/TermsOfServiceNote';
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
    <ScreenContainer loading={loading}>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        <Form onFieldsChange={onFieldsChange} />
        <TermsOfServiceNote />
        <Button
          label={'CREATE FREE ACCOUNT'}
          onPress={() => addParent(account as Account)}
          style={styles.button}
          disabled={disabled}
        />
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
  },
  button: {
    marginHorizontal: 60,
    marginBottom: 29,
  }
});

export default CreateAccountScreen;
