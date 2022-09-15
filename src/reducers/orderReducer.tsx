import {reduxActionTypes} from '../actionTypes';

import {ReduxActions, OrderState} from '../types';

const initialState: OrderState = {
    pending: false,
    orders: {
        'orders_A' : {sent: []},
        'orders_AA' :{sent: []},
        'orders_AAA' : {sent: []},
        'orders_B' : {sent: []},
        'orders_C' : {sent: []},
    }
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