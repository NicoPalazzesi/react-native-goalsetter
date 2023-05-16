import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useHeaderHeight} from '@react-navigation/elements';
import Colors from '../../../constants/Colors';

const Header = () => {
  const headerHeight = useHeaderHeight();

  const dynamicStyles = StyleSheet.create({
    container: {
      height: headerHeight + 8,
    },
  });

  return (
    <LinearGradient
      colors={[Colors.purple, Colors.darkPurple]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      useAngle={true}
      angle={90}
      style={dynamicStyles.container}
    />
  );
};

export default Header;
