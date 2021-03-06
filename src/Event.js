import React, { Component } from "react";
import PropTypes from 'prop-types';

class Event extends Component {

    state = {
        showHideDetails: false
    };

    toggleEvent = () => {
        this.setState({
            showHideDetails: this.state.showHideDetails === true ? false : true
        })
    };

    render() {
        const { event } = this.props
        return <div className="eventCard">

            <h1 className="eventSummary">{event.summary}</h1>

            <p className="eventDateTime">{event.start.dateTime}</p>

            <p className="eventTimeZone">{event.start.timeZone}</p>

            <p className="eventLocation">{event.location}</p>

            {this.state.showHideDetails && (
                <div className='event-details'>
                    <h2>About event:</h2>
                    <a href={event.htmlLink}>See Details on Google Calendar</a>
                    <p className="description">{event.description}</p>
                </div>
            )}

            {this.state.showHideDetails === false && (
                <button className="btn-ShowDetails" onClick={() => this.toggleEvent()}>
                    Show details
                </button>
            )}
            {this.state.showHideDetails === true && (
                <button className="btn-HideDetails" onClick={() => this.toggleEvent()}>
                    Hide details
                </button>
            )}

        </div>;
    }
}

Event.propTypes = {
    event: PropTypes.shape({
        summary: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,

}

export default Event;