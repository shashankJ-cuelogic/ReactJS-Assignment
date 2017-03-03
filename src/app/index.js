import React from "react";
import { render } from "react-dom";
import { Dashboard } from "./component/Dashboard";
import { Login } from "./component/Login";
import { Profile } from "./component/Profile";
import { Register } from "./component/Register";
import { Route, Router, browserHistory, Link, IndexRoute } from "react-router";
import { Root } from "./component/Root";

class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Root}>
                    <IndexRoute component={Dashboard} />
                    <Route path="login" component={Login} />
                    <Route path="profile" component={Profile} />
                    <Route path="register" component={Register} />
                </Route>
            </Router>
        );
    }
}

render(<App />, document.getElementById('app'));
