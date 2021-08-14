import React, {useState, useEffect} from 'react';
import { Card, Col, Row, Select, Input, Progress, Pagination  } from 'antd';
import './style.css'
import {FaSearch } from "react-icons/fa";
import { FcApproval, FcEngineering } from "react-icons/fc";
import { GoKebabVertical } from "react-icons/go";
import { 
    CalendarOutlined
} from '@ant-design/icons';
import { connect } from 'react-redux';
import {
  setValueNavAction,
  setMenuItemSelectedAction,
} from '../../../redux/actions'
import history from '../../../utils/history';
function Home(props) {
    const { Option } = Select;
    const {
        itemPlantList,
        setValueNav, 
        setMenuItemSelected
      } = props

    useEffect(() => {
        setValueNav(1)
    }, [])

    // function handleChange(e) {
    //     console.log('click', e);
    // }

    const onChangePlant =(id)=>{
        setMenuItemSelected(id);
        const path = `/Plant/${id}`;
        history.push(path);
    }

    const renderItemListContent  = (item) =>(
        <div className="main-list-container" key={item.id}
            onClick={()=>onChangePlant(item.id)}
        >
            <div 
                className="main-status"
            >
                <i>{item.statusPlant === 'success'? <FcApproval/>: <FcEngineering/>}</i>
            </div>
            <div className="main-name-plant">{item.namePlant}</div>
            <div className="main-performance">
                {item.performance === 0 ? 
                "not configured" :
                <Progress 
                type='line'
                strokeColor={item.statusPlant === 'success' ? '#1bc5bd' : '#99CC00'}
                strokeWidth='15px'
                percent={item.performance} status="active" />
            }
            </div>
            <div className="main-system-size">{item.systemSize} kW</div>
            <div className="main-install-date">{item.installDate}</div>
            <div className={`main-maintenance 
            ${item.statusPlant === 'success' ? "main-maintenance-one" :
             item.statusPlant === 'active' ? "main-maintenance-two" : "main-maintenance-three"}`}>
                <i><CalendarOutlined /></i>
                {item.maintenance}
            </div>
        </div>
    );

    return (
        <div className='header-home-container'>
            <Row gutter={16}>
                <Col span={8}>
                    <Card 
                    type="inner" 
                    size='small' 
                    title="Portfolio" 
                    extra={<i><GoKebabVertical/></i>}
                    >
                        <div style={{display:'flex', marginBottom: '10px'}}>
                            <div className="item-portfolio">Plant</div>
                            <div className="val-item-portfolio">7</div>
                        </div>
                        <div style={{display:'flex'}}>
                            <div className="item-portfolio">Installed Capacity</div>
                            <div className="val-item-portfolio">4.07MWp</div>
                        </div>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card type="inner" size='small' title="History" extra={<i><GoKebabVertical/></i>}>
                    <div style={{display:'flex', marginBottom: '10px'}}>
                        <div className="item-portfolio">Last 365 Days</div>
                        <div className="val-item-portfolio">2.2 GWh</div>
                    </div>
                    <div style={{display:'flex'}}>
                        <div className="item-portfolio">Last 30 Days</div>
                        <div className="val-item-portfolio">326.66 MWh</div>
                    </div>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card size='small' type="inner" title="Last 24 hours" extra={<i><GoKebabVertical/></i>}>
                        <div style={{display:'flex'}}>
                            <div className="item-portfolio">Energy</div>
                            <div className="val-item-portfolio">13.44 MWh</div>
                        </div>
                    </Card>
                </Col>
            </Row>
            <div className="search-plant">
            {/* <Select 
                placeholder="Trạng thái trạm điện" 
                style={{ width: 170 }}
                 onChange={handleChange}>
                <Option value="jack">
                <div className="demo-option-label-item">
                    <span role="img" aria-label="China">
                    <FcApproval/>
                    </span>
                    Bình thường             
                </div>
                </Option>
                <Option value="lucy">
                <div className="demo-option-label-item">
                    <span role="img" aria-label="China">
                    <FcEngineering/>
                    </span>
                    Cảnh báo            
                </div>
                </Option>
            </Select> */}
                <Input
                style={{
                    width: '30%',
                    borderRadius: '5px'
                }}
                size='default'
                allowClear 
                placeholder="Tên trạm điện"
                prefix={<FaSearch className="site-form-item-icon" />}
                />
            </div>
            <div className="list-container">
                <div className="header-list-container">
                    <div className="header-status">Status</div>
                    <div className="header-name-plant">Plant Name</div>
                    <div className="header-performance">Performance</div>
                    <div className="header-system-size">System Size</div>
                    <div className="header-install-date">Install Date</div>
                    <div className="header-maintenance">Maintenance</div>
                </div>
                {itemPlantList.map((item)=>(
                    renderItemListContent(item)
                ))}
            </div>
            <div className="footer-list">
                <Pagination defaultCurrent={1} total={50} />
            </div>
        </div>
    );
}

const mapStateToProps = (state) =>{
    const {itemPlantList} =state.dashboardHome
    return{
        itemPlantList: itemPlantList,
    }
}
  
    const mapDispatchToProps = (dispatch) =>{
      return{
        setValueNav: (par) => dispatch(setValueNavAction(par)),
        setMenuItemSelected: (par) => dispatch(setMenuItemSelectedAction(par)),
        // setValueSidebar: (par) => dispatch(setValueSidebarAction(par)),

      }
    }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Home);
