import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 32,
        ErrorText: ""
    }
    handleInputChanged = (event) => {
        const value = event.target.value;

        this.setState({
            numberOfEvents: value
        });
        this.props.updateNumberOfEvents(event.target.value);
    };

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
            </div>
        );
    }
}


export default NumberOfEvents