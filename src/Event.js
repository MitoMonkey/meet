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
        return <div>
            <h1 className="title">{event.summary}</h1>
            <p className="date">{event.start.dateTime}</p>
            <p className="location">{event.location}</p>
            {(this.state.collapsed)
              ? null
                : <div>
                    <a href={event.htmlLink} className="link">See details on google calendar</a>
                    <p className="description">{event.description}</p>
                </div>
            }
            {(this.state.collapsed)
                ? <button className="toggleDetails" onClick={() => this.handleClick()}>Show details</button>
                : <button className="toggleDetails" onClick={() => this.handleClick()}>Hide details</button>
            }
        </div>;
    }
}
export default Event;