import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Text, { FontFamily } from '../../../components/Text';
import Colors from '../../../constants/Colors';
import FontSize from '../../../constants/FontSize';

const Header = () => (
  <LinearGradient
    colors={[Colors.lightBlue, Colors.darkBlue]}
    start={{x: 0, y: 0}} end={{x: 1, y: 0}}
    useAngle={true}
    angle={90}
    style={styles.container}
  >
    <ImageBackground
      source={require('../../../assets/images/header-pattern.png')}
      style={styles.imageContainer}
      imageStyle={styles.image}
    >
      <Text text={'Create Your Account'} style={styles.title} />
      <Text 
        text={'You can be a parent, godparent, grandparent or even a favorite aunt. We’ll add the kids after!'}
        style={styles.subtitle}
      />
    </ImageBackground>
  </LinearGradient>
);

const styles = StyleSheet.create({
  container: {
    height: 150,
  },
  imageContainer: {
    resizeMode: 'contain',
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  image: {
    opacity: 0.3,
  },
  title: {
    fontSize: FontSize.title,
    fontFamily: FontFamily.Black,
    color: Colors.white,
    textAlign: 'center',
  },
  subtitle: {
    color: Colors.white,
    textAlign: 'center',
    marginTop: 32,
  }
});

export default Header;