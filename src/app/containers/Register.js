import React from "react";
import { render } from "react-dom";
import { Link } from "react-router";
import { Dashboard } from "./Dashboard"
import { InputElement } from "../../app/component/InputElement"
import { connect } from 'react-redux';


class Register extends React.Component {



    saveDetails() {
        alert('user name:' + this.props.Register.username + ' user pass:' + this.props.Register.password + ' user email' + (this.props.Register.useremail));
        this.setState({
            data: this.props.Register.username
        });
    }

    render() {
        return (
            <div>

                <h2 >Register</h2>
                <Link to={"/"}>Dashboard</Link><hr />
                <InputElement inputType={'text'} fieldname={'username'}
                    placeholder={'User Name'} value={this.props.Register.username} controlFunc={this.props.Register.handleOnchangeEvents} />
                <hr />
                <InputElement inputType={'text'} fieldname={'useremail'}
                    placeholder={'Email Address'} value={this.props.Register.useremail} controlFunc={this.props.handleOnchangeEvents} />
                <hr />
                <InputElement inputType={'password'} fieldname={'password'}
                    placeholder={'Password'} value={this.props.Register.password} controlFunc={this.props.handleOnchangeEvents} />
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
    console.log(state.reducerRegister);
    return {
        Register: state.reducerRegister
    }
};

const mapDispatchToProps = (dispatch) => {
    console.log(state.reducerRegister);
    return {
        handleOnchangeEvents: (name) => {
            type: 'HANDLE_ONCLICK_EVENT'
            payload: name
        }
    }
};


export default connect(mapStateToProps)(Register);