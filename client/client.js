import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './redux/store';

// Views
import Layout from './containers/Layout';
import Tasks from './containers/Tasks';
import TaskDetails from './containers/TaskDetails';
import Today from './containers/Today';

const app = document.getElementById('app');
ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Today} />
        <Route path="tasks" name="tasks" component={Tasks} />
        <Route path="tasks(/:taskId)" name="tasks" component={TaskDetails} />
      </Route>
    </Router>
  </Provider>, app);
