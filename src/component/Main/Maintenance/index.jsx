import React, {useState} from 'react';
import './style.css';
import { GrAddCircle } from "react-icons/gr";
import { DatePicker ,Table } from 'antd';
import { Modal, Checkbox,  Pagination, Form, Col, Row, Input,Badge} from 'antd';
import { FiAlertCircle } from "react-icons/fi";
import moment from 'moment';
function Maintenance(props) {
    const [form] = Form.useForm();
    const [maintenanceInfo, setMaintenanceInfo] = useState(false);
    const monthFormat = 'MM/YYYY';
    const [isModalVisible, setIsModalVisible] = useState(false);

    function onChange(date, dateString) {
        console.log(date, dateString);
    }

    function onChangeCheckBox(checkedValues) {
        console.log('checked = ', checkedValues);
      }

    const [data, setData] = useState([
        {
            time: "26-05-2021 18:42:51",
            title: "Đo dòng",
            note: "Đo dòng",
            content: null,
            person: null,
            status: true,
            timeFinish: "27-05-2021 8:42:51",
        },
        {
            time: "26-05-2021 18:42:51",
            title: "Đo dòng",
            note: "Đo dòng",
            content: null,
            person: null,
            status: true,
            timeFinish: "27-05-2021 8:42:51",
        },
        {
            time: "26-05-2021 18:42:51",
            title: "Đo dòng",
            note: "Đo dòng",
            content: null,
            person: null,
            status: true,
            timeFinish: "27-05-2021 8:42:51",
        },
        {
            time: "26-05-2021 18:42:51",
            title: "Đo dòng",
            note: "Đo dòng",
            content: null,
            person: null,
            status: true,
            timeFinish: "27-05-2021 8:42:51",
        },
        {
            time: "26-05-2021 18:42:51",
            title: "Đo dòng",
            note: "Đo dòng",
            content: null,
            person: null,
            status: true,
            timeFinish: "27-05-2021 8:42:51",
        },
        {
            time: "26-05-2021 18:42:51",
            title: "Đo dòng",
            note: "Đo dòng",
            content: null,
            person: null,
            status: true,
            timeFinish: "27-05-2021 8:42:51",
        },
        {
            time: "26-05-2021 18:42:51",
            title: "Đo dòng",
            note: "Đo dòng",
            content: null,
            person: null,
            status: true,
            timeFinish: "27-05-2021 8:42:51",
        },

    ])

    const columns = [
        {
          title: 'Thời gian',
          dataIndex: 'time',
        //   render: (text) => <a>{text}</a>,
        },
        {
          title: 'Tiêu đề',
          dataIndex: 'title',
        },
        {
          title: 'Nội dung Bảo trì',
          dataIndex: 'note',
        },
        {
            title: 'Ghi chú',
            dataIndex: 'content',
          //   render: (text) => <a>{text}</a>,
          },
          {
            title: 'Người phụ trách',
            dataIndex: 'person',
          },
          {
            title: 'Nội dung Bảo trì',
            dataIndex: 'timeFinish',
          },
      ];
    
      const handleOk = (values) => {

        setIsModalVisible(false);
        form.resetFields();
      };
    
    const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
    };


    function onChangeDatePicker(value, dateString) {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
      }
      
      function onOkDatePicker(value) {
        console.log('onOk: ', value);
      }

    return (
        <div className="main-maintenance-plant">
            <div className="header-maintenance-info">
                <div className="title-maintenance-info">
                    <div>Lịch bảo trì hiện tại</div>
                    {maintenanceInfo ?
                     <div 
                     onClick={()=>setIsModalVisible(true)}
                     className="details-maintenance">
                     chi tiết
                     <FiAlertCircle style={{
                         marginLeft: '10px',
                         fontSize: "20px"
                     }}/>
                    </div>
                     : null
                     }
                    
                </div>
                <div className="content-maintenance-info">
                    {!maintenanceInfo ?
                     <div 
                        onClick={()=>setIsModalVisible(true)}
                     className="btn-maintenance">
                        <GrAddCircle
                            style={{
                                marginRight: '5px',
                                fontSize: '20px'  
                            }}
                        />
                        Tạo lịch bảo trì
                     </div>
                     : 'Hi'
                     }
                </div>
            </div>
            <div className="content-maintenance-list">
                <div className="header-maintenance-list">
                    <div className="title-maintenance-list">
                        Lịch bảo trì
                    </div>
                    
                    <div className="title-maintenance-list">
                        <DatePicker 
                        onChange={onChange}
                        defaultValue={moment('01/2015', monthFormat)} 
                        format={monthFormat} picker="month" />
                    </div>
                </div>
                <Table
                    columns={columns}
                    dataSource={data}
                />
            </div>
            <Modal 
                visible={isModalVisible}
                title={
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '18px',
                        fontWeight: 'bold'
                    }}>
                        Đặt lịch bảo trì
                    </div>
                }
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
                // layout="vertical"
                onFinish={(values) => handleOk(values)}
                >
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item
                        
                        name="code"
                        label="Tiêu đề :"
                        rules={[{ required: true, message: 'Please enter Code' }]}
                        >
                        <Input className='input-maintenance' placeholder="Please enter Code" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                        name="location"
                        label="Chọn thời gian : "
                        rules={[{ required: true, message: 'Please enter Code' }]}

                        >
                            <DatePicker style={{
                                width: '210px',
                            }}
                            showTime onChange={onChangeDatePicker} onOk={onOkDatePicker}
                            /> 
                        </Form.Item>
                    </Col>
                    
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item
                        name="model"
                        label="Model :"
                        rules={[{ required: true, message: 'Please enter model' }]}
                        >
                        <Checkbox.Group style={{ 
                            width: '100%',
                            paddingTop: '8px', 
                            paddingLeft: "60px",
                            // backgroundColor: 'red'
                        }} onChange={onChangeCheckBox}>
                            <Row>
                                <Col span={24}>
                                    <Checkbox value="A">Đo dòng, áp của chuỗi pin</Checkbox>
                                </Col>
                                <Col span={24}>
                                    <Checkbox value="B">Quét nhiệt tủ DC, AC, và đầu MC4</Checkbox>
                                </Col>
                                <Col span={24}>
                                    <Checkbox value="C">Kiểm tra nhiệt độ, tình hình tấm pin bằng Flycam</Checkbox>
                                </Col>
                                <Col span={24}>
                                    <Checkbox value="D">Đo điện trở tiếp địa</Checkbox>
                                </Col>
                                <Col span={24}>
                                    <Checkbox value="E">Đo điện trở cách điện Ac và chuỗi oin</Checkbox>
                                </Col>
                                <Col span={24}>
                                    <Checkbox value="F">Đo I-V</Checkbox>
                                </Col>
                                <Col span={24}>
                                    <Checkbox value="G">Lau tấm pin, kiểm tra dầu hệ thông, quét bụi bên
                                        trong sửa chữa hỏng hóc nhỏ của hệ thống khung giàn đỡ tấm pin
                                    </Checkbox>
                                </Col>
                            </Row>
                        </Checkbox.Group>
                        </Form.Item>
                    </Col>
                </Row>
                
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item
                        name="installDate"
                        label="Ghi chú:"
                        >
                         <Input.TextArea  className='input-maintenance'/>
                        </Form.Item>
                    </Col> 
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item
                        name="person"
                        label="Người phụ trách"
                        >
                         <Input className='input-maintenance' placeholder="Please enter Code" />
                        </Form.Item>
                    </Col> 
                </Row>
            </Form>
        </Modal>
        </div>
        
    );
}

export default Maintenance;