import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import {shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data_OLD';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');
const event = mockData[0];

defineFeature(feature, test => {
    test('An event element is collapsed by default.', ({ given, when, then }) => {
        given('the user has not clicked on a specific event', () => {

        });

        let EventWrapper;
        when('the user is viewing the list of events', () => {
            EventWrapper = shallow(<Event event={event}/>); // enzyme shallow rendering
        });

        then('the details of each event are collapsed/hidden', () => {
            expect(EventWrapper.find('.eventExtra')).toHaveLength(0);
        });
    });

    test('User can expand an event to see its details.', ({ given, when, then }) => {
        let EventWrapper;
        given('the user is viewing the list of events', () => {
            EventWrapper = shallow(<Event event={event} />);
        });

        when('the user clicks "Show Details" on an event', () => {
            EventWrapper.find('.details-btn').at(0).simulate('click');
        });

        then('the user should see a expanded view with details of that event', () => {
            expect(EventWrapper.find('.eventExtra')).toHaveLength(1);
        });
    });

    test('User can collapse an event to hide its details.', ({ given, when, then }) => {
        let EventWrapper;
        given('the user is viewing (expanded) details of one events', () => {
            EventWrapper = shallow(<Event event={event} />);
            EventWrapper.setState({collapsed: false});   
            expect(EventWrapper.find('.eventExtra')).toHaveLength(1);
        });

        when('the user clicks "Hide Details"', () => {
            EventWrapper.find('.details-btn').at(0).simulate('click');
        });

        then('the details of that event should collapse/hide', () => {
            expect(EventWrapper.find('.eventExtra')).toHaveLength(0);
        });
    });
 });