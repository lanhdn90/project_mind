import{
    SET_VALUE_SIDEBAR,
    SET_VALUE_NAV,
    SET_VALUE_INVERTER,
    SET_MENU_ITEM_SELECTED,
    SET_COLLAPSED,
    CLEAR_ALL_NOTIFICATION,
    CLEAR_ITEM_NOTIFICATION,
    GET_SIDEBAR_LIST,
} from '../constants'

export const setValueSidebarAction= (par)=>{
    return {
        type: SET_VALUE_SIDEBAR,
        payload: par
    }
}

export const setValueNavAction= (par)=>{
    return {
        type: SET_VALUE_NAV,
        payload: par
    }
}

export const setValueInverterAction= (par)=>{
    return {
        type: SET_VALUE_INVERTER,
        payload: par
    }
}

export const setMenuItemSelectedAction= (par)=>{
    return {
        type: SET_MENU_ITEM_SELECTED,
        payload: par
    }
}

export const setCollapsedAction= (par)=>{
    return {
        type: SET_COLLAPSED,
        payload: par
    }
}

export const clearAllNotificationAction= ()=>{
    return {
        type: CLEAR_ALL_NOTIFICATION,
    }
}

export const clearItemNotificationAction= (par)=>{
    return {
        type: CLEAR_ITEM_NOTIFICATION,
        payload: par
    }
}


export const getSidebarListAction= (par)=>{
    return {
        type: GET_SIDEBAR_LIST,
        payload: par
    }
}