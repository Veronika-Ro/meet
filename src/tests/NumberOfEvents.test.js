import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    });
    test('render text input', () => {
        expect(NumberOfEventsWrapper.find('.eventsNumber')).toHaveLength(1);
    });
    test('renders text number input', () => {
        const number = NumberOfEventsWrapper.state('numberOfEvents');
        expect(NumberOfEventsWrapper.find('.eventsNumber').prop('value')).toBe(number);
    });
    test('change state when input changes', () => {
        const eventObject = { target: { value: 2 } };
        NumberOfEventsWrapper.find('.eventsNumber').simulate('change', eventObject);
        expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(2);
    });
});