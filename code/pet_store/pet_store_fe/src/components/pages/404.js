import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Error404 extends Component {


    backHome(){
        this.props.history.push(`/`)
    }

    render() {
        return (
            <>
                Not Found
            </>
        );

    }
}


export default (Error404);
