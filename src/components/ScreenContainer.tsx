import React, { ReactNode } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle
} from 'react-native';
import Colors from '../constants/Colors';

interface ContainerParentProps {
  children: ReactNode | ReactNode[];
  style?: StyleProp<ViewStyle>;
}

const ScreenContainer = ({
  children,
  style
}: ContainerParentProps) => (
  <SafeAreaView style={styles.container}>
    <StatusBar
      backgroundColor={Colors.blue}
      barStyle={'light-content'}
    />
    <View style={[styles.contentContainer, style]}>
      {children}
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
});

export default ScreenContainer;