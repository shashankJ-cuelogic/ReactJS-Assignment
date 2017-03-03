import React from "react";
import { render } from "react-dom";
import { Link } from "react-router";
import { Dashboard } from "./Dashboard"
import { InputElement } from "./InputElement"

export class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            useremail: '',
            username: '',
            password: ''
                      
        }
        this.setUserName = this.setUserName.bind(this);

    }


    setUserName(event) {
        this.setState({
            username: event.target.value
        });
    }

    setPassword(event) {
        this.setState({
            password: event.target.value
        });
    }

    setEmail(event) {
        this.setState({
            useremail: event.target.value
        });
    }

    saveDetails() {
       
    }

    render() {
        return (
            <div >
                <h2 >Register</h2>
                <Link to={"/"}>Dashboard</Link><hr />
                <InputElement inputType={'text'} fieldname={'username'}
                    placeholder={'User Name'} value={this.state.username} controlFunc={this.setUserName} />
                <hr />
                <InputElement inputType={'text'} fieldname={'useremail'}
                    placeholder={'Email Address'} value={this.state.useremail} controlFunc={(event) => this.setEmail(event)} />
                <hr />
                <InputElement inputType={'password'} fieldname={'password'}
                    placeholder={'Password'} value={this.state.password} controlFunc={(event) => this.setPassword(event)} />
                <hr />
                <button type="submit" onClick={() => this.saveDetails()}>Save</button>
            </div>
        );
    }
}

Register.propTypes = {
    useremail: React.PropTypes.string,
    username: React.PropTypes.string,
    password: React.PropTypes.string


}