import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { FontFamily } from '../../components/Text/model/enum';
import FontSize from '../../constants/FontSize';
import Colors from '../../constants/Colors';
import { hexToRgba } from '../../utils/ColorConverter';

export const defaultOptions = (): NativeStackNavigationOptions => ({
  headerStyle: {backgroundColor: hexToRgba(Colors.white, 0)},
  headerTransparent: true,
  headerShadowVisible: false,
  title: '',
  headerTitleAlign: 'center',
  headerTitleStyle: {fontFamily: FontFamily.Black, fontSize: FontSize.title},
  headerTintColor: Colors.white,
});