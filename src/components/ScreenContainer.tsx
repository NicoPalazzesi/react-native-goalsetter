import React, {ReactNode} from 'react';
import {
  ColorValue,
  StatusBar,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Colors from '../constants/Colors';
import {Loader} from './';

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
}: ContainerParentProps) => {
  const {bottom} = useSafeAreaInsets();

  const dynamicStyles = StyleSheet.create({
    contentContainer: {
      paddingBottom: bottom,
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={statusBarColor} barStyle={'light-content'} />
      <View
        style={[
          styles.contentContainer,
          dynamicStyles.contentContainer,
          style,
        ]}>
        {children}
      </View>

      <Loader loading={loading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
});

export default ScreenContainer;
