import React, {
  Component
} from 'react';
import './nprogress.css';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';
import { InfoAlert } from './Alert';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    currentLocation: 'all',
  }

  updateEvents = (location, eventCount) => {
    const { currentLocation, numberOfEvents } = this.state;
    if (location) {
      getEvents().then((events) => {
        const locationEvents =
          location === 'all'
            ? events
            : events.filter((event) => event.location === location);
        const filteredEvents = locationEvents.slice(0, numberOfEvents);
        this.setState({
          events: filteredEvents,
          currentLocation: location,
        });
      });
    } 
    else {
      getEvents().then((events) => {
        const locationEvents =
          currentLocation === 'all'
            ? events
            : events.filter(
                (event) => event.location === currentLocation
              );
        const filteredEvents = locationEvents.slice(0, eventCount);
        this.setState({
          events: filteredEvents,
          numberOfEvents: eventCount,
        });
      });
    }
  }
  
  componentDidMount() {
    this.mounted = true;
    if (!navigator.onLine){
      this.setState({
        InfoAlert: 'You are offline. Data has been loaded from the cache.'
      });
    } else {
      this.setState({
        InfoAlert: '',
      });
    }
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events: events, locations: extractLocations(events)
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return ( 
    <div className = 'App' >
      <h1 className='App-title'><span className="circle-sketch-highlight">Meet App</span></h1>
      <h2 className='CitySearch-title'>Choose your nearest city</h2>
      <CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/>
      <h2>Number of events:</h2>
      <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEvents={this.updateEvents}/>
      <InfoAlert text={this.state.InfoAlert} />
      <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;