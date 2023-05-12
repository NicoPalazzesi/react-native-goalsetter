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
import Loader from '../screens/CreateAccountScreen/components/Loader';

interface ContainerParentProps {
  children: ReactNode | ReactNode[];
  style?: StyleProp<ViewStyle>;
  loading?: boolean;
}

const ScreenContainer = ({
  children,
  style,
  loading = false,
}: ContainerParentProps) => (
  <SafeAreaView style={styles.container}>
    <StatusBar
      backgroundColor={Colors.blue}
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
  },
  contentContainer: {
    flex: 1,
  },
});

export default ScreenContainer;