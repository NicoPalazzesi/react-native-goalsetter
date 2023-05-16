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

/* Other configurations */
jest.useFakeTimers();
