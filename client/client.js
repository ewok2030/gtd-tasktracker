import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import {Provider} from "react-redux";
import store from "./store/index"

// Views
import Layout from './views/Layout';
import Tasks from './views/Tasks';
import Today from './views/Today';
import Projects from './views/Projects';
import Settings from './views/Settings';

const app = document.getElementById('app');
ReactDOM.render(
    <Provider store={store}>
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Today}></IndexRoute>
            <Route path="tasks" name="tasks" component={Tasks}></Route>
            <Route path="projects(/:project)" name="projects" component={Projects}></Route>
            <Route path="settings" name="settings" component={Settings}></Route>
        </Route>
    </Router>
</Provider>, app);
