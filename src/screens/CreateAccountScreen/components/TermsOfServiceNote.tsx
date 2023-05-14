import React from 'react';
import { StyleSheet } from 'react-native';
import Text, { FontFamily } from '../../../components/Text';
import FontSize from '../../../constants/FontSize';
import Colors from '../../../constants/Colors';
import { hexToRgba } from '../../../utils/ColorConverter';
import { useNavigation } from '@react-navigation/native';
import { AppStackParamsList } from '../../../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const TermsOfServiceNote = () => {
  const navigation = useNavigation<
    NativeStackNavigationProp<AppStackParamsList, 'CreateAccountScreen'>
  >();

  const goToTermsOfServiceScreen = () => navigation.navigate('TermsOfServiceScreen');

  return (
    <Text style={styles.text}>
      {'By creating this account, I agree that I am a U.S. resident,\n18 years or older with a valid bank account. I agree to\nGoalsetter’s '}
      <Text
        text={'Terms of Service'}
        onPress={goToTermsOfServiceScreen}
        style={styles.button}
      />
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: FontSize.note,
    color: hexToRgba(Colors.black, 0.4),
    marginHorizontal: 21,
    marginBottom: 21,
  },
  button: {
    fontSize: FontSize.note,
    fontFamily: FontFamily.Roman,
    color: Colors.blue, 
  }
});

export default TermsOfServiceNote;
