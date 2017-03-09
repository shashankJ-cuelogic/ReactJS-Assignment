import React from "react";
import { render } from "react-dom";

export class Login extends React.Component {
    render() {
        return (
            <div >
                <h2 >Please login</h2>
                <input type="text" name="username" placeholder="Email Address" required="" value=""/>
                <input type="password" name="password" placeholder="Password" required="" value=""/>
                <button type="submit" >Login</button>
            </div>
        );
    }
}
