import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import App from '../App';
import { mount } from 'enzyme';

const feature = loadFeature('./src/features/numberOfEvents.feature');

defineFeature(feature, test => {
    let AppWrapper;

    test('When user hasnt specified a number, 32 is the default number', ({ given, when, then }) => {
        given('the main page is open', () => {
            AppWrapper = mount(<App />);
        });

        when('the user looks at the number of the events displayed', () => {

        });

        then('the number of events the user will be able to see is 32', () => {
            AppWrapper.update();
            expect(AppWrapper.state('numberOfEvents')).toBe(32);
            AppWrapper.unmount();
        });
    });


    test('User can change the number of events they want to see', ({ given, when, then }) => {

        given('the main page is open', () => {
            AppWrapper = mount(<App />);
        });

        when('the user selects a different number of events to be displayed at the top of the page', () => {

            AppWrapper.find('.inputNumberOfEvents').simulate('change', { target: { value: '2' } });
        });

        then('the user will be able to see the selected number of events', () => {
            AppWrapper.update();
            expect(AppWrapper.state('numberOfEvents')).toBe("2");
        });
    });
});