import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  BlueHeader,
  Button,
  ScreenContainer,
  SvgImage,
  Text
} from '../../components';
import FontSize from '../../constants/FontSize';
import { FontFamily } from '../../components/Text/model/enum';
import Colors from '../../constants/Colors';

const LinkYourBankScreen = () => (
  <ScreenContainer>
    <BlueHeader />
    <View style={styles.ContentContainer}>
      <View>
        <SvgImage name={'family-banking'} style={styles.image} />
        <Text text={'Family banking'} style={styles.title} />
        <Text
          text={'Linking your bank lets you use all of Goalsetter’s amazing features. Every member of your family can save, gift, learn, earn, and spend money... smartly.'}
          style={styles.subtitle}
        />
      </View>
      <Button label={'LINK A BANK'} onPress={() => {}} />
    </View>
  </ScreenContainer>
);

const styles = StyleSheet.create({
  ContentContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  image: {
    alignSelf: 'center',
    marginTop: 40,
  },
  title: {
    fontSize: FontSize.title,
    fontFamily: FontFamily.Black,
    color: Colors.veryDarkPurple,
    textAlign: 'center',
    marginTop: 25,
  },
  subtitle: {
    textAlign: 'center',
    marginTop: 53
  },
});


export default LinkYourBankScreen;
