/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
// import { FaCity, FaIndustry, FaTruckMonster } from "react-icons/fa";
// import { ROUTERS } from '../../../constants/router';
// import history from '../../../utils/history';
import {Link} from 'react-router-dom';
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { connect } from 'react-redux';
import { FaCity, FaIndustry } from "react-icons/fa";
import {
  setValueSidebarAction,
  setValueInverterAction,
  setMenuItemSelectedAction,
} from '../../../redux/actions'
function MenuItem(props) {
    const { 
        menuItemSelected, 
        setMenuItemSelected, 
        setValueInverter ,
        setValueSidebar,
     } = props;
    const { id, label, children , type} = props.menuItem;
    const [expand, setExpand] = useState(false);

    return (
        <div key={id}>
        <Link className='link-sidebar' to={type === "UserName" ?  `/UserName`: `/Plant/${id}`}>
            <a
                onClick={() => {
                    setExpand(true);
                    setMenuItemSelected(id);
                    setValueInverter(false);
                    setValueSidebar(false);
                }}
                className={`menu-item ${id === menuItemSelected ? 'active' : ""}`}
            >
                <div className='menu-icon'>
                    <i><FaCity /></i>
                </div>
                <div className="menu-item-content">
                    <span>
                        {label}
                    </span>

                </div>
            </a>
            {children && children.length > 0 ? 
                <div className='icon-drop'
                >
                    {expand ? 
                    <RiArrowDropUpLine
                    onClick={() => {
                        setExpand(false);   
                    }}
                    /> 
                    : 
                    <RiArrowDropDownLine
                    onClick={() => {
                        setExpand(true);   
                    }}
                    />
                    }
                </div>
            : null}
            {children && children.length > 0 ? (
                <ul className={`sub-menu ${expand ? 'active' : ""}`}>
                    {children.map((menu) => (
                        <Link key={menu.id} to={`/Inverter/${menu.id}`}>
                            <div 
                                onClick={() => {
                                    setMenuItemSelected(menu.id);
                                    setValueInverter(true);
                                    setValueSidebar(false);
                                }}
                                className={`menu-item ${menu.id === menuItemSelected ? "active" : ""}`}
                            >
                                <div className='menu-icon'>
                                    <i><FaIndustry /></i>
                                </div>
                                <span>{menu.label       }</span>
                            </div>
                        </Link>
                    ))}
                </ul>
            ) : null}
        </Link>
        </div>
    );
}

const mapStateToProps = (state) =>{
    const {
        isValueSidebar,
        isValueInverter,
        menuItemSelected,
    } = state.dashboardHome
    return{
        isValueSidebar: isValueSidebar,
        isValueInverter: isValueInverter,
        menuItemSelected: menuItemSelected,
    }
  }
  
  const mapDispatchToProps = (dispatch) =>{
    return{
      setValueSidebar: (par) => dispatch(setValueSidebarAction(par)),
      setValueInverter: (par) => dispatch(setValueInverterAction(par)),
      setMenuItemSelected: (par) => dispatch(setMenuItemSelectedAction(par)),
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(MenuItem);
// export default MenuItem;