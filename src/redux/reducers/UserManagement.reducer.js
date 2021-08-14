import {
    RESTART_PLANT_LIST,
    GET_ITEM_PLANT_SUCCESS,
    GET_ITEM_PLANT_INFO,
    SET_ITEM_PLANT_SUCCESS,
    GET_VIEWER_LIST_SUCCESS,
    // RESTART_VIEWER_LIST,
    // GET_ITEM_VIEWER_INFO
    GET_GATEWAY_LIST_SUCCESS,
    GET_ITEM_GATEWAY_SUCCESS,
    RESTART_GATEWAY_LIST,
 } from '../constants';

const initialState = {
    itemPlantList : [],
    itemPlantInfo : {},
    viewerList: {},
    gatewayList: {},
    gatewaysList: [],
    // itemGatewayInfo: {},
}

function userManagementReducer (state = initialState, action){
    switch (action.type) {
        case RESTART_GATEWAY_LIST:
            return {
                ...state,
                gatewaysList: []
            }
        case GET_VIEWER_LIST_SUCCESS:
            return {
                ...state,
                viewerList: {...action.payload}
            }
        case GET_GATEWAY_LIST_SUCCESS:
            return {
                ...state,
                gatewayList: action.payload,
            }
        case GET_ITEM_GATEWAY_SUCCESS:
            return {
                ...state,
                gatewaysList: [...state.gatewaysList, action.payload]
                
            }
        case GET_ITEM_PLANT_SUCCESS:
            return {
                ...state,
                itemPlantList: [...state.itemPlantList, action.payload]
            }
        case RESTART_PLANT_LIST:
            return {
                ...state,
                itemPlantList: []
            }
        case GET_ITEM_PLANT_INFO:
            return {
                ...state,
                itemPlantInfo:  action.payload
            }   
        default:{
            return state;
        }
    }
}

export default userManagementReducer;
