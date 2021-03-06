import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import WelcomeScreen from './WelcomeScreen';
import EventGenre from './EventGenre';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import './nprogress.css';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

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
      /* if (location === 'all') {
        locationEvents = events;
        document.getElementsByClassName('eventsPerCity')[0].style.display = 'block';
      } else {
        locationEvents = events.filter((event) => event.location === location);
        document.getElementsByClassName('eventsPerCity')[0].style.display = 'none';
      } */
      this.setState({
        events: locationEvents
      });
    });
  } 

  updateListLength = (length) => {
    this.setState({
        numberOfEvents: length
      });
  }

  // local testing version
/*   componentDidMount() {
    this.mounted = true;
      getEvents().then((events) => {
        if (this.mounted) { // necessary because otherwise the JEST test finishes and unmounts the component before getEvents() is finished and hence the test produces an error
          this.setState({ events, locations: extractLocations(events) });
        }
      })
  } */

  // production version
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

  // prepare data for chart
  getData = () => {
    const { locations, events } = this.state;
    const eventsSlice = events.slice(0, this.state.numberOfEvents);
    const data = locations.map((location) => {
      const number = eventsSlice.filter((event) => event.location === location).length;
      const city = location.split(', ').shift(); // to get only the city (first part of location) without the country (second part)
      return { city, number };
    })
    return data.filter((city) => city.number !== 0);
  };

  render() {
    if (this.state.showWelcomeScreen === undefined) return <div className="App" />
    if (this.state.showWelcomeScreen === true) return <WelcomeScreen getAccessToken={() => { getAccessToken() }} />
    return (
      <div className="App">
        <h1 className="app_title" >Meet App</h1>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents updateListLength={this.updateListLength} />

        <div className="data-vis-wrapper">
          <div className="popularity">
            <h4>Popularity of topics</h4>
            <EventGenre events={this.state.events.slice(0, this.state.numberOfEvents)}/>
          </div>
          <div className="eventsPerCity" >
            <h4>Events in each city</h4>
            <ResponsiveContainer height={400} >
              <ScatterChart margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="category" dataKey="city" name="city" angle="-30" interval={0}/>
                <YAxis type="number" dataKey="number" name="number of events" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter data={this.getData()} fill="#009688" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>

        <EventList events={this.state.events.slice(0, this.state.numberOfEvents)} />
      </div>
    );
  }
}

export default App;
