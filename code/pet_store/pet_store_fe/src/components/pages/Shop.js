import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MainLayout from '../blocks/layouts/MainLayout';
import { getProducts } from "../../actions/shop";
import {
    CardDeck,
    Card,
    Form,
    Button
} from 'react-bootstrap';

export class Shop extends Component {

    componentDidMount(){
        this.props.getProducts();
    }

    renderProducts(){
        return this.props.products.map(function (e, index){
            return(
                  <Card key={index} className='pet-card'>
                    <Card.Img variant="top" src={e.picture_url} />
                    <Card.Body>
                      <Card.Title>{e.name}</Card.Title>
                    </Card.Body>
                    <Card.Body>
                      <Card.Link href={`#product/${e.id}`}>details</Card.Link>
                    </Card.Body>
                  </Card>
            )
        })
    }

    searchShop = (e) => {
        e.preventDefault();
        let form = e.target
        console.log('search hit')
        console.log(form.elements.animal.value)
        console.log(form.elements.category.value)
        this.props.getProducts(form.elements.animal.value, form.elements.category.value);
    };


    render() {
//        if (!this.props.isAuthenticated) {
//            return <Redirect to="/login" />;
//        }

        return (
            <>
                <MainLayout {...this.props}>
                    <div className="shop-main">
                        <div className='shop-filters'>
                        <Form onSubmit={this.searchShop}>
                          <Form.Group controlId="animal">
                            <Form.Label>Animal</Form.Label>
                            <Form.Control as="select" custom>
                              <option value='all'>All</option>
                              <option value='cat'>Cat</option>
                              <option value='dog'>Dog</option>
                            </Form.Control>
                           </Form.Group>
                           <Form.Group controlId="category">
                            <Form.Label>Category</Form.Label>
                            <Form.Control as="select" custom>
                              <option value='all'>All</option>
                              <option value='cl'>Clothing</option>
                              <option value='acc'>Accessories</option>
                            </Form.Control>
                          </Form.Group>
                          <Button type="submit">Search</Button>
                        </Form>
                        </div>
                        <div className='pet-cards'>
                            {this.renderProducts()}
                        </div>
                    </div>
                </MainLayout>
            </>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.token != null,
    products: state.shop.products,
});

function mapDispatchToProps(dispatch) {
    return {
        getProducts: (animal, category) => dispatch(getProducts(animal, category)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
