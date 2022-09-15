import {reduxActionTypes} from '../actionTypes';

import {ReduxActions, UserState,} from '../types';

const initialState: UserState = {
    pending: false,
    user: []
};

export default (state = initialState, action: ReduxActions) => {
    switch (action.type) {
        case reduxActionTypes.FETCH_USER_REQUEST:
            return {
                ...state,
                pending: true,
            };
        case reduxActionTypes.FETCH_USER_SUCCESS:
            return {
                ...state,
                pending: false,
                user: action.payload.user,
                error: null,
            };
        default:
            return {
                ...state,
            };
    }
};