import React from 'react';
import { FaCity, FaIndustry, FaChartBar, FaServer } from "react-icons/fa";
import {Link} from 'react-router-dom';
function MenuManagement(props) {
    const {setIsShowItem, isShowItem, plantInfo}=props;
    const data = [
        {
            "content": "Plant Information",
            'icon': <FaCity />,
        },
        {
            "content": "Devices",
            'icon': <FaIndustry />,
        },
        {
            "content": "Performance",
            'icon': <FaChartBar />,
        },
        {
            "content": "Electricity Cost",
            'icon': <FaServer />,
        },
    ];

    return (
        <div className="sidebar-management">
                <div className="name-plant">
                    {plantInfo.name}
                </div>
                <div className="sidebar-main-management">
                    {data.map((item,index)=>(
                        <div
                            onClick={() => {
                                setIsShowItem(item.content);
                            }}
                            className={`item-sidebar-management ${isShowItem === item.content ? 'active' : ""}`}
                        >
                        {isShowItem === item.content ? 
                        <div className="item-management-active"></div> : null}
                            <div style={{
                                fontSize:'20px',
                                marginRight: "20px",
                            }}>
                                {item.icon}
                            </div>
                        {item.content}
                        </div>
                    ))}
                </div>
            </div>
    );
}

export default MenuManagement;