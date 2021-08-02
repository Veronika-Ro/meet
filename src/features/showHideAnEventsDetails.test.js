import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import App from '../App';
import { mount } from 'enzyme';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

    let AppWrapper;

    test('An event element is collapsed by default', ({ given, when, then }) => {
        given('the user has not expanded an event element', () => {

        });

        when('the user opens the app', () => {
            AppWrapper = mount(<App />);
        });

        then('the user will see the collapsed event elements', () => {
            AppWrapper.update();
            expect(AppWrapper.find(".event-details")).toHaveLength(0);
        });
    });

    test('User can expand an event to see its details', ({ given, when, then }) => {
        given('the user has not expanded an event element', () => {

        });

        when('the user clicks on Show Details', () => {
            AppWrapper.find('.btn-ShowDetails').at(1).simulate("click");
        });

        then('event element will expand', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event-details')).toHaveLength(1);
            AppWrapper.unmount();
        });
    });

    test('User can collapse an event to hide its details', ({ given, when, then }) => {
        given('the user has expanded an event element', () => {
            AppWrapper = mount(<App />);
            AppWrapper.find('.btn-ShowDetails').at(1).simulate("click");
            AppWrapper.update();
            expect(AppWrapper.find('.event-details')).toHaveLength(1);
        });

        when('the user clicks on Hide Details', () => {
            AppWrapper.find('.btn-HideDetails').at(1).simulate("click");
        });

        then('the event elent will collapse', () => {
            expect(AppWrapper.find('.event-details')).toHaveLength(0);
        });
    });
});