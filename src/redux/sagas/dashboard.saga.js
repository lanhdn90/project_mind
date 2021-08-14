import axios from 'axios';
import { put, takeEvery} from 'redux-saga/effects';
import {
    CLEAR_ALL_NOTIFICATION,
    CLEAR_NOTIFICATION_SUCCESS,
    CLEAR_NOTIFICATION_FAIL,
    CLEAR_ITEM_NOTIFICATION,
    GET_SIDEBAR_LIST,
    GET_SIDEBAR_LIST_SUCCESS,
} from '../constants'
// var base64 = Request('base-64');
function* deleteAllNotification(){
    try {
        yield put({
            type: CLEAR_NOTIFICATION_SUCCESS,
            payload: []
        })
    } catch (error) {
        yield put({
            type: CLEAR_NOTIFICATION_FAIL,
            payload: error
        })
    }
}

function* deleteItemNotification(action){
    const {notificationList,index } = action.payload;
    notificationList.splice(index,1);
    try {
        yield put({
            type: CLEAR_NOTIFICATION_SUCCESS,
            payload: notificationList,
        })
    } catch (error) {
        yield put({
            type: CLEAR_NOTIFICATION_FAIL,
            payload: error
        })
    }
}

function* getSidebarList(action){
    const apiURL = "http://103.161.112.166:5000/api/v1/user/sidebar";
    const apiToken = localStorage.getItem('token');
    try {
        const config = {
            headers: {
                token : apiToken
            }
        }
        const res = yield axios.get(`${apiURL}/${action.payload}`,config);
        yield put({
            type: GET_SIDEBAR_LIST_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        yield put({
            type: CLEAR_NOTIFICATION_FAIL,
            payload: error
        })
    }
}

export default function* dashboardSaga(){
    yield takeEvery(CLEAR_ALL_NOTIFICATION, deleteAllNotification);
    yield takeEvery(CLEAR_ITEM_NOTIFICATION, deleteItemNotification)
    yield takeEvery(GET_SIDEBAR_LIST, getSidebarList)

}