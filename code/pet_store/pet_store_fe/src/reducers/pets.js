import {
GET_PETS
} from "../actions/types";

import {updateObject} from "../utils";

const initialState = {
    pets: []
}



const getPets = (state, action) => {
    return updateObject(state, {
        pets: action.payload,
    });
}


const reducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_PETS: return getPets(state, action);
        default:
            return state;
    }
}

export default reducer;
