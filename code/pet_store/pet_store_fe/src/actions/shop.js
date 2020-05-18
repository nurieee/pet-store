import {
GET_PRODUCTS, GET_PRODUCT, ADD_TO_CART, RM_FROM_CART
} from "./types";
import axios from 'axios';


export const getProducts = (animal=null, category=null) => {
    var url;
    if(animal !== null && category !== null){
        url = `/api/products?a=${animal}&c=${category}`
    }
    else{
        url = '/api/products'
    }

    return dispatch => {
        axios.get(url)
        .then(res =>{
            dispatch({
                type: GET_PRODUCTS,
                payload: res.data
            });
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export const getProduct = (id) => {

    return dispatch => {
        axios.get(`/api/products/${id}`)
        .then(res =>{
            dispatch({
                type: GET_PRODUCT,
                payload: res.data
            });
        })
        .catch(err => {
            console.log(err)
        })
    }
}


export const addToCart = (product) => {
    return dispatch => {
        dispatch({
            type: ADD_TO_CART,
            payload: product
        });
    }
}

export const rmFromCart = (id) => {
    return dispatch => {
        dispatch({
            type: RM_FROM_CART,
            payload: id
        });
    }
}
