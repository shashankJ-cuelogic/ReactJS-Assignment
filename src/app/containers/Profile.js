import React from "react";
import { render } from "react-dom";
import { connect } from 'react-redux';
import { getImagesData } from '../actions/registerActions';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';

class Profile extends React.Component {

    render() {
        //console.log(this.props.Profile);
        var response = this.props.Profile.images.items;
        if (response != undefined) {

            if (response.length > 0) {
                for (var i = 0; i < response.length; i++) {
                    console.log(response[i].media.m);
                    $('#tester').append('<img src="' + response[i].media.m + '" alt="Smiley face" height="42" width="42">');
                }
            }
        }

        return (
            <div>

                <h2>Profile</h2>
                <p>{this.props.Profile.data}</p>
                <BlockUi tag="div" blocking={this.props.Profile.fetching} >
                    <p id='tester'></p>
                </BlockUi>
                <button onClick={this.props.startImages}>Get Images</button>
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


const mapDispatchToProps = (dispatch) => {
    //console.log(dispatch);

    return {
        startImages: () => {
            dispatch({ type: "FETCH_IMAGE_START" });
            dispatch(getImagesData());
            //dispatch({ type: "FETCH_IMAGE_RECEIVED" });
        }
    };
}



export default connect(mapStateToProps, mapDispatchToProps)(Profile);