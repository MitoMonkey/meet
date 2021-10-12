import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import CitySearch from '../CitySearch';
import App from '../App';
import { mockData } from '../mock-data';
import { extractLocations } from '../api';

const feature = loadFeature('./src/features/filterEventsByCity.feature');

defineFeature(feature, test => {
    test('When user hasn’t searched for a city, show upcoming events from all cities.', ({ given, when, then }) => {
        given('user hasn’t searched for any city', () => {
        });
        
        let AppWrapper;
        when('the user opens the app', () => {
            AppWrapper = mount(<App />); // enzyme full rendering
        });

        then('the user should see the list of upcoming events.', () => {
            AppWrapper.update(); // because getting events is async
            expect(AppWrapper.find('.event').hostNodes()).toHaveLength(mockData.length); // sufficient because we know that mockData.length < 32
        });
    });

    test('User should see a list of suggestions when they search for a city', ({ given, when, then }) => {
        let CitySearchWrapper, locations;
        locations = extractLocations(mockData);
        given('the main page is open', () => {
            CitySearchWrapper = shallow(<CitySearch updateEvents={() => { }} locations={locations} />); // shallow is enough as we don't need children of CitySearch
        });

        when('the user starts typing in the city textbox', () => {
            CitySearchWrapper.find('.city').simulate('change', { target: { value: 'Berlin' } });
        });

        then('the user should receive a list of cities (suggestions) that match what they’ve typed', () => {
            expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(2); // "Berlin, Germany" and "see all cities"
        });
    });

    test('User can select a city from the suggested list', ({ given, and, when, then }) => {
        let AppWrapper;
        given('user was typing “Berlin” in the city textbox', async () => {
            AppWrapper = await mount(<App />);
            AppWrapper.find('.city').simulate('change', { target: { value: 'Berlin' } });
        });

        and('the list of suggested cities is showing', () => {
            AppWrapper.update(); // because previous "expect" is async
            expect(AppWrapper.find('.suggestions li')).toHaveLength(2);
            const CitySearchWrapper = AppWrapper.find(CitySearch);
            expect(CitySearchWrapper.state('showSuggestions')).not.toBe(false);
            // expect(AppWrapper.find('.suggestions').prop('style')).not.toContain({display: 'none'});
            expect(AppWrapper.find('.suggestions').hasClass('display-none')).toEqual(true);
        });

        when('the user selects a city (e.g., “Berlin, Germany”) from the list', () => {
            AppWrapper.find('.suggestions li').at(0).simulate('click');
        });

        then('their city should be changed to that city (i.e., “Berlin, Germany”)', () => {
            const CitySearchWrapper = AppWrapper.find(CitySearch);
            expect(CitySearchWrapper.state('query')).toBe('Berlin, Germany');
        });

        and('the user should receive a list of upcoming events in that city', () => {
            expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
        });
    });
});