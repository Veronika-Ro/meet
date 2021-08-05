import React, { Component } from 'react';
import './nprogress.css'
import './App.css';
import { NotificationAlert } from './Alert';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import WelcomeScreen from './WelcomeScreen';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';

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

  render() {
    if (this.state.showWelcomeScreen === undefined) return <div className="App" />

    return (
      <div className="App">
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

        <EventList events={this.state.events} />

        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />

      </div>
    );
  }
}

export default App;