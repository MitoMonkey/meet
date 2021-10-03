import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        // shallowly render the App component (= without a DOM or any children) and return a wrapper for the tests
        NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    });
    test('render text input', () => {
        expect(NumberOfEventsWrapper.find('.numberInput')).toHaveLength(1);
    });
    test('render "number" state in input correctly', () => {
        const number = NumberOfEventsWrapper.state('number');
        expect(NumberOfEventsWrapper.find('.numberInput').prop('value')).toBe(number);
    });
    test('change "number" state when input value changes', () => {
        NumberOfEventsWrapper.setState({
            number: 32
        });
        const eventObject = { target: { value: 15 } };
        NumberOfEventsWrapper.find('.numberInput').simulate('change', eventObject);
        expect(NumberOfEventsWrapper.state('number')).toBe(15);
    });
});