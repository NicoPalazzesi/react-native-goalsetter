import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Text} from './';
import Colors from '../constants/Colors';
import {useHeaderHeight} from '@react-navigation/elements';

interface BlueHeaderProps {
  subtitle?: string;
}

const BlueHeader = ({subtitle}: BlueHeaderProps) => {
  const {top} = useSafeAreaInsets();
  const headerHeight = useHeaderHeight();

  const dynamicStyles = StyleSheet.create({
    container: {
      minHeight: subtitle ? 122 + top : headerHeight + 8,
    },
    subtitle: {marginTop: 30 + top},
  });

  return (
    <LinearGradient
      colors={[Colors.lightBlue, Colors.darkBlue]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      useAngle={true}
      angle={90}
      style={[styles.container, dynamicStyles.container]}>
      <ImageBackground
        source={require('../assets/images/header-pattern.png')}
        style={styles.imageContainer}
        imageStyle={styles.image}>
        {subtitle && (
          <Text
            text={subtitle}
            style={[styles.subtitle, dynamicStyles.subtitle]}
          />
        )}
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    maxHeight: 176,
  },
  imageContainer: {
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  image: {
    opacity: 0.3,
    height: 176,
  },
  subtitle: {
    color: Colors.white,
    textAlign: 'center',
  },
});

export default BlueHeader;
