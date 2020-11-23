import React, { Component } from 'react';

class Event extends Component {
  state = {
    showDetails: false,
    buttonText: 'Details'
  }

  handleButtonClicked = () => {
    if (!this.state.showDetails) {
      this.setState({
        showDetails: true,
        buttonText: 'Hide details'
      })
    }
    else {
      this.setState({
        showDetails: false,
        buttonText: 'Details'
      })
    }
  }

  render() {
    const { event } = this.props;
    const { showDetails } = this.state;
    if (!showDetails) {
      return (
        <div className='event'>
          <h2 className='summary'>{event.summary}</h2>
          <p className='time'>{event.start.dateTime}</p>
          <p className='timezone'>{event.start.timeZone}</p>
          <p className='location'>{event.location}</p>
          <button className='details-btn' onClick={() => this.handleButtonClicked()}>{this.state.buttonText}</button>
        </div>
        )
    }
    else {
      return (
        <div className='event'>
          <h2 className='summary'>{event.summary}</h2>
          <p className='time'>{event.start.dateTime}</p>
          <p className='timezone'>{event.start.timeZone}</p>
          <p className='location'>{event.location}</p>
          <a href={event.htmlLink} className='eventLink' target="_blank" rel="noreferrer">
            See event on Google Calendar <i className="arrow left"></i>
          </a>
          <p className='description'>{event.description}</p>
          <button className='details-btn' onClick={() => this.handleButtonClicked()}>{this.state.buttonText}</button>
        </div>
      )
    }
  }
}

export default Event;
