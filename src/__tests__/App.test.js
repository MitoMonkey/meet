import React from 'react';
import { shallow } from 'enzyme'; // shallow rendering API
import App from '../App';
import EventList from '../EventList';

describe('<App /> component', () => { // create "scope" (=a group of related tests) for <App /> component
    test('render list of events', () => {
        const AppWrapper = shallow(<App />);
        expect(AppWrapper.find(EventList)).toHaveLength(1); // make sure there is only one EventList component within the App component
    });
});