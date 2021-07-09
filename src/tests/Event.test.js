import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';


describe('<Event /> component', () => {
    let event, EventWrapper;
    beforeAll(() => {
        event = mockData[0];
        EventWrapper = shallow(<Event event={event} />);
    });
    test('an event is rendered', () => {
        expect(EventWrapper.find('.eventCard')).toHaveLength(1);
    });
    test('event contains name of the event', () => {
        expect(EventWrapper.find('.eventSummary').text()).toBe(event.summary);
    });
    test('event contains date and time of the event', () => {
        expect(EventWrapper.find('.eventDateTime').text()).toBe(event.start.dateTime);
    });
    test('event contains time zone of the event', () => {
        expect(EventWrapper.find('.eventTimeZone').text()).toBe(event.start.timeZone);
    });
    test('event contains location of the event', () => {
        expect(EventWrapper.find('.eventLocation').text()).toBe(event.location);
    });
    test('button show details is rendered', () => {
        expect(EventWrapper.find('.btn-ShowDetails')).toHaveLength(1);
    });

    test('render collapsed details after click show-details', () => {
        EventWrapper.find('.btn-ShowDetails').simulate('click');
        expect(EventWrapper.state('showHideDetails')).toBeTruthy();
    })

    test('render expanded details after click show details', () => {
        EventWrapper.find('.btn-ShowDetails').simulate('click');
        expect(EventWrapper.state('showHideDetails')).toBeFalsy();
    })

});