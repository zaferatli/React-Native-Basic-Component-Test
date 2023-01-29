import 'react-native';
import React from 'react';
import App from '../../App';
import Button from '../../app/component/button';

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


it('button snapshot test for text ve click action', () => {
    const buttonShadowTest = render(<Button text={'Shadow test texti'} actionClick={() => console.log('ok')} />);

    expect(buttonShadowTest.toJSON()).toMatchSnapshot()
})

it('button shadow test for second text', () => {
    const buttonShadowTest = render(<Button text={'Shadow test texti'} actionClick={() => console.log('ok')} secondText={true} />);

    expect(buttonShadowTest.toJSON()).toMatchSnapshot()
})