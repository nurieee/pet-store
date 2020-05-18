import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../../actions/auth";
import {
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button
} from 'react-bootstrap';

export class MainLayout extends Component {

    constructor(props){
        super(props);
        this.state = {
        }
    }

    componentDidMount(){
    };

    logout = (e) => {
        this.props.logout()
        console.log('logout')
    };

    render() {
        var username = ''
        if(this.props.user !== null){
            username = this.props.user.username
        }

        return (
            <>
                <Navbar bg="dark" expand="lg" >
                  <Navbar.Brand href="#"><img src="/static/images/logo.png" className='logo'/></Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                      <Nav.Link href="#pets">Pets</Nav.Link>
                      <Nav.Link href="#shop">Shop</Nav.Link>
                      <Nav.Link href="#contacts">Contacts</Nav.Link>
                      {this.props.isAuthenticated &&
                        <Nav.Link href="#cart">Cart ({this.props.cart_products_num})</Nav.Link>
                      }
                    </Nav>
                    <Nav>
                    {!this.props.isAuthenticated &&
                      <>
                      <Nav.Link href="#login">Login</Nav.Link>
                      <Nav.Link href="#register">Sign up</Nav.Link>
                      </>
                    }
                    {this.props.isAuthenticated &&
                      <Nav.Link onClick={this.logout}>Logout</Nav.Link>
                    }
                    </Nav>
                    {this.props.isAuthenticated &&
                        <Navbar.Text>
                          Signed in as: {username}
                        </Navbar.Text>
                    }
                  </Navbar.Collapse>
                </Navbar>
                {this.props.children}
                <div className='footer fixed-bottom'>
                    <div className='logos'>
                    <a href='https://facebook.com' target='_blank'><span className='facebook-logo'/></a>
                    <a href='https://instagram.com' target='_blank'><span className='instagram-logo'/></a>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({
    user: state.auth.user,
    isAuthenticated: state.auth.token != null,
    cart_products_num: state.shop.cart.length,
});

function mapDispatchToProps(dispatch) {
    return {
        logout: () => dispatch(logout()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
