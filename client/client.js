import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store/index';

// Views
import Layout from './views/Layout';
import Tasks from './views/Tasks';
import TaskDetails from './views/TaskDetails';
import Today from './views/Today';
import Projects from './views/Projects';
import Settings from './views/Settings';

const app = document.getElementById('app');
ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Today} />
        <Route path="tasks" name="tasks" component={Tasks} />
        <Route path="tasks(/:taskId)" name="tasks" component={TaskDetails} />
        <Route path="projects(/:project)" name="projects" component={Projects} />
        <Route path="settings" name="settings" component={Settings} />
      </Route>
    </Router>
  </Provider>, app);
