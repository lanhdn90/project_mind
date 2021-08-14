import React,{useState, useEffect} from 'react';
import { FiPlus, FiEdit ,FiChevronLeft  } from "react-icons/fi";
import { Modal,  Pagination, DatePicker, Form, Col, Row, Input} from 'antd';
import {  FaSearch} from "react-icons/fa";
import Moment from 'react-moment';
import Renderdetails from './Renderdetails';
import { connect } from 'react-redux';
import {
    getViewerListAction,
} from '../../../redux/actions'

function ListOfViewUser(props) {
    const [form] = Form.useForm();
    const {
        viewerList,
        getViewerList,
    }=props;

    const [isModalVisible, setIsModalVisible] = useState(false);
     
    const [dataPlant, setDataPlant] = useState([
        {
            code: 'G00',
            name: 'Nguyen van linh',
            systemSize: 998.76,
            installDate: '2020-11-16',
            Azimuth: null,
            Tilt: null,
            Address: '377 Nguyen Van Linh',
            Latitude: 13.16896,
            Longitude: 107.732158,
            Elevation: 310.857788
        },
        {
            code: 'G01',
            name: 'Hoang Dieu',
            systemSize: 998.76,
            installDate: '2020-11-16',
            Azimuth: null,
            Tilt: null,
            Address: '377 Nguyen Van Linh',
            Latitude: 13.16896,
            Longitude: 107.732158,
            Elevation: 310.857788
        },
        {
            code: 'G00',
            name: 'Nguyen Huu Tho',
            systemSize: 998.76,
            installDate: '2020-11-16',
            Azimuth: null,
            Tilt: null,
            Address: '377 Nguyen Van Linh',
            Latitude: 13.16896,
            Longitude: 107.732158,
            Elevation: 310.857788
        },
        {
            code: 'G01',
            name: 'Tran Phu',
            systemSize: 998.76,
            installDate: '2020-11-16',
            Azimuth: null,
            Tilt: null,
            Address: '377 Nguyen Van Linh',
            Latitude: 13.16896,
            Longitude: 107.732158,
            Elevation: 310.857788
        },{
            code: 'G00',
            name: 'Le Lai',
            systemSize: 998.76,
            installDate: '2020-11-16',
            Azimuth: null,
            Tilt: null,
            Address: '377 Nguyen Van Linh',
            Latitude: 13.16896,
            Longitude: 107.732158,
            Elevation: 310.857788
        },

    ])

    const handleOk = (values) => {
        // let  list = dataPlantOfUser;
        // list.pop();
        // const itemPlant ={
        //     code: values.code,
        //     label: values.label,
        //     location: values.location,
        //     // installtionDate: '2021-08-01',
        //     model: values.model,
        //     serialNumber: values.serialNumber,
        //     active: true,
        //     lastActivityTime: '2021-08-01 08:30:23',
        // }
        // setDataPlantOfUser([itemPlant, ...list]);
        setIsModalVisible(false);
        form.resetFields();
      };
    
    const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
    };

    const onChangeValue = (e) =>{
        const val = e.target.value;
    console.log("🚀 ~ file: listOfGateWay.jsx ~ line 28 ~ onChangeValue ~ val", val)
        
    }

    const onChangePage = page =>{
    getViewerList({page_size : 5, page: page - 1})
    }

    const [viewUserId, setViewUserId] = useState(true);
    const [viewUserInfo, setViewUserInfo] = useState({});

    const renderItemPlantListAll  = (item) =>(
        <div onClick={()=>{
            setViewUserId(false);
            setViewUserInfo(item);
        }}  className="item-plant-listAll">
            <div className="email-plant-item">
                {item.email}
            </div> 
            <div className="createdTime-plant-item">
            <Moment  format={"DD-MM-YYYY THH:mm:ss"}>
                {parseInt(item.created_ts)}
            </Moment>
            </div>
            <div className="plants-item">
                {item.first_name} {item.last_name}
            </div>
        </div>
    );

    

    const renderListPlantOfUser = () =>(
        <>
        <div className="header-plant-information">
                <div className="title-plant-information">
                    List of Gateway
                </div>
            </div>
            <div className="main-gateway">
                <div className="search-gateway">
                    <Input
                        onChange={onChangeValue}
                        size="large" 
                        placeholder="Search Gateway by Label" prefix={<FaSearch />} />
                    <FiPlus onClick={()=>setIsModalVisible(!isModalVisible)} style={{marginLeft: "10px", fontSize:'20px', cursor:'pointer' }}/>
                </div>
                <div className="list-plant">
                    <div className="header-list-plant">
                        <div className="header-email">EMAIL</div>
                        <div className="header-createdTime">CREATED TIME</div>
                        <div className="header-plants">NAME</div>
                    </div>
                    {viewerList.data.map((item)=>(
                        renderItemPlantListAll(item)
                    ))}
                </div>
                <div className="footer-plant-list">
                <Pagination size="small"
                    onChange={onChangePage}
                    defaultPageSize={5}
                    defaultCurrent={1} 
                    total={viewerList.total_elements} 
                    />
                </div>
            </div>
        </>
    )
    
    // const deleteItemPlant = (index)=>{
    //     dataPlant.splice(index,1);
    //     // renderItemPlantOfViewUser()
    // }

    // useEffect(() => {
    //     renderItemPlantOfViewUser()
    // }, [dataPlant])

    // const renderItemPlantOfViewUser  = () =>(
    //     <>
    //     {dataPlant.map((item, index)=>(
    //         <div key={index} className="item-plant-viewUser">
    //         {/* <div className="hover-item-plant"></div> */}
    //         <div className="code-item-plant">
    //             {item.code}
    //         </div> 
    //         <div className="label-item-plant">
    //             {item.name}
    //         </div>
    //         <div className={`status-item-plant `}>
    //             {item.systemSize}
    //         </div>
    //         <div className="item-plant-activity-time">
    //             {item.installDate}
                
    //             <HiMinusCircle className='icon-delete'
    //                     onClick={()=>{deleteItemPlant(index)}}
    //             />
                
    //         </div>
    //     </div>
    //         // renderItemPlantOfViewUser(item, index)
    //     ))}
        
    //     </>
    // );

    const renderViewUserInfo = (itemUser)=>(
        <>
            
            <div className="header-gateway-information">
                <div className="title-plant-information">
                    View User's Info
                </div>
                <div className="btn-group">
                    <button className="btn-delete-plant"
                    onClick={()=>setIsModalVisible(!isModalVisible)}
                    >
                    Delete
                    </button>
                    <button className="btn-edit-plant" 
                    onClick={()=>setIsModalVisible(!isModalVisible)}
                    >
                    Edit
                    <FiEdit 
                        style={{marginLeft: "10px"}}
                        
                    />
                    </button>
                    
                </div>
                
            </div>
            <div className="content-viewUserInfo-information">
                <div className="text-viewUserInfo-information">Email</div>
                <div className="values-viewUserInfo-information">
                    {itemUser.Email}
                </div>
            </div>
            <div className="content-viewUserInfo-information">
                <div className="text-viewUserInfo-information">Name</div>
                <div className="values-viewUserInfo-information">
                    {itemUser.name}
                </div>
            </div>
            <div className="header-plant-item-information">
                <div className="title-plant-item-information">
                    List of Plants
                </div>
            </div>
            <div className="main-plant-item">
                <div className="search-plant-item">
                    <Input
                        onChange={onChangeValue}
                        // size="large" 
                        placeholder="Search Plant by Label" prefix={<FaSearch />} />
                    <FiPlus onClick={()=>setIsModalVisible(!isModalVisible)} style={{marginLeft: "10px", fontSize:'20px', cursor:'pointer' }}/>
                </div>
                <div className="list-plant">
                    <div className="header-list-plant">
                        <div className="header-code">CODE</div>
                        <div className="header-label">LABEL</div>
                        <div className="header-systemSize">SYSTEM SIZE</div>
                        <div className="header-itemPlant-lastActivityTime">INSTALLED DATE</div>
                    </div>
                    {dataPlant.map((item, index)=>(
                        <Renderdetails
                        dataPlant={dataPlant}
                        index={index}
                        item ={item}
                        setDataPlant ={setDataPlant}
                    />
                    ))}
                </div>
                <div className="footer-plant-list">
                <Pagination size="small" defaultCurrent={1} total={50} />
                </div>
            </div>
            <div className="btn-back-list"
                onClick={()=>{
                    setViewUserId(true);
                    setViewUserInfo({});
                }}
            >
                <FiChevronLeft 
                style={{marginRight: '5px'}}
                /> Back
            </div>
        </>
    )


    return (
        <>
            { viewUserId ?
             renderListPlantOfUser() : 
             renderViewUserInfo(viewUserInfo)
             }
            <Modal 
            visible={isModalVisible} 
            footer={
                <div
                style={{                    
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    height: "50px"
                }}
                >
                <div onClick={handleCancel} 
                    style={{ 
                        marginRight: '20px',
                        width: '80px',
                        height: '80%',
                        textAlign: 'center',
                        border: '1px solid gray',
                        borderRadius: '5px',
                        paddingTop: '8px',
                        cursor: 'pointer'
                    }}
                    >
                  Cancel
                </div>
                <div onClick={() => form.submit()}
                    style={{ 
                        marginRight: '20px',
                        backgroundColor: '#1890ff',
                        width: '80px',
                        height: '80%',
                        textAlign: 'center',
                        borderRadius: '5px',
                        paddingTop: '8px',
                        cursor: 'pointer',
                        color: 'white'
                    }}
                >
                  Submit
                </div>
              </div>}
            width ={720}
            onCancel={handleCancel}
            >
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={(values) => handleOk(values)}
                    >
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                            
                            name="code"
                            label="Code :"
                            rules={[{ required: true, message: 'Please enter Code' }]}
                            >
                            <Input placeholder="Please enter Code" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                            name="label"
                            label="Label :"
                            rules={[{ required: true, message: 'Please enter Label' }]}
                            >
                            <Input placeholder="Please enter Label" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                            name="location"
                            label="Location :"
                            >
                            <Input placeholder="Please enter location" />
                            </Form.Item>
                        </Col>
                        
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                            name="model"
                            label="Model :"
                            rules={[{ required: true, message: 'Please enter model' }]}
                            >
                            <Input placeholder="Please enter model" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                            name="serialNumber"
                            label="Serial Number :"
                            >
                            <Input placeholder="Please enter serial number" />
                            </Form.Item>
                        </Col>
                        
                    </Row>
                    
                    <Row gutter={16}>
                        <Col span={6}>
                            <Form.Item
                            name="installDate"
                            label="Install Date"
                            >
                             <DatePicker/> 
                            </Form.Item>
                        </Col>
                        
                    </Row>
                </Form>
            </Modal>
        </>
    );
}
const mapStateToProps = (state) =>{
    const {viewerList} =state.userManagementReducer
    return{
        viewerList: viewerList,

    }
}
  
const mapDispatchToProps = (dispatch) =>{
  return{
    getViewerList: (par) => dispatch(getViewerListAction(par)),

  }
}
  
export default connect(mapStateToProps,mapDispatchToProps)(ListOfViewUser);
