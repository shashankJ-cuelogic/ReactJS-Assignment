import React from "react";
import { render } from "react-dom";
import { Link } from "react-router";
import { Dashboard } from "./Dashboard"
import { InputElement } from "../../app/component/InputElement"
import { connect } from 'react-redux';
import { saveDetailsFunction } from '../actions/registerActions';
import { browserHistory } from 'react-router';



class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            useremail: '',
            username: '',
            password: ''
        }
        this.saveDetails = this.saveDetails.bind(this);
        this.handleOnchange = this.handleOnchange.bind(this);

    }

    handleOnchange(event) {
        var field = event.target.name;
        var change = {};
        change[field] = event.target.value;
        //console.log(field)
        this.setState(change);
    }

    saveDetails() {
        //alert('user name:' + this.props.Register.username + ' user pass:' + this.props.Register.password + ' user email' + (this.props.Register.useremail));
        this.setState({
            data: this.state.username
        });
        // console.log(this.state.username);
        this.props.saveDetailsFunction(this.state.username);
        browserHistory.push('/profile');
    }

    render() {
        return (
            <div>

                <h2 >Register</h2>
                <Link to={"/"}>Dashboard</Link><hr />
                <InputElement inputType={'text'} fieldname={'username'}
                    placeholder={'User Name'} value={this.state.username} controlFunc={this.handleOnchange} />
                <hr />
                <InputElement inputType={'text'} fieldname={'useremail'}
                    placeholder={'Email Address'} value={this.state.useremail} controlFunc={this.handleOnchange} />
                <hr />
                <InputElement inputType={'password'} fieldname={'password'}
                    placeholder={'Password'} value={this.state.password} controlFunc={this.handleOnchange} />
                <hr />
                <button onClick={this.saveDetails}>Save</button>

            </div>
        );
    }
}

Register.propTypes = {
    useremail: React.PropTypes.string,
    username: React.PropTypes.string,
    password: React.PropTypes.string


};

const mapStateToProps = (state) => {
    //console.log(state.reducerRegister);
    return {
        Register: state.reducerRegister
    }
};

const mapDispatchToProps = (dispatch) => {
    console.log(dispatch);
    return {
        saveDetailsFunction: (data) => {
            dispatch(saveDetailsFunction(data));
        }
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(Register);