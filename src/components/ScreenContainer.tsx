import React, { ReactNode } from 'react';
import {
  ColorValue,
  SafeAreaView,
  StatusBar,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle
} from 'react-native';
import Colors from '../constants/Colors';
import Loader from './Loader';

interface ContainerParentProps {
  children: ReactNode | ReactNode[];
  style?: StyleProp<ViewStyle>;
  statusBarColor?: ColorValue;
  loading?: boolean;
}

const ScreenContainer = ({
  children,
  style,
  statusBarColor = Colors.blue,
  loading = false,
}: ContainerParentProps) => (
  <SafeAreaView style={styles.container}>
    <StatusBar
      backgroundColor={statusBarColor}
      barStyle={'light-content'}
    />
    <View style={[styles.contentContainer, style]}>
      {children}
    </View>

    <Loader loading={loading} />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  contentContainer: {
    flex: 1,
  },
});

export default ScreenContainer;