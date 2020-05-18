import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MainLayout from '../blocks/layouts/MainLayout';
import { getProduct, addToCart } from "../../actions/shop";
import {
    CardDeck,
    Card,
    ListGroup,
    ListGroupItem,
    Button,
    Form
} from 'react-bootstrap';

export class ProductDetails extends Component {

    componentDidMount(){
        console.log(this.props.match.params.id)
        let id = this.props.match.params.id
        this.props.getProduct(id);
    }

    addToCart = (e) =>{
        e.preventDefault();
        let form = e.target
        console.log(form.elements.quantity.value)
        let product = this.props.product
        product['quantity'] = form.elements.quantity.value
        console.log(product)

        this.props.addToCart(product)
    }

    render() {
//        if (!this.props.isAuthenticated) {
//            return <Redirect to="/login" />;
//        }
        const product = this.props.product
        return (
            <>
                <MainLayout {...this.props}>
                    <div className="product-details">
                    <Card className='product-details-card'>
                      <Card.Img variant="top" src={product.picture_url} />
                      <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                          {product.description}
                        </Card.Text>
                      </Card.Body>
                      <ListGroup className="list-group-flush">
                        <ListGroupItem>{product.category_name}</ListGroupItem>
                        <ListGroupItem>For: {product.animal}</ListGroupItem>
                        <ListGroupItem>Price: {product.price}</ListGroupItem>
                        <ListGroupItem>Size: {product.size}</ListGroupItem>
                        <ListGroupItem>Color: {product.color}</ListGroupItem>
                      </ListGroup>
                      {this.props.isAuthenticated &&
                          <Card.Body>
                            <Form onSubmit={this.addToCart}>
                              <Form.Group controlId="quantity">
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control type="number" min="1" required/>
                              </Form.Group>
                              <Button type='submit' variant="warning">add to cart</Button>
                            </Form>
                          </Card.Body>
                      }
                    </Card>
                    </div>
                </MainLayout>
            </>
        );

    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.token != null,
    product: state.shop.product,
});

function mapDispatchToProps(dispatch) {
    return {
        getProduct: (id) => dispatch(getProduct(id)),
        addToCart: (product) => dispatch(addToCart(product)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
