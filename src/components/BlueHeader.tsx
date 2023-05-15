import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Text } from './';
import Colors from '../constants/Colors';

interface BlueHeaderProps {
  subtitle?: string;
}

const BlueHeader = ({subtitle}: BlueHeaderProps) => {
  const dynamicStyles = StyleSheet.create({
    container: {
      height: subtitle ? 130 : undefined,
    }
  });

  return (
    <LinearGradient
      colors={[Colors.lightBlue, Colors.darkBlue]}
      start={{x: 0, y: 0}} end={{x: 1, y: 0}}
      useAngle={true}
      angle={90}
      style={[styles.container, dynamicStyles.container]}
    >
      <ImageBackground
        source={require('../assets/images/header-pattern.png')}
        style={styles.imageContainer}
        imageStyle={styles.image}
      >
        {subtitle && <Text text={subtitle} style={styles.subtitle} />}
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    maxHeight: 150,
  },
  imageContainer: {
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  image: {
    opacity: 0.3,
    height: 150,
  },
  subtitle: {
    color: Colors.white,
    textAlign: 'center',
    marginTop: 32,
  }
});

export default BlueHeader;
