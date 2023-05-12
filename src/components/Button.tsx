import React from 'react';
import { StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import Text, { FontFamily } from './Text';
import FontSize from '../constants/FontSize';
import Colors from '../constants/Colors';
import { hexToRgba } from '../utils/ColorConverter';

interface ButtonProps {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>
}

const Button = ({label, onPress, disabled, style}: ButtonProps) => {
  const dynamicStyles = StyleSheet.create({
    container: {
      backgroundColor: hexToRgba(Colors.green, disabled ? 0.5 : 1),
    },
  });

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.container, style, dynamicStyles.container]}
    >
      <Text text={label} style={styles.label} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  label: {
    fontSize: FontSize.button,
    fontFamily: FontFamily.Heavy,
    color: Colors.white,
  }
});

export default Button;
