import { SAVE_DETAILS, FETCH_IMAGE_START, FETCH_IMAGE_ERROR, FETCH_IMAGE_RECEIVED } from './actions'
import $ from "jquery";

export function saveDetailsFunction(data) {
    // console.log(data);
    return {
        type: SAVE_DETAILS,
        payload: data
    };
}



export function getImagesData() {
    return dispatch => {
        $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?", {
            tags: "apples",
            tagmode: "any",
            format: "json"
        }).done(function (data) {
            dispatch({
                type: FETCH_IMAGE_RECEIVED,
                payload: data

            });
        });
    }
}
