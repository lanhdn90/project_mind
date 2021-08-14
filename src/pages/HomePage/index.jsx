import React, {useState, useEffect} from 'react';
import Sidebar from '../../component/layout/Sidebar'
import Navbar from '../../component/layout/Header'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import {
    getSidebarListAction,
    getUserInfoAction,
} from '../../redux/actions'
import './style.css'
function HomePage(props) {
    const {
        userInfo,
        getUserInfo,
        getSidebarList,
        collapsed,
        isValueSidebar,
        isValueNav,
        isValueInverter, 
        exact, 
        path, 
        component: Component, 
        ...other} = props;
        var token = localStorage.getItem('token');
        
        useEffect(() => {
            getUserInfo(token)
        }, [])

        useEffect(() => {
            if(userInfo.id){
                getSidebarList(userInfo.id)
              }
        }, [userInfo])

        // if(localStorage.getItem('token') !== null){
        //     <Redirect to="/UserManagement" />;
        // }else{
        //    return <Redirect to="/login" />;
        // }
        

    return (
        <Route
            exact={exact}
            path={path}
            render={(routerProps)=>{
                return(
                    <div style={{display:'flex'}}>
                        <Sidebar/>
                        <div style={{
                            position: 'absolute',
                            width: collapsed ? '100%' : 'calc(100% - 300px)',
                            left: collapsed ? '0' : '300px'
                        }}>
                            <Navbar/>
                            <div className='main-container'>
                                <Component 
                                    {...other}{...routerProps}
                                /> 
                            </div>
                        </div>
                    </div>
                )
            }}
        />
    );
}

const mapStateToProps = (state) =>{
    const {
        isValueSidebar,
        isValueInverter,
        collapsed,
    } = state.dashboardHome
    const {
        userInfo,
      } = state.userReducer
    return{
        isValueSidebar: isValueSidebar,
        isValueInverter: isValueInverter,
        collapsed: collapsed,
        userInfo: userInfo
    }
  }
  
  const mapDispatchToProps = (dispatch) =>{
    return{
        getSidebarList: (par) => dispatch(getSidebarListAction(par)),
        getUserInfo: (par) => dispatch(getUserInfoAction(par)),
        
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
