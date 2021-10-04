import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import './nprogress.css';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32
  }

  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ? events : events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents,
        numberOfEvents: eventCount
      });
    });
  } 
/*   updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      // let eventsToRender;
      if (location) {
        events = (location === 'all') ? events : events.filter((event) => event.location === location);
      }
      if (eventCount) {
        events = (eventCount) ? events.slice(0, eventCount) : events;
      }
      this.setState({
        numberOfEvents: eventCount,
        events: events
      });
    });
  } */

  updateListLength = (length) => {
    //let newEvents = this.state.events.slice(0, length);
    this.setState({
        numberOfEvents: length
      });
  }

componentDidMount() {
    this.mounted = true; 
    getEvents().then((events) => {
      if (this.mounted) { // necessary because otherwise the JEST test finishes and unmounts the component before getEvents() is finished and hence the test produces an error
        // let firstEvents = events.slice(0, this.state.numberOfEvents);
        this.setState({ events , locations: extractLocations(events) });
      }
    });
  }
  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <EventList events={this.state.events.slice(0, this.state.numberOfEvents)} />
        <NumberOfEvents updateListLength={this.updateListLength} />
      </div>
    );
  }
}

export default App;
