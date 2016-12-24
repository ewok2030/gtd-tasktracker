import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './redux/store';

// Views
import Layout from './views/Layout';
import Tasks from './views/Tasks';
import TaskDetails from './views/TaskDetails';
import Today from './views/Today';

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
