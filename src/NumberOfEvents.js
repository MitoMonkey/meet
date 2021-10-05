import React, { Component } from 'react';

class NumberOfEvents extends Component {
     state = {
        number: 32
    }
    
    handleInputChanged = (event) => {
        const value = event.target.value;
        this.setState({
            number: value
        });
        this.props.updateListLength(value);
    }; 

    render() {
        return (
            <div className="NumberOfEvents">
                <label htmlFor="numberInput">Limit length of event list</label>
                <input
                    type="number"
                    className="numberInput"
                    id="numberInput"
                    value={this.state.number}
                    // onChange={this.props.updateEvents(undefined, this.state.number)}
                    onChange={this.handleInputChanged}
                />
            </div>
        );
    }
}

export default NumberOfEvents;