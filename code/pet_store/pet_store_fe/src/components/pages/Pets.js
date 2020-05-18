import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MainLayout from '../blocks/layouts/MainLayout';
import { getPets } from "../../actions/pets";
import {
    CardDeck,
    Card,
} from 'react-bootstrap';

export class Pets extends Component {

    componentDidMount(){
        this.props.getPets();
    }

    renderPets(){
        return this.props.pets.map(function (e, index){
            return(
                  <Card key={index} className='pet-gallery-card'>
                    <Card.Img variant="top" src={e.picture_url} />
                    <Card.Body>
                      <Card.Title>{e.breed}</Card.Title>
                      <Card.Text>
                        {e.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
            )
        })
    }

    render() {
//        if (!this.props.isAuthenticated) {
//            return <Redirect to="/login" />;
//        }

        return (
            <>
                <MainLayout {...this.props}>
                    <div className="pets-main">
                        <div className='pet-cards'>
                            {this.renderPets()}
                        </div>
                    </div>
                </MainLayout>
            </>
        );

    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.token != null,
    pets: state.pets.pets,
});

function mapDispatchToProps(dispatch) {
    return {
        getPets: () => dispatch(getPets()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Pets);
