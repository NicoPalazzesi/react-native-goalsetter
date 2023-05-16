import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {Text} from './';
import {FontFamily} from './Text/model/enum';
import FontSize from '../constants/FontSize';
import Colors from '../constants/Colors';
import {hexToRgba} from '../utils/ColorConverter';

interface ButtonOwnProps {
  label: string;
}
type ButtonProps = TouchableOpacityProps & ButtonOwnProps;

const Button = ({label, ...props}: ButtonProps) => {
  const {disabled, style} = props;

  const dynamicStyles = StyleSheet.create({
    container: {
      backgroundColor: hexToRgba(Colors.green, disabled ? 0.5 : 1),
    },
  });

  return (
    <TouchableOpacity
      {...props}
      style={[styles.container, style, dynamicStyles.container]}>
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
  },
});

export default Button;
