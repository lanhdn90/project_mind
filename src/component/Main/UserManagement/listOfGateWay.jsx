import React,{useState, useEffect} from 'react';
import { FiPlus, FiEdit ,FiChevronLeft ,FiSettings } from "react-icons/fi";
import { Modal,  Pagination, DatePicker, Form, Col, Row, Input,Badge} from 'antd';
import {  FaSearch} from "react-icons/fa";
import { connect } from 'react-redux';
import Moment from 'react-moment';
import {
    getItemGatewayInfoAction,
    restartItemGatewayAction,
    getGatewayListAction,
} from '../../../redux/actions'
function ListOfGateWay(props) {
    const [form] = Form.useForm();
    const [isModalVisible, setIsModalVisible] = useState(false);
    
    const {
        gatewayList,
        gatewaysList,
        getItemGatewayInfo,
        restartItemGateway,
        getGatewayList,
    } = props;
    
    useEffect(() => {
        restartItemGateway()
        gatewayList.data.map((item, index) => {
            getItemGatewayInfo({ item, index})
        })
    }, [])


    const handleOk = (values) => {
        // let  list = dataPlant;
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
        // setDataPlant([itemPlant, ...list]);
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
        getGatewayList({page_size : 5, page: page - 1})
        // setIsRestart(true)

    }

    const [gateWayId, setGateWayId] = useState(true);
    const [gateWayInfo, setGateWayInfo] = useState({})

    const renderItemPlantListAll  = (item) =>(
        <div onClick={()=>{
            setGateWayId(false);
            setGateWayInfo(item);
        }}  className="item-gateway-listAll">
            <div className="code-gateway-item">
                {item.code}
            </div> 
            <div className="label-gateway-item">
                {item.label}
            </div>
            <div className={`status-gateway-item ${item.active ? 'active' : 'inactive' } `}>
                {item.active ? 'active' : 'inactive'}
            </div>
            <div className="gateway-activity-time">
                {item.last_activity_time ?
                <Moment  format={"DD-MM-YYYY THH:mm:ss"}>
                    {parseInt(item.last_activity_time)}
                </Moment>
                : <div className="">Null</div>
                }
            </div>
        </div>
    );

    const renderListOfGateWay = () =>(
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
                        placeholder="Search Gateway by Label" prefix={<FaSearch />} 
                        />
                    <FiPlus onClick={()=>setIsModalVisible(!isModalVisible)} 
                    style={{marginLeft: "10px", fontSize:'20px', cursor:'pointer'  }}/>
                </div>
                <div className="list-gateway">
                    <div className="header-list-gateway">
                        <div className="header-code">CODE</div>
                        <div className="header-label">LABEL</div>
                        <div className="header-statusGateway">STATUS</div>
                        <div className="header-lastActivityTime">LAST ACTIVITY TIME</div>
                    </div>
                    {gatewaysList.map((item)=>(
                        renderItemPlantListAll(item)
                    ))}
                </div>
                <div className="footer-plant-list">
                <Pagination 
                    size="small" 
                    onChange={onChangePage}
                    defaultPageSize={5}
                    defaultCurrent={1} 

                    total={gatewayList.total_elements} 
                />
                </div>
            </div>
        </>
    )
    
    const renderGateWayInfo = (itemGateway)=>(
        <>
            <div className="header-gateway-information">
                <div className="title-plant-information">
                    GateWay Information
                </div>
                <div className="btn-group">
                    <button className="btn-delete-plant"
                    onClick={()=>setIsModalVisible(!isModalVisible)}
                    >
                    Delete
                    {/* <FiEdit style={{marginLeft: "10px"}}/> */}
                    </button>
                    <Badge count={1}>

                        <button className="btn-config-plant"
                            onClick={()=>setIsModalVisible(!isModalVisible)}
                        >
                            Config
                            <FiSettings style={{marginLeft: "5px", fontSize: "15px", }}/>
                        </button>
                    </Badge>
                    <button className="btn-edit-plant" 
                    onClick={()=>setIsModalVisible(!isModalVisible)}
                    >
                    Edit
                    <FiEdit style={{marginLeft: "10px"}}/>
                    </button>
                    
                </div>
                
            </div>
            <div className="heading-gateway-info">
                General Info
            </div>
            <div className="content-gateway-information">
                <div className="text-gateway-information">Code</div>
                <div className="values-gateway-information">
                    {itemGateway.code}
                </div>
            </div>
            <div className="content-gateway-information">
                <div className="text-gateway-information">Label</div>
                <div className="values-gateway-information">
                    {itemGateway.label}
                    {/* {plantInfo.systemSize  === null ? 'N/A' : `${plantInfo.systemSize} kWp` }  */}
                </div>
            </div>
            <div className="content-gateway-information">
                <div className="text-gateway-information">Access Token</div>
                <div className="values-gateway-information">
                    {itemGateway.accessToken}
                    </div>
            </div>
            <div className="content-gateway-information">
                <div className="text-gateway-information">Created Time</div>
                <div className="values-gateway-information">
                {itemGateway.createdTime}
                </div>
            </div>
            <div className="content-gateway-information">
                <div className="text-gateway-information">Location</div>
                <div className="values-gateway-information">
                  {itemGateway.location}
                </div>
            </div>
            <div className="content-gateway-information">
                <div className="text-gateway-information">Installtion Date</div>
                <div className="values-gateway-information">
                    {itemGateway.installtionDate}
                    </div>
            </div>
            <div className="content-gateway-information">
                <div className="text-gateway-information">model</div>
                <div className="values-gateway-information">
                    {itemGateway.model}
                    </div>
            </div>
            <div className="content-gateway-information">
                <div className="text-gateway-information">Serial Number</div>
                <div className="values-gateway-information">
                    {itemGateway.serialNumber}
                    </div>
            </div>
            <div className="heading-gateway-info">
            Connection Info
            </div>
            <div className="content-gateway-information">
                <div className="text-gateway-information">Active</div>
                <div className="values-gateway-information" style={{color:'#2194FF'}}>
                  {itemGateway.active ? 'True' : 'False'}
                </div>
            </div>
            <div className="content-gateway-information">
                <div className="text-gateway-information">Last Activity Time</div>
                <div className="values-gateway-information">
                    {itemGateway.lastActivityTime}
                    </div>
            </div>
            <div className="content-gateway-information">
                <div className="text-gateway-information">Last Connect Time</div>
                <div className="values-gateway-information">
                    {itemGateway.lastConnectTime}
                    </div>
            </div>
            <div className="content-gateway-information">
                <div className="text-gateway-information">Last Disconnect Time</div>
                <div className="values-gateway-information">
                    {itemGateway.lastDisconnectTime}
                    </div>
            </div>
            <div className="btn-back-list"
                onClick={()=>{
                    setGateWayId(true);
                    setGateWayInfo({});
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
            { gateWayId ? renderListOfGateWay() : renderGateWayInfo(gateWayInfo)}
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
    const {gatewayList, gatewaysList} =state.userManagementReducer
    return{
        gatewayList: gatewayList,
        gatewaysList: gatewaysList,
    }
}
  
const mapDispatchToProps = (dispatch) =>{
    return{
        restartItemGateway : () => dispatch(restartItemGatewayAction()),
        getItemGatewayInfo : (par) => dispatch(getItemGatewayInfoAction(par)),
        getGatewayList: (par) => dispatch(getGatewayListAction(par)),
    }
}
  
export default connect(mapStateToProps,mapDispatchToProps)(ListOfGateWay);
