import {
    CHECK_USER,
    LOGOUT_USER,
    GET_USER_INFO,
    GET_SIDEBAR
  } from '../constants';

  export const loginUserAction = (params) => {
    return {
      type: CHECK_USER,
      payload: params,
    }
  }

  export const logoutUserAction = () => {
    return {
      type: LOGOUT_USER,
    }
  }

  export const getSidebarAction = (params) => {
    return {
      type: GET_SIDEBAR,
      payload: params,
    }
  }

  export const getUserInfoAction = (params) => {
    return {
      type: GET_USER_INFO,
      payload: params,
    }
  }