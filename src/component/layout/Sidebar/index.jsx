import React from 'react';
import './style.css';
import { FaRegUserCircle, FaSearch } from "react-icons/fa";
import MenuItem from './MenuItem';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import {
  setValueSidebarAction,
  setValueInverterAction,
  setMenuItemSelectedAction,

} from '../../../redux/actions'

function Sidebar(props) {
  const {
    collapsed ,
    plantList, 
    isValueSidebar, 
    setValueSidebar,
    setValueInverter, 
    setMenuItemSelected,
  } = props;




  return (
    <div className="sideMenu"
      style={{
        width: collapsed ? '0px' : '300px',
        visibility: collapsed ? 'hidden' : 'visible',
        padding: collapsed ? '30px 0' : '30px 20px'
      }}
    >
      <div className="top-section">
        <div className="logo">
          <h5 className='title-content'>SolarFarm</h5>
        </div>
      </div>
      <div className="search-controller">
        <div className="search-icon">
          <i><FaSearch /></i>
        </div>
        <input type="text" placeholder="Search" />
      </div>
      <div className="main-menu">
      <Link 
      key='e51f4000-a807-11eb-9f25-398f4b7e9473' 
      to={`/UserName`}>
            <a
                onClick={() => {
                    setValueSidebar(true)
                    setValueInverter(false)
                    setMenuItemSelected(null)  
                }}
                className={`menu-item ${isValueSidebar ? 'active' : ""}`}
            >
              <div className='menu-icon'>
                    <i><FaRegUserCircle/></i>
                </div>
                <div className="menu-item-content">
                    <span>
                      User
                    </span>
                </div>
            </a>
        </Link>
        <ui>
          {plantList.map((menuItem) => (
            <MenuItem
              key={menuItem.id}
              menuItem={menuItem}
            />
          ))}
        </ui>
      </div>
    </div>
  );
}

const mapStateToProps = (state) =>{
  const {
      isValueSidebar,
      isValueInverter,
      plantList,
      collapsed,
  } = state.dashboardHome

  return{
      isValueSidebar: isValueSidebar,
      isValueInverter: isValueInverter,
      plantList: plantList,
      collapsed: collapsed,
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    setValueSidebar: (par) => dispatch(setValueSidebarAction(par)),
    setValueInverter: (par) => dispatch(setValueInverterAction(par)),
    setMenuItemSelected: (par) => dispatch(setMenuItemSelectedAction(par)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Sidebar);