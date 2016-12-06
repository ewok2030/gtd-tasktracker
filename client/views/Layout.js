import React from "react";
import {Link} from "react-router";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default class Layout extends React.Component {
    render() {
        const {location} = this.props;
        return (
            <div>
                <Header location={location}/>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            {this.props.children}
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>

        );
    }
}
