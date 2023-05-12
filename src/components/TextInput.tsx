import React, { useEffect, useState } from 'react';
import {
  Keyboard,
  TextInput as RNTextInput,
  StyleSheet,
  TextInputProps as RNTextInputProps,
  Image,
  View,
  ImageRequireSource,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';
import Colors from '../constants/Colors';
import Text, { FontFamily } from './Text';
import FontSize from '../constants/FontSize';

interface TextInputOwnProps {error?: boolean, iconUri: ImageRequireSource}
type TextInputProps = RNTextInputProps & TextInputOwnProps

const TextInput = (props: TextInputProps) => {
  const {value, placeholder, style, error, iconUri} = props;
  const [focus, setFocus] = useState(false);

  const onFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setFocus(true);
    props.onFocus && props.onFocus(e);
  };

  const onBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setFocus(false);
    props.onBlur && props.onBlur(e);
  };

  useEffect(() => {
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setFocus(false);
    });

    return hideSubscription.remove;
  }, []);

  const dynamicStyles = StyleSheet.create({
    container: {
      borderBottomColor: focus ? Colors.darkBlue : error ? Colors.red : Colors.lightGray,
    },
    textInput: {
      marginBottom: value !== '' ? -12 : 0,
    },
  });

  return (
    <View style={[styles.container, style, dynamicStyles.container]}>
      <Image
        source={iconUri}
        style={styles.icon}
      />
      <View style={styles.textInputContainer}>
        {value !== '' && <Text text={placeholder} style={styles.placeholder} />}
        <RNTextInput
        {...props}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholderTextColor={Colors.extraLightGray}
        style={[styles.textInput, dynamicStyles.textInput]}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    borderBottomWidth: 0.5,
    alignItems: 'center',
    height: 53,
  },
  icon: {
    marginRight: 12,
  },
  placeholder: {
    color: Colors.extraLightGray,
    fontSize: FontSize.placeholder,
    fontFamily: FontFamily.Black,
    marginBottom: -8,
  },
  textInputContainer: {
    width: '100%',
  },
  textInput: {
    fontFamily: FontFamily.Black,
    color: Colors.blue,
    marginLeft: -4,
  },
});

export default TextInput;
