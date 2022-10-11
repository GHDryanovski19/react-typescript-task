import { all, fork } from 'redux-saga/effects';
import orderSaga from './orderSaga';
import personSaga from './userSaga';

export function* rootSaga() {
    yield all([fork(personSaga),fork(orderSaga)]);
}
