import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MainLayout from '../blocks/layouts/MainLayout';
import { getProduct, addToCart, rmFromCart } from "../../actions/shop";
import {
    Table,
    Button
} from 'react-bootstrap';

export class Cart extends Component {

    componentDidMount(){
    }

    renderCartProducts(){
        let that = this;
        return this.props.cart.map(function (e, index){
            return(
                <tr key={index}>
                  <td>{index}</td>
                  <td>{e.name}</td>
                  <td>{e.size}</td>
                  <td>{e.color}</td>
                  <td>{e.price}</td>
                  <td>{e.quantity}</td>
                  <td><Button onClick={() => that.rmFromCart(e.id)} variant="danger">remove</Button></td>
                </tr>
            )
        })
    }

    rmFromCart(id){
        console.log('delete')
        console.log(id)
        this.props.rmFromCart(id)
    }

    render() {
        if (!this.props.isAuthenticated) {
            return <Redirect to="/login" />;
        }

        var priceTotal = this.props.cart.reduce(function(prev, cur) {
            return prev + cur.price * cur.quantity;
        }, 0);

        return (
            <>
                <MainLayout {...this.props}>
                   <div className="cart-main">
                       <Table striped bordered hover>
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Name</th>
                              <th>Size</th>
                              <th>Color</th>
                              <th>Price</th>
                              <th>Quantity</th>
                              <th> </th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.renderCartProducts()}
                          </tbody>
                        </Table>
                        <div>Total price: {priceTotal}</div>
                        <div><Button variant="warning">Pay</Button></div>
                    </div>
                </MainLayout>
            </>
        );

    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.token != null,
    cart: state.shop.cart,
});

function mapDispatchToProps(dispatch) {
    return {
//        getProduct: (id) => dispatch(getProduct(id)),
        rmFromCart: (product) => dispatch(rmFromCart(product)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
