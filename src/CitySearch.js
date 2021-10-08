import React, { Component } from 'react';
import { InfoAlert } from './Alert';

class CitySearch extends Component {
    state = {
        query: '',
        suggestions: [],
        showSuggestions: undefined
    }
    
    handleInputChanged = (event) => {
        const value = event.target.value;
        const suggestions = this.props.locations.filter((location) => {
            return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        });
        if (suggestions.length === 0) {
            this.setState({
                query: value,
                infoText: 'We can not find the city you are looking for. Please try another city',
            });
        } else {
            return this.setState({
                query: value,
                suggestions,
                infoText: null
            });
        }
    };        
    handleItemClicked = (suggestion) => {
        this.setState({
            query: suggestion,
            showSuggestions: false,
            infoText: null
        });
        this.props.updateEvents(suggestion);
    }
    handleFocus = (event) => {
        event.target.select();
        this.setState({ showSuggestions: true });
    }

    render() {
        return (
            <div className="CitySearch">
                <InfoAlert className="InfoAlert" text={this.state.infoText} />
                <label htmlFor="city">Choose city</label>
                <div className="citySearchContainer">
                <input
                    type="text"
                    className="city"
                    id="city"
                    value={this.state.query}
                    onChange={this.handleInputChanged}
                    onFocus={this.handleFocus}
                />
                <ul className="suggestions" style={this.state.showSuggestions ? {} : { display: 'none' }}>
                    {this.state.suggestions.map((suggestion) => (
                        <li 
                            key={suggestion} 
                            onClick={() => this.handleItemClicked(suggestion)}
                        >{suggestion}</li>
                    ))}
                    <li key='all' onClick={() => this.handleItemClicked("all")}>
                        <b>See all cities</b>
                    </li>
                </ul>
                </div>
            </div>
        );
    }
}

export default CitySearch;