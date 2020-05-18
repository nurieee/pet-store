import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MainLayout from '../blocks/layouts/MainLayout';
import {
    CardDeck,
    Card,
    ListGroup,
    ListGroupItem,
    Button,
    Form
} from 'react-bootstrap';

export class Contacts extends Component {

    render() {
//        if (!this.props.isAuthenticated) {
//            return <Redirect to="/login" />;
//        }

        return (
            <>
                <MainLayout {...this.props}>
                    <div className="contacts-main">
                        <div className="contacts-text">
                            <span>Address: гр. Кърджали, жк. Възрожденци, бул. Христо Ботев 67</span>
                            <span>Telephone: +3598888888888</span>
                            <Form className="contacts-form">
                              <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                              </Form.Group>
                              <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Your Message</Form.Label>
                                <Form.Control as="textarea" rows="3" />
                              </Form.Group>
                              <Button type='submit' variant="warning">Send</Button>
                            </Form>
                        </div>
                    </div>
                </MainLayout>
            </>
        );

    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.token != null,
});

function mapDispatchToProps(dispatch) {
    return {
//        login: (email, password) => dispatch(authLogin(email, password)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
