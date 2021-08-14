import React, {useState, useRef, useEffect} from 'react';
import { InputNumber, DatePicker, Select, Form, Row, Col, Button,notification } from 'antd';
function PlantPerformance(props) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isShowComponent, setIsShowComponent] = useState(true);
    const testUseRef =  useRef(true)
    const [form] = Form.useForm();
    const [formOne] = Form.useForm();
    const [state, setState] = useState(true);
    const { Option } = Select;
    const [selectedFile, setSelectedFile] = useState(null)

    const [temperature, setTemperature] = useState({
        constant: 0.9,
        module: 0.9
    });

    const [monthly , setmonthly ] = useState({
        Jan: 0.9,
        Feb: null,
        Mar: 0.9,
        Apr: 0.9,
        May: 0.9,
        Jun: 0.9,
        Jul: 0.9,
        Aug: null,
        Sep: 0.9,
        Otc: null,
        Nov: null,
        Dec: null,
        timeInterval: 'Since',
        constant: 0.9,
        module: 0.9,
    });
    const unitList = ['VND','USA']
    const [valuesUnit, setValuesUnit] = useState(monthly.timeInterval)

    useEffect(() => {
        if(selectedFile !== null)
        openNotification();
        setSelectedFile(null ); 
      }, [selectedFile])
    
    const onSelectChange = value => {
        setValuesUnit( value);
    };

    const setTestForm = (changedValues, allValues) =>{
    console.log("🚀 ~ file: plantPerformance.jsx ~ line 44 ~ setTestForm ~ changedValues", changedValues)
        
    }

    const handleSubmit =(val)=> {
        setmonthly({...monthly, ...val})
        setIsModalVisible(false);
      }


    const onFileChange = event => { 
    setSelectedFile( event.target.files[0] ); 
    }; 
     
    const openNotification = (selectedFile) => {
        const key = `open${Date.now()}`;
        const name = (fileData());
        const btn = (
            <Button type="primary" size="small" onClick={() => {
            notification.close(key);
            onFileUpload();
                }
            }>
            Confirm
            </Button>
        );
        notification.open({
            message: name,
            description:
            'Bạn có chắc import file này',
            btn,
            key,
        });
    };


    const onFileUpload = () => { 
    const formData = new FormData(); 
    formData.append( 
        "myFile", 
        selectedFile, 
        selectedFile.name 
    ); 
    console.log(selectedFile); 
    // axios.post("api/uploadfile", formData); 
    }; 
    
    const fileData = () => {
    return ( 
        <div> 
            <p>File Name: {selectedFile.name}</p> 
        </div> 
    );  
    }; 

    const renderMonthly = ()=>(
        <div className="content-performance">
            <div className='title-irradiance-performance'>
                <p>Algorithm Configuration</p>
                <label for="upload-photo">Import File</label>
                <input 
                    type="file" 
                    id="upload-photo" 
                    hidden 
                    onChange={onFileChange}
                 /> 

            </div>
            <Form
            form={form}
            initialValues={monthly}
            layout="horizontal"
            hideRequiredMark
            onValuesChange={()=>setIsModalVisible(true)}
            onFinish={(values) => handleSubmit(values)}
            >
            <Row gutter={16}>
                <Col span={8}>
                    <Form.Item
                    name="Jan"
                    label='January'
                    >
                    <InputNumber className='input-number'/>
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item
                    name="May"
                    label='May'
                    >
                    <InputNumber className='input-number' />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item
                    name="Sep"
                    label='September'
                    >
                    <InputNumber className='input-number' />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={8}>
                    <Form.Item
                    name="Feb"
                    label='February'
                    >
                    <InputNumber className='input-number' />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item
                    name="Jun"
                    label='June'
                    >
                    <InputNumber className='input-number' />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item
                    name="Otc"
                    label='October'
                    >
                    <InputNumber className='input-number' />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={8}>
                    <Form.Item
                    name="Mar"
                    label='March'
                    >
                    <InputNumber className='input-number'  />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item
                    name="Jul"
                    label='July'
                    >
                    <InputNumber  className='input-number'/>
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item
                    name="Nov"
                    label='November'
                    >
                    <InputNumber className='input-number' />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={8}>
                    <Form.Item
                    name="Apr"
                    label='April'
                    >
                    <InputNumber className='input-number' />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item
                    name="Aug"
                    label='August'
                    >
                    <InputNumber className='input-number'  />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item
                    name="Dec"
                    label='December'
                    >
                    <InputNumber className='input-number'  />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                    <Col span={10}>
                        <Form.Item
                                name='timeInterval'
                                label="Time Interval"
                            >
                                <Select
                                    defaultValue={valuesUnit}
                                    style={{width: 140, textAlign: 'center'}}
                                    onChange={onSelectChange}>
                                    {unitList.map((item, index) => (
                                    <Option key={index} value={item}>{item}</Option>
                                    ))}
                                </Select>
                        </Form.Item>
                    </Col>
                </Row>
        </Form>
        </div>   
    );

    
    const renderTemperature = () =>(
        <div className="content-performance">
            <div className='title-irradiance-performance'>
                Algorithm Configuration
            </div>
            <Form
            form={form}
            initialValues={monthly}
            layout="horizontal"
            hideRequiredMark
            onValuesChange={()=>setIsModalVisible(true)}
            onFinish={(values) => handleSubmit(values)}
            >
            <Row gutter={16}>
                <Col span={17}>
                    <Form.Item
                    name="constant"
                    label='Derating Constant'
                    >
                    <InputNumber  />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={17}>
                    <Form.Item
                    name="module"
                    label='Module Temperature Coefficient of Power'
                    >
                    <InputNumber  />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={19}>
                    <Form.Item
                    // name="Jan"
                    label='Time Interval'
                    >
                        <DatePicker
                        style={{width:'152px'}}
                    // format={customFormat}
                    />
                    </Form.Item>
                </Col>
            </Row>
        </Form>
        </div>    
    );

    return (
        <>
            <div className="header-plant-information">
                <div className="title-plant-information">
                    Performance
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
                <div className="btn-title-performance">
                    <div
                        onClick={()=>{
                            setIsShowComponent(true);
                            testUseRef.current = true;
                            setIsModalVisible(false);
                            form.resetFields();
                    }}
                        className={`btn-performance ${isShowComponent ? 'irradiance' : ''}`}
                    >
                        Irradiance/ Temperature Output
                        
                    </div>
                    <div
                        onClick={()=>{
                            testUseRef.current = false;
                            setIsShowComponent(false);
                            setIsModalVisible(false);
                            form.resetFields();
                        }}
                        className={`btn-performance ${!isShowComponent ? 'monthly' : ''}`}
                    >
                        Monthly Output
                    </div>
                </div>
                    {isShowComponent ? renderTemperature() : renderMonthly()}
            </div>
        </>
    );
}

export default PlantPerformance;