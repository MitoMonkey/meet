import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import WelcomeScreen from './WelcomeScreen';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import './nprogress.css';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    showWelcomeScreen: undefined
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ? events : events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents
      });
    });
  } 
/*   updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      // let eventsToRender;
      if (location) {
        events = (location === 'all') ? events : events.filter((event) => event.location === location);
        this.setState({
          events: events
        });
      }
      if (eventCount) {
        events = (eventCount) ? events.slice(0, eventCount) : events;
        this.setState({
          numberOfEvents: eventCount,
          events: events // PROPLEM: If location is undefined in this instance, but was set previously, it will be reset now
        });
      }
    });
  } */

  updateListLength = (length) => {
    //let newEvents = this.state.events.slice(0, length);
    this.setState({
        numberOfEvents: length
      });
  }

async componentDidMount() {
    this.mounted = true; 
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) { // necessary because otherwise the JEST test finishes and unmounts the component before getEvents() is finished and hence the test produces an error
          this.setState({ events , locations: extractLocations(events) });
        }
      });
   }
  }
  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    if (this.state.showWelcomeScreen === undefined) return <div className="App" />
    if (this.state.showWelcomeScreen === true) return <WelcomeScreen getAccessToken={() => { getAccessToken() }} />
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents updateListLength={this.updateListLength} />
        <EventList events={this.state.events.slice(0, this.state.numberOfEvents)} />
        
      </div>
    );
  }
}

export default App;
