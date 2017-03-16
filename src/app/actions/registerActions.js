import SAVE_DETAILS from './actions';


export function saveDetailsFunction(data) {
    // console.log(data);
    return {
        type: SAVE_DETAILS,
        payload: data
    };
}