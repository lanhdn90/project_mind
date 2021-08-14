import React from 'react';
import { FaIndustry, FaStreetView, FaDollyFlatbed ,FaUserCircle } from "react-icons/fa";

function MenuManagement(props) {
    const {setIsShowItem, isShowItem}=props;
    const data = [
        {
            "content": "Plant",
            'icon': <FaIndustry />,
        },
        {
            "content": "Gateways",
            'icon': <FaDollyFlatbed />,
        },
        {
            "content": "View User",
            'icon': < FaStreetView  />,
        },
    ];

    return (
        <div className="sidebar-management">
                <div className="name-plant">
                    <FaUserCircle style={{fontSize: '40px'}}/>
                    <p>Nguyen Huy Long</p>
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