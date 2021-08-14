import { fork } from 'redux-saga/effects';
import userInfSaga from './user.sage';
import dashboardSaga from './dashboard.saga';
import userManagementSaga from './UserManagement.saga';
export default function* mySaga() {
    yield fork(userInfSaga);
    yield fork(dashboardSaga);
    yield fork(userManagementSaga);
}