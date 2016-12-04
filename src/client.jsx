import React from "react";
import ReactDOM from "react-dom";

// Components
import Tasks from './containers/Tasks.jsx';

const app = document.getElementById('app');
ReactDOM.render( <Tasks title="Get Things Done"/> , app);
