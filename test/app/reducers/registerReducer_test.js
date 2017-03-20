import expect from 'expect';
import * as actions from '../../../src/app/actions/registerActions';
import * as constants from '../../../src/app/actions/actions';
import reducerRegister from '../../../src/app/reducers/registerReducer';

describe('Register reducer', () => {

    const initalState = {
        data: 'Test',
        fetching: false,
        fetched: false,
        error: null,
        images: []
    };
    it('should initiate loading', () => {
        const stateAfter = {
            data: 'Test',
            fetching: false,
            fetched: false,
            error: null,
            images: []
        };

        expect(
            reducerRegister(initalState
                , {
                    type: 'initialState',
                })
        ).toEqual(stateAfter);
    });


    it('SAVE_DETAILS', () => {
        const stateAfter = {
            data: 'Test',
            fetching: true,
            fetched: false,
            error: null,
            images: []
        };

        expect(
            reducerRegister(initalState
                , {
                    type: constants.FETCH_IMAGE_START,
                })
        ).toEqual(stateAfter);
    });

    it('FETCH_IMAGE_ERROR', () => {
        const stateAfter = {
            data: 'Test',
            fetched: false,
            fetching: false,
            error: undefined,
            images: []
        };

        expect(
            reducerRegister(initalState
                , {
                    type: constants.FETCH_IMAGE_ERROR,
                })
        ).toEqual(stateAfter);
    });


});


