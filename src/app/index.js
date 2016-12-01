import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    render() {
        return ( <h2> This is the App </h2> );
    }
}

const app = document.getElementById('app');
ReactDOM.render( <App/> , app);
