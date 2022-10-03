import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { IUser } from '../types';
import { fetchUserSuccess } from '../actions';
import { reduxActionTypes } from '../actionTypes';

const getUser = () => {
    let response = axios.get('https://evoteam-verasoft.github.io/data/summary.json');
    return response.then((response) => response.data);
}
    
function* fetchUserSaga() {
    try {
        const response: IUser  = yield call(getUser);
        yield put(
            fetchUserSuccess({
                user: response
            })
        );
    } catch (e) {

    }
}

function* userSaga() {
    yield all([takeLatest(reduxActionTypes.FETCH_USER_REQUEST, fetchUserSaga)]);
}

export default userSaga;