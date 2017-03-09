import React from "react";
import { render } from "react-dom";

export class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'Demo',
            useremail: 'demo@gmail.com'
        }
    }
    render() {
        return (
            <div>
                <h2>Profile</h2>
                <p>{this.state.username}</p>
                <p>{this.state.useremail}</p>
            </div>
        );
    }
}

Profile.propTypes={
    username:React.PropTypes.string,
    useremail:React.PropTypes.string
}