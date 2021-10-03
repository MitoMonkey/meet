import React from 'react';
import { shallow } from 'enzyme'; // shallow rendering API
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';

describe('<App /> component', () => { // create "scope" (=a group of related tests) for <App /> component
    let AppWrapper;
    beforeAll(() => {
        AppWrapper = shallow(<App />); // shallowly render the App component (= without a DOM or any children) and return a wrapper for the tests
    });
    test('render list of events', () => {
        expect(AppWrapper.find(EventList)).toHaveLength(1);
    });
    test('render CitySearch', () => {
        expect(AppWrapper.find(CitySearch)).toHaveLength(1);
    });
    test('render NumberOfEvents', () => {
        expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
    });
});