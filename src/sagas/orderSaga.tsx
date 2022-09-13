import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { IOrder } from "../types";
import {
    fetchOrderSuccess
} from "../actions";
import { reduxActionTypes } from "../actionTypes";

const getOrder = () =>
    axios.get<IOrder[]>("https://evoteam-verasoft.github.io/data/orders.json");

function* fetchOrderSaga() {
    try {
        const response: IOrder[] = yield call(getOrder);
        yield put(
            fetchOrderSuccess({
                orders: response
            })
        );
    } catch (e) {

    }
}

function* orderSaga() {
    yield all([takeLatest(reduxActionTypes.FETCH_ORDER_REQUEST, fetchOrderSaga)]);
}

export default orderSaga;