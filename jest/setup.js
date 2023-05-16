/* @react-navigation */
jest.mock('@react-navigation/native-stack', () => {
  return {
    createNativeStackNavigator: () => ({
      Navigator: jest.fn(),
      Screen: jest.fn(),
    }),
  };
});

jest.mock('@react-navigation/elements', () => {
  return {
    useHeaderHeight: jest.fn(),
  };
});

/* react-native-linear-gradient */
jest.mock('react-native-linear-gradient', () => 'LinearGradient');

/* react-native-safe-area-context */
jest.mock('react-native-safe-area-context', () => {
  return {
    useSafeAreaInsets: () => ({
      top: 0,
      bottom: 0,
    }),
  };
});

/* src/components/SvgImage */
jest.mock('../src/components/SvgImage', () => 'SvgImage');
