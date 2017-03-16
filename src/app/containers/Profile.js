import React from "react";
import { render } from "react-dom";
import { connect } from 'react-redux';


class Profile extends React.Component {

    render() {
        //console.log(this.props);
        return (
            <div>
                <h2>Profile</h2>
                <p>{this.props.Profile.data}</p>
            </div>
        );
    }
}

Profile.propTypes = {
    username: React.PropTypes.string,
    useremail: React.PropTypes.string
};

const mapStateToProps = (state) => {
    //console.log(state.reducerRegister);
    return {
        Profile: state.reducerRegister
    }
};


export default connect(mapStateToProps)(Profile);