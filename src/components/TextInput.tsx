import React, { Ref, forwardRef, useState } from 'react';
import {
  TextInput as RNTextInput,
  StyleSheet,
  TextInputProps as RNTextInputProps,
  View,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';
import Colors from '../constants/Colors';
import { Text, SvgImage } from './';
import { FontFamily } from './Text/model/enum';
import FontSize from '../constants/FontSize';
import { SvgImageName } from './SvgImage';

interface TextInputOwnProps {error?: boolean, iconName: SvgImageName}
type TextInputProps = RNTextInputProps & TextInputOwnProps

const TextInput = (props: TextInputProps, ref?: Ref<RNTextInput>) => {
  const {value, placeholder, style, error, iconName} = props;
  const [focus, setFocus] = useState(false);

  const onFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setFocus(true);
    props.onFocus && props.onFocus(e);
  };

  const onBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setFocus(false);
    props.onBlur && props.onBlur(e);
  };

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
      <SvgImage
        name={iconName}
        style={styles.icon}
      />
      <View style={styles.textInputContainer}>
        {value !== '' && <Text text={placeholder} style={styles.placeholder} />}
        <RNTextInput
        {...props}
        ref={ref}
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

export default forwardRef(TextInput);
