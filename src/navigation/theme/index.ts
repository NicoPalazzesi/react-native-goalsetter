import { DefaultTheme, Theme } from '@react-navigation/native';
import Colors from '../../constants/Colors';

export const theme: Theme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.white,
    text: Colors.black,
  },
};
