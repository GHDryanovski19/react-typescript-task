import {reduxActionTypes} from '../actionTypes';

import {ReduxActions, OrderState} from '../types';

const initialState: OrderState = {
    pending: false,
    orders: []
};

export default (state = initialState, action: ReduxActions) => {
    switch (action.type) {
        case reduxActionTypes.FETCH_ORDER_REQUEST:
            return{
                ...state,
                pending: true,
            }
        case reduxActionTypes.FETCH_ORDER_SUCCESS:
            return {
                ...state,
                pending: false,
                orders: action.payload.orders,
                error: action.payload.orders,
            };
        default:
            return {
                ...state,
            };
    }
};