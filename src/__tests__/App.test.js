import React from 'react';
import { shallow, mount } from 'enzyme'; // shallow rendering and full rendering APIs
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';
import { mockData } from '../mock-data';
import { extractLocations, getEvents } from '../api';

describe('<App /> component', () => { // create "scope" (=a group of related tests) for <App /> component unit testing
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

describe('<App /> integration', () => { // scope for integration testing
    let AppWrapper;
    beforeEach(() => {
        AppWrapper = mount(<App />);
    })
    afterEach(() => {
        AppWrapper.unmount();
    })
    
    test('App passes "events" state as a prop to EventList', () => {
        //const AppWrapper = mount(<App />);
        AppWrapper.update();
        const AppEventsState = AppWrapper.state('events');
        console.log('events: ' + AppEventsState);
        expect(AppEventsState).not.toEqual(undefined);
        expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
        //AppWrapper.unmount();
    });
    test('App passes "locations" state as a prop to CitySearch', () => {
        // const AppWrapper = mount(<App />);
        AppWrapper.update();
        const AppLocationsState = AppWrapper.state('locations');
        expect(AppLocationsState).not.toEqual(undefined);
        expect(AppWrapper.find(CitySearch).props().locations).toEqual(AppLocationsState);
        //AppWrapper.unmount();
    });
    test('get list of events matching the city selected by the user', async () => {
        // const AppWrapper = mount(<App />);
        const CitySearchWrapper = AppWrapper.find(CitySearch);
        const locations = extractLocations(mockData);
        CitySearchWrapper.setState({ suggestions: locations });
        const suggestions = CitySearchWrapper.state('suggestions');
        const selectedIndex = Math.floor(Math.random() * (suggestions.length)); // will evaluate to an integer value ranging from 0 to suggestion.length - 1
        const selectedCity = suggestions[selectedIndex];
        await CitySearchWrapper.instance().handleItemClicked(selectedCity); // async because handleItemClicked also leads to a call of getEvents()
        const allEvents = await getEvents();
        const eventsToShow = allEvents.filter(event => event.location === selectedCity);
        expect(AppWrapper.state('events')).toEqual(eventsToShow);
        //AppWrapper.unmount();
    });
    test('get list of all events when user selects "See all cities"', async () => {
        //const AppWrapper = mount(<App />);
        const suggestionItems = AppWrapper.find(CitySearch).find('.suggestions li');
        await suggestionItems.at(suggestionItems.length - 1).simulate('click'); // last element in suggestionItems is "See all cities"
        const allEvents = await getEvents();
        expect(AppWrapper.state('events')).toEqual(allEvents);
        //AppWrapper.unmount();
    });

    test('Render EventList with max length according to numberOfEvents state', async () => {
        const AppWrapper = mount(<App />);
        const allEvents = await getEvents();
        AppWrapper.setState({ numberOfEvents: 1, events: allEvents});
        const EventListWrapper = AppWrapper.find(EventList);
        expect(EventListWrapper.props().events.length).toBeLessThanOrEqual(AppWrapper.state('numberOfEvents'));
        AppWrapper.unmount();
    });
    test('Change max length of event list when NumberOfEvents input value changes', async () => {
        //const AppWrapper = mount(<App />);
        const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
        const eventObject = { target: { value: 3 } };
        await NumberOfEventsWrapper.find('.numberInput').simulate('change', eventObject);
        expect(AppWrapper.state('numberOfEvents')).toEqual(NumberOfEventsWrapper.state('number'));
        const EventListWrapper = AppWrapper.find(EventList);
        expect(EventListWrapper.props().events.length).toBeLessThanOrEqual(NumberOfEventsWrapper.state('number'));
        //AppWrapper.unmount();
    });
    test('keep max length of event list when city is selected', async () => {
        //const AppWrapper = mount(<App />);
        const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
        const CitySearchWrapper = AppWrapper.find(CitySearch);
        const EventListWrapper = AppWrapper.find(EventList);
        const eventObject = { target: { value: 1 } };
        await NumberOfEventsWrapper.find('.numberInput').simulate('change', eventObject);
        const locations = extractLocations(mockData);
        CitySearchWrapper.setState({ suggestions: locations });
        const suggestions = CitySearchWrapper.state('suggestions');
        const selectedIndex = Math.floor(Math.random() * (suggestions.length)); // will evaluate to an integer value ranging from 0 to suggestion.length - 1
        const selectedCity = suggestions[selectedIndex];
        await CitySearchWrapper.instance().handleItemClicked(selectedCity); // async because handleItemClicked also leads to a call of getEvents()
        expect(EventListWrapper.props().events.length).toBeLessThanOrEqual(NumberOfEventsWrapper.state('number'));
        expect(AppWrapper.state('numberOfEvents')).toEqual(NumberOfEventsWrapper.state('number'));
        //AppWrapper.unmount();
    });     
});