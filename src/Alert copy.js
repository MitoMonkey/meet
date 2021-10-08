import React, { Component } from 'react';

class Alert extends Component {
    constructor(props) {
        super(props);
        this.color = null;
        this.className = '';
    }

    getStyle = () => {
        return {
            color: this.color            
        };
    }

    render() {
        return (
            <div className="Alert">
                <p style={this.getStyle()} className={this.className}>{this.props.text}</p>
            </div>
        );
    }
}

class InfoAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'blue';
        this.className = 'InfoAlert';
    }
}
class ErrorAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'red';
        this.className = 'ErrorAlert';
    }
}

export { InfoAlert, ErrorAlert };