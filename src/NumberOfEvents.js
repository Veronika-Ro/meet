import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 32,
        ErrorText: ""
    }
    handleInputChanged = (event) => {
        const value = event.target.value;

        this.setState({
            numberOfEvents: value,
            ErrorText: '',
        });
        //shoul I add? this.props.updateEvents('', value);
    };

    render() {
        return (
            <div className="numberOfEvents">
                <p>Number of Events:</p>
                <input
                    type="number"
                    className="eventsNumber"
                    placeholder="Enter number of Events"
                    value={this.state.numberOfEvents}
                    onChange={this.handleInputChanged}
                />
            </div>
        );
    }
}


export default NumberOfEvents