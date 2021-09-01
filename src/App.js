import React, { Component } from 'react';
import './nprogress.css'
import './App.css';
import { NotificationAlert } from './Alert';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import WelcomeScreen from './WelcomeScreen';
import EventGenre from './EventGenre';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    currentCity: "all",
    notificationText: '',
    showWelcomeScreen: undefined
  }

  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all')
        ? events.slice(0, eventCount)
        : events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents.slice(0, eventCount),
        currentCity: location
      });
    });
  }

  //I this function will update tbe number of events of app.state fom <NumberOfEvents>
  updateNumberOfEvents(eventNumber) {
    this.setState({ numberOfEvents: eventNumber });
    const { currentCity } = this.state;
    this.updateEvents(currentCity, eventNumber);
  }

  async componentDidMount() {
    const { numberOfEvents } = this.state;
    this.mounted = true;

    if (navigator.onLine === false) {
      this.setState({
        notificationText: 'It seems you are offline. To update your list of events please connect to the internet.'
      });
    } else {
      this.setState({
        notificationText: ''
      });
    }

    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);

    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });

    if ((code || isTokenValid) && this.mounted) {

      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({
            events: events.slice(0, numberOfEvents),
            locations: extractLocations(events),
          });
        }
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return { city, number };
    })
    return data;
  };

  render() {
    if (this.state.showWelcomeScreen === undefined) return <div className="App" />

    return (
      <div className="App">
        <h1>Meet app</h1>
        <h4>Find upcoming events around the world for full-stack developers</h4>
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
          numberOfEvents={this.state.numberOfEvents}
        />
        <NumberOfEvents
          updateNumberOfEvents={(e) => this.updateNumberOfEvents(e)}
          numberOfEvents={this.state.numberOfEvents}
        />

        <NotificationAlert text={this.state.notificationText} />
        <div className="data-vis-wrapper">

          <EventGenre events={this.state.events} />

          <ResponsiveContainer height={400} >
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid />
              <XAxis type="category" dataKey="city" name="city" />
              <YAxis
                allowDecimals={false}
                type="number"
                dataKey="number"
                name="number of events"
              />
              <Tooltip cursor={{ strokeDasharray: "3 3" }} />
              <Scatter data={this.getData()} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
        <EventList events={this.state.events} />

        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />

      </div>
    );
  }
}

export default App;