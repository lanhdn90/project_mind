import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import dashboardHome from './dashboard.reducer';
import userManagementReducer from './UserManagement.reducer';
export default combineReducers({
    userReducer: userReducer,
    dashboardHome: dashboardHome,
    userManagementReducer: userManagementReducer,
})