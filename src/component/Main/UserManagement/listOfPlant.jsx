import React,{useState} from 'react';
import { FiPlus } from "react-icons/fi";
import { Modal,  Pagination, DatePicker, Form, Col, Row, Input} from 'antd';
import {  FaSearch} from "react-icons/fa";
import ItemPlantListAll from './ItemPlantListAll';
import PlantItem from '../Management/PlantInformation'
import { connect } from 'react-redux';
import {
    SetItemPlantAction,
} from '../../../redux/actions';
import moment from 'moment';
function ListOfGateWay(props) {
    const {
        pagePlant,
        setIsRestart,
        setPagePlant,

        itemPlantList, 
        SetItemPlant,
        plantList,
    }=props;
    const [form] = Form.useForm();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [plantId, setPlantId] = useState(true);
    const dateFormat = 'YYYY/MM/DD';
    const today = new Date();

    const handleOk = (values) => {
        
        const itemPlant ={
            code: `P${values.code}`,
            address: values.address,
            azimuth: parseInt(values.azimuth),
            elevation: parseInt(values.elevation),
            installation_date: new Date(values.installation_date).getTime(),
            label: values.label,
            system_size: parseInt(values.system_size),  
            tilt: parseInt(values.tilt),
            coordinantes: {lat: parseInt(values.lat), long: parseInt(values.long) }
        }

        SetItemPlant(itemPlant);
        setIsRestart(false);
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
        setPagePlant(page -1);
        setIsRestart(false);
    }

    const renderListOfGateWay = () =>(
        <>
        <div className="header-plant-information">
                <div className="title-plant-information">
                    List of Plant
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
                        <div className="header-code">CODE</div>
                        <div className="header-label">LABEL</div>
                        <div className="header-systemSize">SYSTEM SIZE</div>
                        <div className="header-lastActivityTime">INSTALLED DATE</div>
                    </div>
                    {itemPlantList.map((item)=>(
                        <ItemPlantListAll
                            item={item}
                            setPlantId={setPlantId}
                        />
                    ))}
                </div>
                <div className="footer-plant-list">
                <Pagination 
                size="small" 
                defaultCurrent={pagePlant + 1} 
                total={plantList.length}
                pageSize={5}
                onChange={onChangePage}
                 />
                </div>
            </div>
        </>
    )
    


    return (
        <>
            { plantId ?
             renderListOfGateWay() : 
             <PlantItem
             plantId={plantId}
             setPlantId={setPlantId}
             setIsRestart={setIsRestart}
             />}
            <Modal 
            visible={isModalVisible}
            // title={
            //     <div
            //     style={{                    
            //         display: 'flex',
            //         justifyContent: 'center',
            //         alignItems: 'center',
            //         height: "30px",
            //         fontSize: "20PX",
            //         fontWeight: 'bold',
            //         color: 'rgb(24, 144, 255)',
            //     }}
            //     >
            //         CREATE PLANT
            //     </div>
            // } 
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
                    addonBefore="P"
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
                             maxLength={4}
                             placeholder="Please enter Code"

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
                            rules={[{ required: true, message: 'Please enter Install Date' }]}
                            >
                            <DatePicker
                                // defaultValue={moment(today, dateFormat)} format={dateFormat}
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
    const {itemPlantList} =state.userManagementReducer
    const {plantList} =state.dashboardHome
    return{
        itemPlantList: itemPlantList,
        plantList: plantList,
    }
}
  
const mapDispatchToProps = (dispatch) =>{
  return{
    SetItemPlant: (par) => dispatch(SetItemPlantAction(par)),

  }
}
  
export default connect(mapStateToProps,mapDispatchToProps)(ListOfGateWay);

