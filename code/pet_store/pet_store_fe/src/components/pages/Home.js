import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MainLayout from '../blocks/layouts/MainLayout';


export class Home extends Component {

    render() {
//        if (!this.props.isAuthenticated) {
//            return <Redirect to="/login" />;
//        }

        return (
            <>
                <MainLayout {...this.props}>
                    <div className="home">
                        <div className="home-left">
                            <img src="/static/images/store2.jpg" className='home-left-img'/>
                        </div>
                        <div className="home-text">
                            Веригата PetShop e специализирана в предлагането на храни и аксесоари за домашни любимци.
                            Тя обединява  търговски обекти с различен капацитет и локации. Фирмата се занимава и с
                            директен внос и дистрибуция на храни и аксесоари за домашни любимци.
                            Предлагаме разнообразие  от продукти, конкурентни цени, постоянни промоции, професионално
                            обслужване и множество организирани събития.
                        </div>
                        <div className="home-right">
                            <img src="/static/images/store3.jpg" className='home-right-img'/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
