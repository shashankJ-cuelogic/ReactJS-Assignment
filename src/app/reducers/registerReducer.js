
import { combineReducers } from 'redux'
import { SAVE_DETAILS } from '../actions/Register'



const initalState = {
    data: 'Test'
};


const reducerRegister = (state = initalState, action) => {
    switch (action.type) {
        case SAVE_DETAILS:
            return Object.assign({}, state, {
                data: action.payload

            })
        default:
            return state
    }
}

export default reducerRegister;