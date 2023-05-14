import React from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../constants/Colors';

const Header = () => (
  <LinearGradient
    colors={[Colors.purple, Colors.darkPurple]}
    start={{x: 0, y: 0}} end={{x: 1, y: 0}}
    useAngle={true}
    angle={90}
    style={styles.container}
  />
);

const styles = StyleSheet.create({
  container: {
    height: 60,
  },
});

export default Header;
