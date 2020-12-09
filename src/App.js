import React, {
  Component
} from 'react';
import './nprogress.css';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import EventGenre from './EventGenre';
import { extractLocations, getEvents } from './api';
import { InfoAlert } from './Alert';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    currentLocation: 'all',
    infoAlert: ''
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

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location
      === location).length
      const city = location.split(' ').shift()
      return { city, number };
    })
    return data;
  };
  
  componentDidMount() {
    this.mounted = true;
    if (!navigator.onLine){
      this.setState({
        infoAlert: 'You are offline. Data has been loaded from the cache.'
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
    const { locations, numberOfEvents, events } = this.state;
    return ( 
    <div className = 'App' >
      <h1 className='App-title'><span className="circle-sketch-highlight">Meet App</span></h1>
      <h2 className='CitySearch-title'>Choose your nearest city</h2>
      <CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/>
      <h2>Number of events:</h2>
      <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEvents={this.updateEvents}/>
      <div className='data-vis-wrapper'>
        <EventGenre events={events} />
        <ResponsiveContainer height={400}>
        <ScatterChart
       margin={{
         top: 20, right: 20, bottom: 20, left: 20,
       }}
      >
        <CartesianGrid />
        <XAxis type='category' dataKey='city' name='city' />
        <YAxis type='number' dataKey='number' name='event number' />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter data={this.getData()} fill='#790c5a'/>
      </ScatterChart>
      </ResponsiveContainer>
      </div>
      <InfoAlert text={this.state.infoAlert} />
      <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;