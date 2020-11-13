import React, {
  Component
} from 'react';
import './nprogress.css';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import Event from './Event';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';

class App extends Component {
  state = {
    events: [],
    locations: []
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ? 
        events : 
        events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents
      });
    });
  }

  componentDidMount() {
    this.mounted = true;
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
      <h1 className='App-title'><span class="circle-sketch-highlight">Meet App</span></h1>
      <h2 className='CitySearch-title'>Choose your nearest city</h2>
      <CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/>
      <h2>Number of events:</h2>
      <NumberOfEvents />
      <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;