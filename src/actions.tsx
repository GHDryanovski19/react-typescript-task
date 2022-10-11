import { reduxActionTypes } from "./actionTypes";
import {
    FetchUserSuccess,
    FetchOrderSuccess,
    FetchOrderRequest,
    FetchUserRequest,
    FetchUserSuccessPayload,
    FetchOrderSuccessPayload
} from "./types";

export const fetchUserRequest = (): FetchUserRequest => ({
    type: reduxActionTypes.FETCH_USER_REQUEST
});
export const fetchOrderRequest = (): FetchOrderRequest => ({
    type: reduxActionTypes.FETCH_ORDER_REQUEST
});

export const fetchUserSuccess = (
    payload: FetchUserSuccessPayload
): FetchUserSuccess => ({
    type: reduxActionTypes.FETCH_USER_SUCCESS,
    payload
});

export const fetchOrderSuccess = (
    payload: FetchOrderSuccessPayload
): FetchOrderSuccess => ({
    type: reduxActionTypes.FETCH_ORDER_SUCCESS,
    payload
});