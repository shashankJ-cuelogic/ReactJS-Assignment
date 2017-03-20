import expect from 'expect';
import * as actions from '../../../src/app/actions/registerActions';
import * as constants from '../../../src/app/actions/actions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Register actions', () => {
    afterEach(() => {
        nock.cleanAll()
    })

    it('should dispatch an action to initiate loading', () => {
        const expectedAction = {
            type: constants.SAVE_DETAILS,
            payload: 'aasas'
        };
        expect(
            actions.saveDetailsFunction('aasas')
        ).toEqual(expectedAction);
    });

    it('creates FETCH_IMAGE_RECEIVED ', () => {
        nock("http://jsonplaceholder.typicode.com")
            .get('/photos/1')
            .reply(200, {

                images: [{
                    albumId: 1,
                    id: 1,
                    title: "accusamus beatae ad facilis cum similique qui sunt",
                    url: "http://placehold.it/600/92c952",
                    thumbnailUrl: "http://placehold.it/150/92c952"
                }]

            })

        const expectedActions = [
            {
                type: constants.FETCH_IMAGE_RECEIVED,
                payload: {
                    images: [{
                        albumId: 1,
                        id: 1,
                        title: "accusamus beatae ad facilis cum similique qui sunt",
                        url: "http://placehold.it/600/92c952",
                        thumbnailUrl: "http://placehold.it/150/92c952"
                    }]
                }
            },

        ]
        const store = mockStore({
            data: 'Test',
            fetching: false,
            fetched: false,
            error: null,
            images: []
        })
        // console.log(actions.getImagesData());
        return store.dispatch(actions.getImagesData())
            .then(() => { // return of async actions
                console.log(store.getActions());
                expect(store.getActions()).toEqual(expectedActions)
            })
    });

});