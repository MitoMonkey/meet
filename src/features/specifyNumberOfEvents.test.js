import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { shallow, mount } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';
import EventList from '../EventList';
import App from '../App';
import Event from '../Event';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');
const events = mockData;

defineFeature(feature, test => {
    test('When user hasn’t specified a number, 32 is the default number.', ({ given, when, then }) => {
        given('the user has not specified the number of events to be displayed', () => {

        });

        let AppWrapper;
        when('the user is viewing the list of events', () => {
            AppWrapper = mount(<App />); // enzyme full rendering
        });

        then('the default of max 32 events are displayed', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event').length).toBeLessThanOrEqual(32);
        });
    });

    test('User can change the number of events they want to see.', ({ given, when, then }) => {
        
        let AppWrapper;
        given('the list of events is displayed', () => {
            AppWrapper = mount(<App />);
        });

        when('the user specifies the number of events', () => {
            AppWrapper.update();
            AppWrapper.find('.numberInput').simulate('change', { target: { value: 1 }});
        });

        then('the length of the events list displayed is adjusted according to the specified number', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event').length).toBeLessThanOrEqual(1);
        });
        // another test may be expedient to check if the list length also increases again when number is set to a higher value
    });
});