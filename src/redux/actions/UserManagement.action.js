import {
    RESTART_PLANT_LIST,
    GET_ITEM_PLANT,
    SET_ITEM_PLANT,
    GET_ITEM_PLANT_INFO,
    DELETE_ITEM_PLANT,
    GET_VIEWER_LIST,
    GET_GATEWAY_LIST,
    GET_ITEM_GATEWAY,
    RESTART_GATEWAY_LIST,
    // GET_ITEM_GATEWAY_INFO,
} from '../constants';


export const deleteItemPlantAction = (par) =>{
    return {
        type: DELETE_ITEM_PLANT,
        payload: par
    }
}

export const SetItemPlantAction = (par) =>{
    return {
        type: SET_ITEM_PLANT,
        payload: par,
    }
}

export const restartItemGatewayAction = () =>{
    return {
        type: RESTART_GATEWAY_LIST,
    }
}

export const getViewerListAction = (par) =>{
    return {
        type: GET_VIEWER_LIST,
        payload: par,
    }
}

export const getGatewayListAction = (par) =>{
    return {
        type: GET_GATEWAY_LIST,
        payload: par,
    }
}

export const getItemGatewayInfoAction = (par) =>{
    return {
        type: GET_ITEM_GATEWAY,
        payload: par,
    }
}

export const getItemPlantAction = (par) =>{
    return {
        type: GET_ITEM_PLANT,
        payload: par,
    }
}

export const restartItemPlantAction = () =>{
    return {
        type: RESTART_PLANT_LIST,
    }
}

export const getItemPlantInfoAction = (par) =>{
    return {
        type: GET_ITEM_PLANT_INFO,
        payload: par,
    }
}