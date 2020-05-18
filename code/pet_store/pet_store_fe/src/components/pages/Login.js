import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { authLogin } from "../../actions/auth";
import MainLayout from '../blocks/layouts/MainLayout';

import {
    Form,
    FormControl,
    Button
} from 'react-bootstrap';

export class Login extends Component {
    login = (e) => {
        e.preventDefault();
        let form = e.target
        console.log('login hit')
        console.log(form.elements.username.value)
        console.log(form.elements.pass.value)
        this.props.login(form.elements.username.value, form.elements.pass.value);
    };

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />;
        }

        return (
            <>
                <MainLayout {...this.props}>
                    <Form onSubmit={this.login} className='login-form'>
                      <Form.Group controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control required placeholder="Enter username" />
                      </Form.Group>
                      <Form.Group controlId="pass">
                        <Form.Label>Password</Form.Label>
                        <Form.Control required type="password" placeholder="Password" />
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Login
                      </Button>
                    </Form>
                </MainLayout>
            </>
        );

    }
}


const mapStateToProps = state => ({
    isAuthenticated: state.auth.token != null
});

function mapDispatchToProps(dispatch) {
    return {
        login: (email, password) => dispatch(authLogin(email, password)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
