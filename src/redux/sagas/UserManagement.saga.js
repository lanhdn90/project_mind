import {  put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
    GET_ITEM_PLANT,
    GET_ITEM_PLANT_SUCCESS,
    GET_ITEM_PLANT_FAIL,
    SET_ITEM_PLANT,
    DELETE_ITEM_PLANT,
    DELETE_ITEM_PLANT_SUCCESS,
    DELETE_ITEM_PLANT_FAIL,
    SET_ITEM_PLANT_FAIL,
    GET_VIEWER_LIST,
    GET_VIEWER_LIST_SUCCESS,
    GET_VIEWER_LIST_FAIL,
    GET_GATEWAY_LIST,
    GET_GATEWAY_LIST_SUCCESS,
    GET_GATEWAY_LIST_FAIL,
    GET_ITEM_GATEWAY,
    GET_ITEM_GATEWAY_SUCCESS,
    GET_ITEM_GATEWAY_FAIL,
    GET_ITEM_SIDEBAR_SUCCESS,
    GET_SIDEBAR_LIST_SUCCESS,
} from '../constants'

function* deleteItemPlantList(action){
    const apiURL = 'http://103.161.112.166:5000/api/v1/plant';
    const apiToken = localStorage.getItem('token');
    try {
        const config = {
            headers: {
                token : apiToken
            }
        }
        yield axios.delete(`${apiURL}/${action.payload.id}`,config);
        const newList = action.payload.plantList
        yield action.payload.plantList.map((item, index)=>{
            if(item.id === action.payload.id){
                newList.splice(index, 1);
            }
        })
        yield put({
            type: GET_SIDEBAR_LIST_SUCCESS,
            payload: newList
        })
    } catch (error) {
        yield put({
            type: DELETE_ITEM_PLANT_FAIL,
            payload: error
        })
    }
}


function* setItemPlantList(action){
    const apiURL = 'http://103.161.112.166:5000/api/v1/plant';
    const apiToken = localStorage.getItem('token');
    try {
        const config = {
            headers: {
                token : apiToken
            }
        }
        const res = yield axios.post(apiURL,action.payload,config);
        const response = yield axios.get(`${apiURL}/info/${res.data.id}`,config);
        const itemPlant = {...res.data, ...response.data, type: "PLANT" }
        // yield put({
        //     type: GET_ITEM_PLANT_SUCCESS,
        //     payload: itemPlant
        // })
        yield put({
            type: GET_ITEM_SIDEBAR_SUCCESS,
            payload: itemPlant
        })
    } catch (error) {
        yield put({
            type: SET_ITEM_PLANT_FAIL,
            payload: error
        })
    }
}


function* getItemGateway(action){
    const apiURL = 'http://103.161.112.166:5000/api/v1/gateway/info';
    const apiToken = localStorage.getItem('token');
    try {
        const config = {
            headers: {
                token : apiToken
            }
        }
        const res = yield axios.get(`${apiURL}/${action.payload.item.id}`,config);
        const itemGateway = {...action.payload.item, ...res.data}
        yield put({
            type: GET_ITEM_GATEWAY_SUCCESS,
            payload:  itemGateway
        })
    } catch (error) {
        yield put({
            type: GET_ITEM_GATEWAY_FAIL,
            payload: error
        })
    }
}

function* getGatewayList(action){
    const apiURL = 'http://103.161.112.166:5000/api/v1/gateway';
    const par = `?page_size=${action.payload.page_size}&page=${action.payload.page}`
    const apiToken = localStorage.getItem('token');
    try {
        const config = {
            headers: {
                token : apiToken
            }
        }
        const res = yield axios.get(`${apiURL}${par}`,config);
        yield put({
            type: GET_GATEWAY_LIST_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        yield put({
            type: GET_GATEWAY_LIST_FAIL,
            payload: error
        })
    }
}

function* getViewerList(action){
    const apiURL = 'http://103.161.112.166:5000/api/v1/viewer';
    const par = `?page_size=${action.payload.page_size}&page=${action.payload.page}`
    const apiToken = localStorage.getItem('token');
    try {
        const config = {
            headers: {
                token : apiToken
            }
        }
        const res = yield axios.get(`${apiURL}${par}`,config);
        yield put({
            type: GET_VIEWER_LIST_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        yield put({
            type: GET_VIEWER_LIST_FAIL,
            payload: error
        })
    }
}

function* getItemPlant(action){
    const apiURL = 'http://103.161.112.166:5000/api/v1/plant/info';
    const apiToken = localStorage.getItem('token');
    try {
        const config = {
            headers: {
                token : apiToken
            }
        }
        const res = yield axios.get(`${apiURL}/${action.payload.id}`,config);
        const itemPlant = {...action.payload, ...res.data}
        yield put({
            type: GET_ITEM_PLANT_SUCCESS,
            payload: itemPlant
        })
    } catch (error) {
        yield put({
            type: GET_ITEM_PLANT_FAIL,
            payload: error
        })
    }
}

export default function* userManagementSaga() {
    yield takeEvery(DELETE_ITEM_PLANT, deleteItemPlantList);
    yield takeEvery(SET_ITEM_PLANT, setItemPlantList);
    yield takeEvery(GET_ITEM_GATEWAY, getItemGateway);
    yield takeEvery(GET_GATEWAY_LIST, getGatewayList);
    yield takeEvery(GET_VIEWER_LIST, getViewerList);
    yield takeEvery(GET_ITEM_PLANT, getItemPlant);

}