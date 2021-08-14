import React, {useState} from 'react';
import { Timeline, Button, Dropdown, Avatar, Badge, Menu, Tooltip, Pagination } from 'antd';
import {Link} from 'react-router-dom';
import { 
    MenuFoldOutlined,
    BellOutlined, 
    LoginOutlined,
    SettingOutlined,
    UserOutlined,
    ClockCircleOutlined
} from '@ant-design/icons';
import { FcAbout, FcHighPriority } from "react-icons/fc";
import './style.css'
import { connect } from 'react-redux';
import {
  setValueNavAction,
  setCollapsedAction,
  clearAllNotificationAction,
  clearItemNotificationAction,
  logoutUserAction,

} from '../../../redux/actions'
function Header(props) {
    const {
      userInfo,
      setCollapsed, 
      isValueInverter,
      collapsed, 
      isValueSidebar, 
      setValueNav, 
      isValueNav,
      notificationList,
      clearAllNotification,
      clearItemNotification,
      logoutUser,

    } = props
    const color = '#fff ';
    const [language, setLanguage] = useState(true);
    

    const renderLanguage = ()=>{
      if(language){
        return(
          <>
            <div className="Vietnamese-language">
              </div>
              <p>Viet Nam</p>
          </>
        );
      }else{
        return(
          <>
            <div className="english-language">
              </div>
              <p>English</p>
          </>
        );
      }
    }


    const menu = (
        <Menu>
          <Menu.Item icon={<UserOutlined />}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              Profile
            </a>
          </Menu.Item>
          <Menu.Item icon={<SettingOutlined />}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
              UserNamestration
            </a>
          </Menu.Item>
          <Menu.Item icon={<LoginOutlined />}>
            <div onClick={()=>logoutUser()}>
              Sign out
            </div>
          </Menu.Item>
        </Menu>
      );

    const contentNotification = (index,item)=> (
      <div className='item-timeline'>
        <div className="item-content-timeline">
          <div className="time-item-timeline">
          <div><FcHighPriority/></div>
          {item.timeWarning} - {item.contentWarning}
          </div>
          <div className="address-notification">
            <div className="icon-warning"></div>
            {item.namePlant} > {item.nameInverter}
          </div>
        </div>
        <div className="btn-clear-item-timeline"
          onClick ={()=>clearItemNotification({notificationList,index})}
        >
          X
        </div>
      </div>
    )
    
    const notification = (
      <div style={{backgroundColor:'#fff'}}>
        <div className="title-notification">
            <div className="title-content">
              <i><FcAbout/></i>
              <p>
              SOLAR FARM - TODAY
              </p>
            </div>
            <div className="btn-clear"
              onClick={()=>clearAllNotification()}
            >
                Clear
            </div>
        </div>
        <Timeline>
          <Timeline.Item dot={<ClockCircleOutlined className="timeline-clock-icon" />} color="red">
            Ngày 14/7/2021
          </Timeline.Item>
          {notificationList.map((item, index)=>(
            <Timeline.Item key={index}>
              {contentNotification(index,item)}
            </Timeline.Item>

          ))}
        </Timeline>
        {notificationList.length > 0 ?
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
          <Pagination size="small" total={50} />
        </div>
        : null
        }
      </div>
    );

    return (
        <div className="header-container"
          style={{width: collapsed ? '100%' : 'calc(100% - 300px)',}}
        >
            <div className="left-navbar">
                <Button style={{ border: 'none'}}  onClick={() => setCollapsed(!collapsed)} icon={<MenuFoldOutlined />}></Button>
                  <Link key={1} to={`/UserName`}>
                    <div onClick={()=>setValueNav(1)} className={`btn-nav-menu ${isValueNav === 1 ? "active" : ""}`}  >
                        Home
                    </div>
                  </Link>
                {isValueInverter ?
                 null 
                 :
                 !isValueSidebar ?
                  <>
                   <Link key={2} to={ `/Management` }>
                     <div onClick={()=>setValueNav(2)} className={`btn-nav-menu ${isValueNav === 2 ? "active" : ""}`}  >Management</div>
                   </Link>
                   <Link key={3} to={ `/Maintenance` }>
                     <div onClick={()=>setValueNav(3)} className={`btn-nav-menu ${isValueNav === 3 ? "active" : ""}`}  >Maintenance</div>
                   </Link>
                  </>
                  :
                  <Link key={2} to={ `/UserManagement`}>
                     <div onClick={()=>setValueNav(2)} className={`btn-nav-menu ${isValueNav === 2 ? "active" : ""}`}  >Management</div>
                   </Link>
                 
                }
                {isValueSidebar ? 
                null
                :
                <Link key={4} to={`/Alarm`}>
                  <div onClick={()=>setValueNav(4)} className={`btn-nav-menu ${isValueNav === 4 ? "active" : ""}`}  >
                    Alarm
                  </div>
              </Link> 
                }
            </div>
            <div className="right-navbar">
                <div className="language-nav" onClick={()=>setLanguage(!language)}>
                  {renderLanguage()}
                </div>
                <div className="notifications-nav">
                    <Tooltip  
                    title={notification}
                    color={color}
                    placement="bottomRight" 
                    >
                        <Badge count={notificationList.length}>
                            <Avatar 
                            shape="circle "
                            style={{ color: '#000', backgroundColor: '#fff'}}
                            icon={<BellOutlined/>} />
                        </Badge>
                    </Tooltip >
                </div>             
                <div className="user-nav">
                    <Badge status="success">
                        <Avatar 
                            shape="circle " 
                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                         />
                    </Badge>
                    <Dropdown overlay={menu} placement="bottomLeft" arrow>
                    <div className="user-info">
                        <p className="username">{userInfo.first_name} {userInfo.last_Name}</p>
                        <p className="role-info">UserName</p>
                    </div>
                    </Dropdown>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) =>{
  const {
      isValueSidebar,
      isValueInverter,
      isValueNav,
      collapsed,
      notificationList,
  } = state.dashboardHome
  const {
    userInfo
} = state.userReducer
  return{
      isValueSidebar: isValueSidebar,
      isValueInverter: isValueInverter,
      isValueNav: isValueNav,
      collapsed: collapsed,
      notificationList: notificationList,
      userInfo: userInfo,
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    setValueNav: (par) => dispatch(setValueNavAction(par)),
    setCollapsed: (par) => dispatch(setCollapsedAction(par)),
    clearAllNotification: () =>dispatch(clearAllNotificationAction()),
    clearItemNotification: (par) =>dispatch(clearItemNotificationAction(par)),
    logoutUser: () =>dispatch(logoutUserAction()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);


