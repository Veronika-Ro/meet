import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 32,
        errorText: ""
    }
    handleInputChanged = (event) => {
        const value = event.target.value;
        if (value < 1 || value > 32) {
            this.setState({
                numberOfEvents: value,
                errorText: 'Please select a number between 1 and 32'
            });
        } else {
            this.setState({
                numberOfEvents: value,
                errorText: ''
            });
            this.props.updateNumberOfEvents(event.target.value);
        }
    }

    render() {
        return (
            <div className="numberOfEvents">
                <input
                    type="number"
                    className="inputNumberOfEvents"
                    placeholder="Choose number of Events"
                    value={this.state.numberOfEvents}
                    onChange={(e) => this.handleInputChanged(e)}
                />
                <ErrorAlert className="errorAlert" text={this.state.errorText} />
            </div>
        );
    }
}


export default NumberOfEvents