import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import { hexToRgba } from '../utils/ColorConverter';

interface LoaderProps {
  loading: boolean
};

const Loader = ({loading}: LoaderProps) => {
  if(loading){
    return (
      <ActivityIndicator
        size={'large'}
        color={Colors.blue}
        style={styles.container}
      />
    );
  }

  return <></>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: hexToRgba(Colors.black, 0.1),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
});

export default Loader;
