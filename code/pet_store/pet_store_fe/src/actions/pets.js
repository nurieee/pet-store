import {
GET_PETS
} from "./types";
import axios from 'axios';


export const getPets = () => {

    return dispatch => {
        axios.get('/api/pets')
        .then(res =>{
            dispatch({
                type: GET_PETS,
                payload: res.data
            });
        })
        .catch(err => {
            console.log(err)
        })
    }
}
