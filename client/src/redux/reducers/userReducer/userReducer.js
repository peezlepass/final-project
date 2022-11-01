import * as type from './types';

const initialState = [];

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case type.GET_USER:
            return action.payload;

        case type.DESTROY_USER:
            return [];

        default:
            return state;
    }
}