import { SAVE_DETAILS, FETCH_IMAGE_START, FETCH_IMAGE_ERROR, FETCH_IMAGE_RECEIVED } from './actions'
import $ from "jquery";
import fetch from 'isomorphic-fetch';


export function saveDetailsFunction(data) {
    // console.log(data);
    return {
        type: SAVE_DETAILS,
        payload: data
    };
}



export function getImagesData() {
    return dispatch => {
        return fetch('http://jsonplaceholder.typicode.com/photos/1')
            .then(res => res.json())
            .then(json => dispatch({
                type: FETCH_IMAGE_RECEIVED,
                payload: (json)
            }))
            .catch(ex => {
                console.log('ASAS');
            })
    }



}
