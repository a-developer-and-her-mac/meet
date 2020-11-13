import React, { Component } from 'react';

class Event extends Component {
  state = {
    showDetails: false,
  }

  handleButtonClicked = () => {
    if (!this.state.showDetails) {
      this.setState({
        showDetails: true,
      })
    }
    else {
      this.setState({
        showDetails: false,
      })
    }
  }

  render() {
    const { event } = this.props;
    return (
    <div className='event'>
      <h2 className='summary'>{event.summary}</h2>
      <p className='description'>{event.description}</p>
      <p className='time'>{event.start.dateTime}</p>
      <p className='timezone'>{event.start.timeZone}</p>
      <p className='location'>{event.location}</p>
      <button className='details-btn' onClick={() => this.handleButtonClicked()}>Details</button>
    </div>
    )
  }
}

export default Event;
