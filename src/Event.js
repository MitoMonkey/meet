import React, { Component } from "react";

class Event extends Component {
    state = {
        collapsed: true
    }
    handleClick = () => {
        let toggledCollapsed = !this.state.collapsed;
        this.setState({
            collapsed: toggledCollapsed
        });
    }
    render() {
        const { event } = this.props;
        return <div className="event">
            <h1 className="title">{event.summary}</h1>
            <p className="date">{event.start.dateTime}</p>
            <p className="location">{event.location}</p>
            {(this.state.collapsed)
              ? null
                : <div className="eventExtra">
                    <a href={event.htmlLink} className="link">See details on google calendar</a>
                    <p className="description">{event.description}</p>
                </div>
            }
            <button className="toggleDetails details-btn" onClick={() => this.handleClick()}>{(this.state.collapsed) ? 'Show details' : 'Hide details'}</button>
        </div>;
    }
}
export default Event;