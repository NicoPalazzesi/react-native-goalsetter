import 'react-native';
import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {Button} from '../src/components';

describe('Test: Button', () => {
  test('The button contains the correct label', async () => {
    const label = 'label text';
    const mockedFunction = jest.fn();

    const component = <Button label={label} onPress={mockedFunction} />;
    const {getByText} = render(component);

    const button = getByText(label);
    expect(button).toBeTruthy();
  });

  test('The button executes the function when is enabled and pressed', async () => {
    const testId = 'button';
    const mockedFunction = jest.fn();

    const component = (
      <Button label={'label text'} onPress={mockedFunction} testID={testId} />
    );
    const {getByTestId} = render(component);

    const button = getByTestId(testId);
    fireEvent(button, 'press');
    expect(mockedFunction.mock.calls.length).toBe(1);
  });

  test("The button doesn't executes the function when is disabled and pressed", async () => {
    const testId = 'button';
    const mockedFunction = jest.fn();

    const component = (
      <Button
        label={'label text'}
        onPress={mockedFunction}
        testID={testId}
        disabled={true}
      />
    );
    const {getByTestId} = render(component);

    const button = getByTestId(testId);
    fireEvent(button, 'press');
    expect(mockedFunction.mock.calls.length).toBe(0);
  });
});
