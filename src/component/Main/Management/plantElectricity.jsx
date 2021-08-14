import React, {useState} from 'react';
import { InputNumber, DatePicker, Select, Form, Row, Input, Col } from 'antd';

function PlantElectricity(props) {
    
    const [form] = Form.useForm();
    const { Option } = Select;
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [electricity, setElectricity] = useState(
        {
            currencyUnit: 'VND',
            currency: 1.938

        });
    const unitList = ['VND','USA']
    const [valuesUnit, setValuesUnit] = useState(electricity.currencyUnit)
    
    const onSelectChange = value => {
        setValuesUnit( value);
    };

    const handleSubmit =(value)=> {
        console.log("🚀 ~ file: plantElectricity.jsx ~ line 10 ~ handleSubmit ~ value", value)
        setElectricity(value);
        setIsModalVisible(false)
    }

    return (
        <>
        <div className="header-plant-information">
            <div className="title-plant-information">
                Electricity Cost
            </div>
            <div className="group-btn-performance">
                <button 
                    onClick={() => {
                        form.resetFields();
                        setIsModalVisible(false);
                    }}
                    style={{ 
                    marginRight: '20px',
                    width: '80px',
                    height: '30px',
                    textAlign: 'center',
                    border: '1px solid gray',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    fontWeight: 600,
                    fontSize: "15px",
                    visibility: isModalVisible ? 'visible' : 'hidden'
                }}
                >
                Cancel
                </button>
                <button 
                    disabled={!isModalVisible ? true : false}
                    className="btn-edit-plant"
                    onClick={()=>form.submit()}
                >
                    Save
                </button>
            </div>
        </div>
        <div className="main-performance-item-plant">
            <div className="content-performance">
                <Form
                    form={form}
                    initialValues={electricity}
                    layout="vertical"
                    hideRequiredMark
                    onValuesChange={()=>setIsModalVisible(true)}
                    onFinish={(values) => handleSubmit(values)}
                    >
                    <Row gutter={16}>
                        <Col span={4}>
                            <Form.Item
                                    name='currencyUnit'
                                    label="Đơn vị"
                                >
                                    <Select
                                        defaultValue={valuesUnit}
                                        style={{ textAlign: 'center'}}
                                        onChange={onSelectChange}>
                                        {unitList.map((item, index) => (
                                        <Option key={index} value={item}>{item}</Option>
                                        ))}
                                    </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item
                            name="currency"
                            label='Giá điện cấp vào lưới ( VND/kWh)'
                            rules={[{ required: true, message: 'Please enter your inverter name' }]}
                            >
                            <InputNumber 
                            style={{width: '250px'}} 
                            placeholder="Please enter your inverter name" />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </div>          
        </div>
    </>
    );
}

export default PlantElectricity;