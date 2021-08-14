import {  put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  CHECK_USER,
  CHECK_USER_FAIL,
  LOGOUT_USER,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO
} from '../constants'
import history from '../../utils/history'
import {ROUTERS} from '../../constants/router'

function* checkUserSaga(action){
    const apiUrl = 'http://103.161.112.166:5000/api/v1/auth/login';
    try {
        const res = yield axios.post(apiUrl,action.payload);
        if(res.status === 200){
            yield localStorage.setItem('token', res.data.token);
            yield localStorage.setItem('refresh_token', res.data.refresh_token);
            yield history.push(ROUTERS.USER_INFORMATION)
        }
    } catch (error) {
        yield put({
            type: CHECK_USER_FAIL,
            payload: "Wrong user name or password",
        });
    }
}

function* getUserInfo (action){
    try {
        const apiURL = "http://103.161.112.166:5000/api/v1/user"
        const config = {
            headers: {
                token : action.payload
            }
        }
        const res = yield axios.get(apiURL,config);
        yield put({
            type: GET_USER_INFO_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        yield put({
            type: CHECK_USER_FAIL,
            payload: error,
        });
    }
}

function* logoutUserSaga(){
    try {
        yield localStorage.clear();
        yield history.push(ROUTERS.LOGIN)

    } catch (error) {
        yield put({
            type: CHECK_USER_FAIL,
            payload: error,
        });
    }
}

export default function* productSaga() {
    yield takeEvery(CHECK_USER, checkUserSaga);
    yield takeEvery(LOGOUT_USER, logoutUserSaga);
    yield takeEvery(GET_USER_INFO, getUserInfo);
  }