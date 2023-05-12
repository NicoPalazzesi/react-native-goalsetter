import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TextInput from '../../../components/TextInput';
import { useValidateEmail } from '../hooks/useValidateEmail';
import { useValidatePassword } from '../hooks/useValidatePassword';

const Form = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {invalidEmail, validateEmail} = useValidateEmail(email);
  const {invalidPassword, validatePassword} = useValidatePassword(password);

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
        onChangeText={(value) => setEmail(value)}
        iconUri={require('../../../assets/images/email-icon.png')}
        keyboardType={'email-address'}
        error={invalidEmail}
        onBlur={validateEmail}
        style={styles.textInput}
      />
      <TextInput
        placeholder={'Password'}
        value={password}
        onChangeText={(value) => setPassword(value)}
        iconUri={require('../../../assets/images/unlocked-icon.png')}
        secureTextEntry={true}
        error={invalidPassword}
        onBlur={validatePassword}
        style={styles.textInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 38,
    paddingHorizontal: 38,
  },
  textInput: {
    marginBottom: 16
  }
});

export default Form;
