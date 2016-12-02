import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-default navbar-static-top">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#">{this.props.title}</a>
                    </div>
                    <div id="navbar" class="navbar-collapse collapse">
                        <ul class="nav navbar-nav">
                            <li class="Today">
                                <a href="#">Today</a>
                            </li>
                            <li class="active">
                                <a href="#">Tasks</a>
                            </li>
                            <li>
                                <a href="#">Projects</a>
                            </li>
                        </ul>
                        <ul class="nav navbar-nav navbar-right">
                            <li>
                                <a href="#">User</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
};
