import React from "react";
import {
  Text as RNText,
  StyleSheet,
  TextStyle,
  StyleProp,
  TextProps as RNTextProps
} from "react-native";
import { FontFamily } from "./model/enum";
import Colors from "../../constants/Colors";
import FontSize from '../../constants/FontSize';

interface TextProps {
  text?: string;
  style?: StyleProp<TextStyle>;
}

const Text = (props: TextProps & RNTextProps) => {
  const {text, style, children} = props;

  return(
  <RNText {...props} style={[styles.text, style]}>{text}{children}</RNText>
)};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.paragraph,
    fontFamily: FontFamily.Book,
    color: Colors.black,
  },
});

export default Text;