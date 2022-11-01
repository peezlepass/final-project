import * as type from './types';

export function getUser(user) {
    return { type: type.GET_USER, payload: user }
}

export function destroyUser() {
    return { type: type.DESTROY_USER }
}