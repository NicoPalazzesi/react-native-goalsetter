import React, {RefObject, useEffect, useRef, useState} from 'react';
import {View, StyleSheet, TextInput as RNTextInput} from 'react-native';
import {TextInput} from '../../../components';
import {useValidateEmail} from '../hooks/useValidateEmail';
import {useValidatePassword} from '../hooks/useValidatePassword';
import {Account} from '../model/interface';

interface FormProps {
  onFieldsChange: (complete: boolean, fields: Account) => void;
}

const Form = ({onFieldsChange}: FormProps) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const lastNameRef = useRef() as RefObject<RNTextInput>;
  const emailRef = useRef() as RefObject<RNTextInput>;
  const passwordRef = useRef() as RefObject<RNTextInput>;

  const {invalidEmail, validateEmail} = useValidateEmail();
  const {invalidPassword, validatePassword} = useValidatePassword();

  const onChangeEmail = (value: string) => {
    validateEmail(value);
    setEmail(value);
  };

  const onChangePassword = (value: string) => {
    validatePassword(value);
    setPassword(value);
  };

  useEffect(() => {
    const completed =
      firstname !== '' &&
      lastname !== '' &&
      invalidEmail === false &&
      invalidPassword === false;
    onFieldsChange(completed, {firstname, lastname, email, password});
  }, [firstname, lastname, invalidEmail, invalidPassword]);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={'First Name'}
        value={firstname}
        onChangeText={value => setFirstname(value)}
        returnKeyType={'next'}
        autoCapitalize={'words'}
        iconName={'account-circle-icon'}
        onSubmitEditing={() => {
          lastNameRef.current?.focus();
        }}
        style={styles.textInput}
      />
      <TextInput
        ref={lastNameRef}
        placeholder={'Last Name'}
        value={lastname}
        onChangeText={value => setLastname(value)}
        returnKeyType={'next'}
        autoCapitalize={'words'}
        iconName={'account-circle-icon'}
        onSubmitEditing={() => {
          emailRef.current?.focus();
        }}
        style={styles.textInput}
      />
      <TextInput
        ref={emailRef}
        placeholder={'Email Address'}
        value={email}
        onChangeText={onChangeEmail}
        returnKeyType={'next'}
        keyboardType={'email-address'}
        iconName={'email-icon'}
        autoCapitalize={'none'}
        onSubmitEditing={() => {
          passwordRef.current?.focus();
        }}
        error={invalidEmail}
        style={styles.textInput}
      />
      <TextInput
        ref={passwordRef}
        placeholder={'Password'}
        value={password}
        onChangeText={onChangePassword}
        iconName={'unlocked-icon'}
        autoCapitalize={'none'}
        autoComplete={'off'}
        contextMenuHidden={true}
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
    marginBottom: 16,
  },
});

export default Form;
