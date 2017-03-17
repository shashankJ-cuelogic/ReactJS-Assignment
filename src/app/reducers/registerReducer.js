
import { combineReducers } from 'redux'
import { SAVE_DETAILS, FETCH_IMAGE_START, FETCH_IMAGE_ERROR, FETCH_IMAGE_RECEIVED } from '../actions/actions'




const initalState = {
    data: 'Test',
    fetching: false,
    fetched: false,
    error: null,
    images: []
};


const reducerRegister = (state = initalState, action) => {
    switch (action.type) {
        case SAVE_DETAILS:
            return Object.assign({}, state, {
                data: action.payload

            })
        case FETCH_IMAGE_START:
       // console.log('asas');
            return Object.assign({}, state, {
                fetching: true

            })

        case FETCH_IMAGE_ERROR:
            return Object.assign({}, state, {
                fetched: false,
                fetching: false,
                error: action.payload
            })

        case FETCH_IMAGE_RECEIVED:
            return Object.assign({}, state, {
                fetched: true,
                fetching: false,
                images: action.payload
            })

        default:
            return state
    }
}

export default reducerRegister;