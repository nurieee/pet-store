import {
GET_PRODUCTS, GET_PRODUCT, ADD_TO_CART, RM_FROM_CART
} from "../actions/types";

import {updateObject} from "../utils";

const initialState = {
    products: [],
    product: {},
    cart: []
}


const getProducts = (state, action) => {
    return updateObject(state, {
        products: action.payload,
    });
}

const getProduct = (state, action) => {
    return updateObject(state, {
        product: action.payload,
    });
}

const addToCart = (state, action) => {
    if(!state.cart.some(e => e.id === action.payload.id)){
        return updateObject(state, {
            cart: [ ...state.cart, action.payload ],
        });
    }
    else{
        return updateObject(state, {
            cart: [ ...state.cart ],
        });
    }
}

const rmFromCart = (state, action) => {
    return updateObject(state, {
        cart: [ ...state.cart ].filter((x, index) => x.id !== action.payload),
    });
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS: return getProducts(state, action);
        case GET_PRODUCT: return getProduct(state, action);
        case ADD_TO_CART: return addToCart(state, action);
        case RM_FROM_CART: return rmFromCart(state, action);
        default:
            return state;
    }
}

export default reducer;
