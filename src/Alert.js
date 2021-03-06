import React, { Component } from 'react';

class Alert extends Component {
    constructor(props) {
        super(props);
        this.border = null;
        this.className = '';
    }

    getStyle = () => {
        return {
            border: this.border            
        };
    }

    render() {
        return (
            <div className="Alert">
                {(this.props.text)
                ?<p style={this.getStyle()} className={this.className}>{this.props.text}</p>
                : null}
            </div>
        );
    }
}

class InfoAlert extends Alert {
    constructor(props) {
        super(props);
        this.border = '2px solid blue';
        this.className = 'InfoAlert';
    }
}
class ErrorAlert extends Alert {
    constructor(props) {
        super(props);
        this.border = '2px solid red';
        this.className = 'ErrorAlert';
    }
}

export { InfoAlert, ErrorAlert };