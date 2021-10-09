import React, { Component } from 'react';
import Event from './Event';

class EventList extends Component {
    render() {
        const { events } = this.props;
        return (
            <>
            {(!navigator.onLine)
            ? <p className="offline">  It seems like you are currently offline. The event list may not be up to date.</p>
            : null
            }
            <ul className="EventList">
                {events.map(event =>
                    <li key={event.id}>
                        <Event event={event} />
                    </li>
                )}
            </ul>
            </>
        );
    }
}

export default EventList;