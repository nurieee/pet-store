import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { authLogin, register } from "../../actions/auth";
import MainLayout from '../blocks/layouts/MainLayout';

import {
    Form,
    FormControl,
    Button
} from 'react-bootstrap';

export class Register extends Component {
    register = (e) => {
        e.preventDefault();
        let form = e.target
        console.log('login hit')
        console.log(form.elements.username.value)
        console.log(form.elements.pass.value)
        console.log(form.elements.pass2.value)
        let username = form.elements.username.value;
        let pass = form.elements.pass.value;
        let pass2 = form.elements.pass2.value;

        if(pass !== pass2){
            alert('passwords do not match')
        }
        else{
          this.props.register({username: username, password: pass});
          this.props.history.push('/login');
        }
    };

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />;
        }

        return (
            <>
                <MainLayout {...this.props}>
                    <Form onSubmit={this.register} className='login-form'>
                      <Form.Group controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control required placeholder="Enter username" />
                      </Form.Group>
                      <Form.Group controlId="pass">
                        <Form.Label>Password</Form.Label>
                        <Form.Control required type="password" placeholder="Password" />
                      </Form.Group>
                      <Form.Group controlId="pass2">
                        <Form.Label>Confirm Password</Form.Label>
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
        register: (credentials) => dispatch(register(credentials)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
