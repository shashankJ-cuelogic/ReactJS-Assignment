import React from "react";
import { render } from "react-dom";
import { createStore, combineReducers,applyMiddleware,compose } from 'redux';
import { Provider } from 'react-redux';
import { Route, Router, browserHistory, Link, IndexRoute } from "react-router";
import { Root } from "../app/containers/Root";
import { Dashboard } from "../app/containers/Dashboard";
import { Login } from "../app/containers/Login";
import Profile from "../app/containers/Profile";
import Register from "../app/containers/Register";
import reducerProfile from "../app/reducers/profileReducer";
import reducerRegister from "../app/reducers/registerReducer";
import thunk from 'redux-thunk'; 
import logger from 'redux-logger'; 



const reducer = combineReducers({
     reducerRegister

})


let store = createStore(reducer,applyMiddleware(thunk,logger()));

var routers = (<Router history={browserHistory}>
    <Route path="/" component={Root}>
        <IndexRoute component={Dashboard} />
        <Route path="login" component={Login} />
        <Route path="profile" component={Profile} />
        <Route path="register" component={Register} />
    </Route>
</Router>);

//console.log(store.getState());
class App extends React.Component {
    render() {
        return (
            <Provider store={store} children={routers}>
            </Provider>
        );
    }
}

render(<App />, document.getElementById('app'));
