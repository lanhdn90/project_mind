import React from 'react';
import {Router,Switch,Route} from 'react-router';
import history from './utils/history';
import {ROUTERS} from './constants/router';

import Login from './pages/Login'
import Homepage from './pages/HomePage'

import Home from './component/Main/HomePage'
import Plant from './component/Main/Plant';
import Inverter from './component/Main/Inverter' 
import Management from './component/Main/Management'
import Alarm from './component/Main/Alarm'
import UserManagement from './component/Main/UserManagement'
import Maintenance from './component/Main/Maintenance';
function BrowserRouter(props) {
    return (
        <Router history={history}>
            <Switch>
                <Route 
                exact
                path={ROUTERS.LOGIN}
                component={Login}
                />
                <Homepage 
                exact
                path={ROUTERS.USER_INFORMATION}
                component={Home}
                />
                <Homepage 
                exact
                path={ROUTERS.PLANT}
                component={Plant}
                />
                <Homepage 
                exact
                path={ROUTERS.USER_MANAGEMENT}
                component={UserManagement}
                />
                <Homepage 
                exact
                path={ROUTERS.INVERTER}
                component={Inverter}
                />
                <Homepage 
                exact
                path={ROUTERS.MANAGEMENT}
                component={Management}
                />
                <Homepage 
                exact
                path={ROUTERS.ALARM}
                component={Alarm}
                />
                <Homepage 
                exact
                path={ROUTERS.MAINTENANCE}
                component={Maintenance}
                />
            </Switch>
        </Router>
    );
}

export default BrowserRouter;