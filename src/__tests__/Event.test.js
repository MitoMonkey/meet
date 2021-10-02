import React from 'react';
import { shallow } from 'enzyme';
import { mockData } from '../mock-data';
import Event from '../Event';

describe('<Event /> component', () => {
    let event, EventWrapper;
    beforeAll(() => {
        event = mockData[0];
        EventWrapper = shallow(<Event event={event} />);
    });
    test('render collapsed event', () => {
        expect(EventWrapper.find('.title')).toHaveLength(1);
        expect(EventWrapper.find('.date')).toHaveLength(1);
        expect(EventWrapper.find('.location')).toHaveLength(1);
        expect(EventWrapper.find('.toggleDetails')).toHaveLength(1);
    });
    test('render additional elements in expanded view', () => {
        EventWrapper.setState({
            collapsed: false
        });
        expect(EventWrapper.find('.link')).toHaveLength(1);
        expect(EventWrapper.find('.description')).toHaveLength(1);
    });
    test('toggle state of "collapsed" onClick', () => {
        const before = EventWrapper.state('collapsed');
        EventWrapper.find('.toggleDetails').simulate('click');
        expect(EventWrapper.state('collapsed')).toBe(!before);
    });
    test('render correct event info', () => {
        EventWrapper.setState({
            collapsed: false
        });
        expect(EventWrapper.find('.title').text()).toBe(event.summary);
        expect(EventWrapper.find('.date').text()).toBe(event.start.dateTime);
        expect(EventWrapper.find('.location').text()).toBe(event.location);
        expect(EventWrapper.find('.link').prop('href')).toBe(event.htmlLink);
        expect(EventWrapper.find('.description').text()).toBe(event.description);
    });
});