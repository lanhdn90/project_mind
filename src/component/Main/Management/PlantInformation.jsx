import React,{useState} from 'react';
import {  FiEdit ,FiChevronLeft  } from "react-icons/fi";
import { Modal,  Form, Col, Row, Input, DatePicker, Popconfirm, Button} from 'antd';
import { connect } from 'react-redux';
import {
    getItemPlantInfoAction,
    deleteItemPlantAction,
} from '../../../redux/actions'
import moment from 'moment';
import Moment from 'react-moment';
function PlantInformation(props) {
    const [form] = Form.useForm();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const {
        setIsRestart,
        plantList,
        itemPlantInfo,
        getItemPlantInfo,
        plantId,
        setPlantId,
        deleteItemPlant,
    } = props

    const [itemPlant, setItemPlant] = useState({
        address: itemPlantInfo.address,
        azimuth: itemPlantInfo.azimuth ,
        children: itemPlantInfo.children ,
        code: itemPlantInfo.code,
        lat: itemPlantInfo.coordinantes ? itemPlantInfo.coordinantes.lat : null, 
        long: itemPlantInfo.coordinantes ? itemPlantInfo.coordinantes.long : null, 
        elevation: itemPlantInfo.elevation,
        id: itemPlantInfo.id,
        installation_date : moment(parseInt(itemPlantInfo.installation_date)),
        label: itemPlantInfo.label,
        system_size: itemPlantInfo.system_size,
        tilt: itemPlantInfo.tilt,
        type: itemPlantInfo.type,
    })
    const handleOk = (values) => {
        const plantEdit ={
            code: values.code,
            address: values.address,
            azimuth: values.azimuth,
            elevation: values.elevation,
            installation_date: values.installation_date,
            label: values.label,
            system_size: values.system_size,
            tilt: values.tilt,
            coordinantes: {lat: values.lat, long: values.long }
        }
        getItemPlantInfo(plantEdit);
        setIsModalVisible(false);
        form.resetFields();
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
        form.resetFields();
      };

    const  onDeleteItemPlant= async (id)=>{
        setPlantId(true);
        getItemPlantInfo({});
        await deleteItemPlant({id,plantList});
        setIsRestart(false);
    }
    return (
        <>
            <div className="header-plant-information">
                <div className="title-plant-information">
                    Plant information
                </div>
                <div className="btn-group">
                    {!plantId ?
                    <Popconfirm 
                        placement="bottomLeft"
                        title="Sure to delete?" 
                        onConfirm={() => onDeleteItemPlant(itemPlantInfo.id)}
                    >
                         <button className="btn-delete-plant">
                        Delete
                        </button>
                     </Popconfirm> 
                    : null}
                    <button className="btn-edit-plant" 
                    onClick={()=>setIsModalVisible(!isModalVisible)}
                    >
                    Edit
                    <FiEdit style={{marginLeft: "10px"}}/>
                    </button>
                    
                </div>
            </div>
            <div className="content-plant-information">
                <div className="text-plant-information">Code</div>
                <div className="values-plant-information">{itemPlantInfo.code}</div>
            </div>
            <div className="content-plant-information">
                <div className="text-plant-information">Name</div>
                <div className="values-plant-information">{itemPlantInfo.label}</div>
            </div>
            <div className="content-plant-information">
                <div className="text-plant-information">System Size</div>
                <div className="values-plant-information">
                    {itemPlantInfo.system_size  === null ? 'N/A' : `${itemPlantInfo.system_size} kWp` } 
                </div>
            </div>
            <div className="content-plant-information">
                <div className="text-plant-information">Install Date</div>
                <div className="values-plant-information">{
                    itemPlantInfo.installation_date ?
                    <Moment  format={"DD-MM-YYYY THH:mm:ss"}>
                    {parseInt(itemPlantInfo.installation_date)}
                    </Moment>
                    : `N/A`
                }
                    
                </div>
            </div>
            <div className="content-plant-information">
                <div className="text-plant-information">Azimuth</div>
                <div className="values-plant-information">
                    {itemPlantInfo.azimuth   ?  `${itemPlantInfo.azimuth} Degrees` : 'N/A' } 
                </div>
            </div>
            <div className="content-plant-information">
                <div className="text-plant-information">Tilt</div>
                <div className="values-plant-information">
                    {itemPlantInfo.tilt   ?  `${itemPlantInfo.tilt} Degrees` : 'N/A' } 
                </div>
            </div>
            <div className="content-plant-information">
                <div className="text-plant-information">Address</div>
                <div className="values-plant-information">{itemPlantInfo.address}</div>
            </div>
            <div className="content-plant-information">
                <div className="text-plant-information">Coordinates</div>
                <div className="values-plant-information">
                    <div className="Latitude">
                    Latitude: {itemPlantInfo.coordinantes ? `${itemPlantInfo.coordinantes.lat}` : `N/A`}
                    </div>
                    <div className="Longitude" style={{marginLeft: '40px'}}>
                    Longitude: {itemPlantInfo.coordinantes ? `${itemPlantInfo.coordinantes.long}` : `N/A`}
                    </div>
                </div>
            </div>
            <div className="content-plant-information">
                <div className="text-plant-information">Elevation</div>
                <div className="values-plant-information">
                    {itemPlantInfo.elevation   ? `${itemPlantInfo.elevation} m` : 'N/A'  } 
                </div>
            </div>
            {!plantId ? 
            <div className="btn-back-list"
                onClick={()=>{
                    setPlantId(true);
                    getItemPlantInfo({});
                }}
            >
                <FiChevronLeft 
                style={{marginRight: '5px'}}
                /> Back
            </div>
            : null}
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
                    initialValues={itemPlant}
                    layout="vertical"
                    hideRequiredMark
                    onFinish={(values) => handleOk(values)}
                    >
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                            name="code"
                            label="Code :"
                            rules={[
                                { required: true, message: 'Please enter Label' },
                                {
                                  pattern: /^(?:\d*)$/,
                                  message: "Value should contain just number",
                                },
                              ]}
                              validateTrigger="onBlur"
                            >
                            <Input
                             addonBefore="P"
                             maxLength={3}
                             placeholder="Please enter Code"
                              disabled
                             />
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
                            name="address"
                            label="Address"
                            rules={[{ required: true, message: 'Please enter your address' }]}
                            >
                            <Input placeholder="Please enter your address" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                            name="system_size"
                            label="System Size (kWp):"
                            rules={[{
                                pattern: /^(?:\d*)$/,
                                message: "Value should contain just number",
                              }]}
                            >
                            <Input placeholder="Please enter your System Size" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                            name="elevation"
                            label="Elevation (m):"
                            rules={[
                                {
                                    pattern: /^(?:\d*)$/,
                                    message: "Value should contain just number",
                                }
                            ]}
                            >
                            <Input placeholder="please enter Elevation" />
                            </Form.Item>
                        </Col>
                    </Row>
                    
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                            name="azimuth"
                            label="Azimuth (Degrees):"
                            rules={[{
                                pattern: /^(?:\d*)$/,
                                message: "Value should contain just number",
                              }]}
                            >
                            <Input placeholder="Please enter Azimuth" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                            name="tilt"
                            label="Tilt (Degrees):"
                            rules={[{
                                pattern: /^(?:\d*)$/,
                                message: "Value should contain just number",
                              }]}
                            >
                            <Input placeholder="Please enter Tilt" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                            name="lat"
                            label="Latitude"
                            rules={[
                                {
                                    pattern: /^(?:\d*)$/,
                                    message: "Value should contain just number",
                                }
                            ]}
                            >
                            <Input
                             placeholder="please enter Latitude" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                            name="long"
                            label="Longitude"
                            rules={[
                                {
                                    pattern: /^(?:\d*)$/,
                                    message: "Value should contain just number",
                                  }
                            ]}
                            >
                            <Input
                            placeholder="please enter Longitude" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        
                        <Col span={12}>
                            <Form.Item
                            name="installation_date"
                            label="Install Date"
                            >
                            <DatePicker
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                }}
                            />
                            
                            </Form.Item>
                        </Col>
                        
                    </Row>
                </Form>
            </Modal>
        </>
    );
}
const mapStateToProps = (state) =>{
    const {itemPlantInfo} =state.userManagementReducer
    const {plantList} =state.dashboardHome
    return{
        itemPlantInfo: itemPlantInfo,
        plantList:plantList
    }
}
  
    const mapDispatchToProps = (dispatch) =>{
        return{
            getItemPlantInfo: (par) => dispatch(getItemPlantInfoAction(par)),
            deleteItemPlant: (par) => dispatch(deleteItemPlantAction(par)),
        }
    }
  
export default connect(mapStateToProps,mapDispatchToProps)(PlantInformation);
