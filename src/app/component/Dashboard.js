import React from "react";
import { render } from "react-dom";
import { Link } from "react-router";

export class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">React-Js Assignment</a>
                        </div>
                        <ul className="nav navbar-nav">                           
                            <li><Link to={"login"}>Login</Link></li>
                            <li><Link to={"register"}>Register</Link></li>
                            <li><Link to={"profile"}>Profile</Link></li>
                        </ul>
                    </div>
                </nav>

                <div className="container">
                    <h3>Dashboard</h3>
                    <p>A navigation bar is a navigation header that is placed at the top of the page.</p>
                </div>

            </div>
        );
    }
}