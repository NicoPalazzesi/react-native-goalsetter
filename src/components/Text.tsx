import React from "react";
import { Text as RNText, StyleSheet, TextStyle, StyleProp } from "react-native";
import Colors from "../constants/Colors";
import FontSize from '../constants/FontSize';

export enum FontFamily {
  Light = 'AvenirLTStd-Light',
  Book = 'AvenirLTStd-Book',
  Roman = 'AvenirLTStd-Roman',
  Medium = 'AvenirLTStd-Medium',
  Heavy = 'AvenirLTStd-Heavy',
  Black = 'AvenirLTStd-Black',
}

interface TextProps {
  text: string | undefined;
  style?: StyleProp<TextStyle>;
}

const Text = ({text, style}: TextProps) => (
  <RNText style={[styles.text, style]}>{text}</RNText>
);

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.paragraph,
    fontFamily: FontFamily.Book,
    color: Colors.black,
  },
});

export default Text;