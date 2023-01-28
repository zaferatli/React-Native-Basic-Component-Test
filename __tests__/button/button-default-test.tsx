import 'react-native';
import React from 'react';
import App from '../../App';

import { fireEvent, render } from '@testing-library/react-native';

it('renders correctly', () => {
    const { getByTestId, getByText, getAllByText } = render(<App />);

    let exampleText = 'Örnek text';

    const testInputTestElementi = getByTestId('TextInputTestID');
    fireEvent.changeText(testInputTestElementi, exampleText)

    const testButtonTestElementi = getByTestId('ForTestCustomButtonID');
    fireEvent.press(testButtonTestElementi);

    const controlResult = getAllByText(exampleText);
    expect(controlResult).toHaveLength(1)

    expect(getByText(exampleText)).toBeTruthy()

});
 