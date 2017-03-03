import React from "react";
import { render } from "react-dom";

export class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            useremail: '',
            username: '',
            password: '',
            data:null
        }
    }

    setUserName(event) {
        this.setState({
            username:event.target.value
        });
    }

    setPassword(event) {
        this.setState({
            password:event.target.value
        });
    }

    setEmail(event) {
        this.setState({
            useremail:event.target.value
        });
    }

    saveDetails(){
          this.setState({
              data:{
                  userName:this.state.username,
                  userEmail:this.state.useremail,
                  password:this.state.password
            }
          });
          console.log(this.state.data);
    }

    render() {
        return (
            <div >
                <h2 >Register</h2>
                <input type="text" name="username" placeholder="Name" value={this.state.username} onChange={(event)=>this.setUserName(event)}/>
                <input type="text" name="useremail" placeholder="Email Address" value={this.state.useremail}  onChange={(event)=>this.setEmail(event)}/>
                <input type="password" name="password" placeholder="Password" required="" value={this.state.password}  onChange={(event)=>this.setPassword(event)}/>
                <button type="submit" onClick={()=>this.saveDetails()}>Save</button>
            </div>
        );
    }
}

Register.propTypes = {
    useremail: React.PropTypes.string,
    username: React.PropTypes.string,
    password: React.PropTypes.string


}