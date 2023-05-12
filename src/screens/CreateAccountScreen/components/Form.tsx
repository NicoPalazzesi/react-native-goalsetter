import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TextInput from '../../../components/TextInput';
import { useValidateEmail } from '../hooks/useValidateEmail';
import { useValidatePassword } from '../hooks/useValidatePassword';
import { Account } from '../model/interface';

interface FormProps {
  onFieldsChange: (complete: boolean, fields: Account) => void;
};

const Form = ({onFieldsChange}: FormProps) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {invalidEmail, validateEmail} = useValidateEmail();
  const {invalidPassword, validatePassword} = useValidatePassword();

  const onChangeEmail = (value: string) =>{
    validateEmail(value);
    setEmail(value);
  };

  const onChangePassword = (value: string) =>{
    validatePassword(value);
    setPassword(value);
  };

  useEffect(() => {
    const completed = firstname !== '' &&
    lastname !== '' &&
    !invalidEmail &&
    !invalidPassword;
    onFieldsChange(completed, {firstname, lastname, email, password});
  }, [firstname, lastname, invalidEmail, invalidPassword]);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={'First Name'}
        value={firstname}
        onChangeText={(value) => setFirstname(value)}
        autoCapitalize={'words'}
        iconUri={require('../../../assets/images/account-circle-icon.png')}
        style={styles.textInput}
      />
      <TextInput
        placeholder={'Last Name'}
        value={lastname}
        onChangeText={(value) => setLastname(value)}
        autoCapitalize={'words'}
        iconUri={require('../../../assets/images/account-circle-icon.png')}
        style={styles.textInput}
      />
      <TextInput
        placeholder={'Email Address'}
        value={email}
        onChangeText={onChangeEmail}
        iconUri={require('../../../assets/images/email-icon.png')}
        keyboardType={'email-address'}
        error={invalidEmail}
        style={styles.textInput}
      />
      <TextInput
        placeholder={'Password'}
        value={password}
        onChangeText={onChangePassword}
        iconUri={require('../../../assets/images/unlocked-icon.png')}
        secureTextEntry={true}
        error={invalidPassword}
        style={styles.textInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 38,
    paddingHorizontal: 38,
  },
  textInput: {
    marginBottom: 16
  }
});

export default Form;
