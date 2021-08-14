import React,{useState} from 'react';
import { FiPlus, FiEdit ,FiChevronLeft ,FiSettings } from "react-icons/fi";
import { Modal,  Pagination, DatePicker, Form, Col, Row, Input,Badge} from 'antd';
import {  FaSearch} from "react-icons/fa";
// import { FiEdit } from "react-icons/fi";
import PlantItem from '../Management/PlantInformation'
function PlantDevices(props) {
    const [form] = Form.useForm();
    const [isModalVisible, setIsModalVisible] = useState(false);
    // const {plantInfo, setPlantInfo} = props
    
    const [devicesList, setDevicesList] = useState([
        {
            code: 'G00',
            label: 'Devices 01',
            accessToken: 'KJSdhkrh23krjdf',
            createdTime: '2021-08-01 08:30:23',
            location: 'Tang 4, 377 Nguyen Van Linh',
            installtionDate: '2021-08-01',
            model: 'ECU1051',
            serialNumber: 'SXXXXXXX',
            active: true,
            lastActivityTime: '2021-08-01 08:30:23',
            lastConnectTime: '2021-08-01 08:30:23',
            lastDisconnectTime: '2021-08-01 08:30:23',
        },
        {
            code: 'G01',
            label: 'Devices 02',
            accessToken: 'KJSdhkrh23krjdf',
            createdTime: '2021-08-01 08:30:23',
            location: 'Tang 4, 377 Nguyen Van Linh',
            installtionDate: '2021-08-01',
            model: 'ECU1051',
            serialNumber: 'SXXXXXXX',
            active: true,
            lastActivityTime: '2021-08-01 08:30:23',
            lastConnectTime: '2021-08-01 08:30:23',
            lastDisconnectTime: '2021-08-01 08:30:23',
        },
        {
            code: 'G02',
            label: 'Devices 03',
            accessToken: 'KJSdhkrh23krjdf',
            createdTime: '2021-08-01 08:30:23',
            location: 'Tang 4, 377 Nguyen Van Linh',
            installtionDate: '2021-08-01',
            model: 'ECU1051',
            serialNumber: 'SXXXXXXX',
            active: false,
            lastActivityTime: '2021-08-01 08:30:23',
            lastConnectTime: '2021-08-01 08:30:23',
            lastDisconnectTime: '2021-08-01 08:30:23',
        },
        {
            code: 'G03',
            label: 'Devices 04',
            accessToken: 'KJSdhkrh23krjdf',
            createdTime: '2021-08-01 08:30:23',
            location: 'Tang 4, 377 Nguyen Van Linh',
            installtionDate: '2021-08-01',
            model: 'ECU1051',
            serialNumber: 'SXXXXXXX',
            active: true,
            lastActivityTime: '2021-08-01 08:30:23',
            lastConnectTime: '2021-08-01 08:30:23',
            lastDisconnectTime: '2021-08-01 08:30:23',
        },
        {
            code: 'G04',
            label: 'Devices 05',
            accessToken: 'KJSdhkrh23krjdf',
            createdTime: '2021-08-01 08:30:23',
            location: 'Tang 4, 377 Nguyen Van Linh',
            installtionDate: '2021-08-01',
            model: 'ECU1051',
            serialNumber: 'SXXXXXXX',
            active: false,
            lastActivityTime: '2021-08-01 08:30:23',
            lastConnectTime: '2021-08-01 08:30:23',
            lastDisconnectTime: '2021-08-01 08:30:23',
        },
    ])

    const handleOk = (values) => {
        let  list = devicesList;
        list.pop();
        const itemPlant ={
            code: values.code,
            label: values.label,
            location: values.location,
            // installtionDate: '2021-08-01',
            model: values.model,
            serialNumber: values.serialNumber,
            active: true,
            lastActivityTime: '2021-08-01 08:30:23',
        }
        setDevicesList([itemPlant, ...list]);
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

    const [devicesId, setDevicesId] = useState(true);
    const [devicesInfo, setDevicesInfo] = useState({})

    const renderItemDevicesListAll  = (item) =>(
        <div onClick={()=>{
            setDevicesId(false);
            setDevicesInfo(item);
        }}  className="item-devices-listAll">
            {/* <div className="hover-item-devices"></div> */}
            <div className="code-devices-item">
                {item.code}
            </div> 
            <div className="label-devices-item">
                {item.label}
            </div>
            <div className="model-devices-item">
                {item.model}
            </div>
            <div className={`status-devices-item ${item.active ? 'active' : 'inactive' } `}>
                {item.active ? 'active' : 'inactive'}
            </div>
            <div className="devices-activity-time">
                {item.lastActivityTime}
            </div>
        </div>
    );

    const renderListOfDevices = () =>(
        <>
        <div className="header-plant-information">
                <div className="title-plant-information">
                    Devices
                </div>
            </div>
            <div className="main-gateway">
                <div className="search-gateway">
                    <Input
                        onChange={onChangeValue}
                        size="large" 
                        placeholder="Search devices" prefix={<FaSearch />} />
                    <FiPlus onClick={()=>setIsModalVisible(!isModalVisible)} style={{marginLeft: "10px", fontSize:'20px', cursor:'pointer' }}/>
                </div>
                <div className="list-devices">
                    <div className="header-list-devices">
                        <div className="header-code">CODE</div>
                        <div className="header-label">LABEL</div>
                        <div className="header-model">MODEL</div>
                        <div className="header-statusDevices">STATUS</div>
                        <div className="header-lastActivityTime">LAST ACTIVITY TIME</div>
                    </div>
                    {devicesList.map((item)=>(
                        renderItemDevicesListAll(item)
                    ))}
                </div>
                <div className="footer-plant-list">
                <Pagination size="small" defaultCurrent={1} total={50} />
                </div>
            </div>
        </>
    )
    
    const renderDevicesInfo = (itemDevices)=>(
        <>
            <div className="header-gateway-information">
                <div className="title-plant-information">
                    Devices  Information
                </div>
                <div className="btn-group">
                    <button className="btn-delete-plant"
                    onClick={()=>setIsModalVisible(!isModalVisible)}
                    >
                    Delete
                    {/* <FiEdit style={{marginLeft: "10px"}}/> */}
                    </button>
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
                    {itemDevices.code}
                </div>
            </div>
            <div className="content-gateway-information">
                <div className="text-gateway-information">Label</div>
                <div className="values-gateway-information">
                    {itemDevices.label}
                    {/* {plantInfo.systemSize  === null ? 'N/A' : `${plantInfo.systemSize} kWp` }  */}
                </div>
            </div>
            <div className="content-gateway-information">
                <div className="text-gateway-information">Model</div>
                <div className="values-gateway-information">
                    {itemDevices.model}
                    </div>
            </div>
            <div className="content-gateway-information">
                <div className="text-gateway-information">Serial Number</div>
                <div className="values-gateway-information">
                    {itemDevices.serialNumber}
                    </div>
            </div>  
            <div className="content-gateway-information">
                <div className="text-gateway-information">Installtion Date</div>
                <div className="values-gateway-information">
                    {itemDevices.installtionDate}
                    </div>
            </div>
            <div className="content-gateway-information">
                <div className="text-gateway-information">Created Time</div>
                <div className="values-gateway-information">
                {itemDevices.createdTime}
                </div>
            </div>
            <div className="content-gateway-information">
                <div className="text-gateway-information">GateWay</div>
                <div className="values-devices-information">
                  {itemDevices.location}
                </div>
            </div>
            
            <div className="heading-gateway-info">
            Connection Info
            </div>
            <div className="content-gateway-information">
                <div className="text-gateway-information">Active</div>
                <div className="values-gateway-information" style={{color:'#2194FF'}}>
                  {itemDevices.active ? 'Active' : 'InActive    '}
                </div>
            </div>
            <div className="content-gateway-information">
                <div className="text-gateway-information">Last Activity Time</div>
                <div className="values-gateway-information">
                    {itemDevices.lastActivityTime}
                    </div>
            </div>
            <div className="content-gateway-information">
                <div className="text-gateway-information">Last Connect Time</div>
                <div className="values-gateway-information">
                    {itemDevices.lastConnectTime}
                    </div>
            </div>
            <div className="content-gateway-information">
                <div className="text-gateway-information">Last Disconnect Time</div>
                <div className="values-gateway-information">
                    {itemDevices.lastDisconnectTime}
                    </div>
            </div>
            <div className="btn-back-list"
                onClick={()=>{
                    setDevicesId(true);
                    setDevicesInfo({});
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
            { devicesId ? renderListOfDevices() : renderDevicesInfo(devicesInfo)}
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

export default PlantDevices;