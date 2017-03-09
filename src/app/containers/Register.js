import React from "react";
import { render } from "react-dom";
import { Link } from "react-router";
import { Dashboard } from "./Dashboard"
import { InputElement } from "../../app/component/InputElement"

export class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            useremail: '',
            username: '',
            password: '',
            data:''


        }
        this.saveDetails = this.saveDetails.bind(this);
        this.handleOnchange = this.handleOnchange.bind(this);

    }




    handleOnchange(event) {
        var field = event.target.name;
        var change = {};
        change[field] = event.target.value;
        console.log(field)
        this.setState(change);
    }

    saveDetails() {
        alert('user name:' + this.state.username + ' user pass:' + this.state.password + ' user email' + (this.state.useremail));
        this.setState({
            data:this.state.username
        });
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


}