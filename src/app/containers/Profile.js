import React from "react";
import { render } from "react-dom";
import { connect } from 'react-redux';


class Profile extends React.Component {

    render() {
        // console.log(this.Profile);
        return (
            <div>
                <h2>Profile</h2>
                <p>{this.props.Profile.username}</p>
                <p>{this.props.Profile.useremail}</p>
            </div>
        );
    }
}

Profile.propTypes = {
    username: React.PropTypes.string,
    useremail: React.PropTypes.string
};

const mapStateToProps = (state) => {
    //console.log(state.reducerProfile.Profile);
    return {
        Profile: state.reducerProfile
    }
};


export default connect(mapStateToProps)(Profile);