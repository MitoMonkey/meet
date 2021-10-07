import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
     state = {
        number: 32
    }
    
    handleInputChanged = (event) => {
        const value = event.target.value;
        if (value < 1 || value > 100) {
            this.setState({
                number: value,
                infoText: 'The number needs to be >1 and <100 !',
            });
        }
        else {
            this.setState({
                number: value,
                infoText: ''
            });
            this.props.updateListLength(value);
        }
    }; 

    render() {
        return (
            <div className="NumberOfEvents">
                <label htmlFor="numberInput">Limit length of event list to:</label><br/>
                <input
                    type="number"
                    className="numberInput"
                    id="numberInput"
                    value={this.state.number}
                    // onChange={this.props.updateEvents(undefined, this.state.number)}
                    onChange={this.handleInputChanged}
                />
                <ErrorAlert className="ErrorAlert" text={this.state.infoText} />
            </div>
        );
    }
}

export default NumberOfEvents;