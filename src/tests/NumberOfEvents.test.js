import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    });
    test('render text input', () => {
        expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
    });
    test('renders text number input', () => {
        const number = NumberOfEventsWrapper.state('numberOfEvents');
        expect(NumberOfEventsWrapper.find('.inputNumberOfEvents').prop('value')).toBe(number);
    });
    test("renders text input correctly", () => {
        const numberOfEvents = NumberOfEventsWrapper.state("numberOfEvents");
        expect(NumberOfEventsWrapper.find(".inputNumberOfEvents").prop("value")).toBe(
            numberOfEvents
        );
    });
});