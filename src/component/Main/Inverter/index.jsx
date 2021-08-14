import React, {useEffect} from 'react';
import { FcOk, FcApproval, FcEngineering, FcBullish } from "react-icons/fc";
import { Collapse, Select, List,Button, DatePicker  } from 'antd';
import { CaretRightOutlined  } from '@ant-design/icons';
import {
    LineChart ,
    Legend, 
    Label , 
    Line ,
    XAxis, 
    YAxis, 
    CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
    import { connect } from 'react-redux';
import {
  setValueNavAction,

} from '../../../redux/actions'
import "./style.css"
function Inverter(props) {
    const {setValueNav, match}=props;
    useEffect(() => {
        setValueNav(1)
        console.log("🚀 ~ file: index.jsx ~ line 5 ~ Plant ~ match", match)
    }, [])

    const { Panel } = Collapse;
    const { Option } = Select;


    const data = [{
        DC: 'PV1',
        Voltage: 603.20,
        Current: 1.6,
        Power: 1000.00
        },
        {DC: 'PV2',
        Voltage: 603.20,
        Current: 1.6,
        Power: 1000.00
        },
        {DC: 'PV3',
        Voltage: 603.20,
        Current: 1.6,
        Power: 1000.00
        },
        {DC: 'PV4',
        Voltage: 603.20,
        Current: 1.6,
        Power: 1000.00
        },
        {DC: 'PV5',
        Voltage: 603.20,
        Current: 1.6,
        Power: 1000.00
        }
    ];

    const dataOne = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 80,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 70,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 25,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 70,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 60,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 50,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 40,
        },
      ];
    
    const renderHeaderTable = ()=>(
        <div style={{display: 'flex', fontWeight: '100'}}>
            <div style={{width: '40%',paddingLeft: '22px', }}>DC</div>
            <div style={{width: '20%',}}>Voltage</div>
            <div style={{width: '20%', }}>Current (A)</div>
            <div style={{width: '20%'}}>Power (W)</div>
        </div>
    );

    const renderProduction = () =>(
        <div className="production-info">
            <div className="table-production">
                <div className="heading-table-production">
                    <div>
                        Thông tin chuỗi pin (PV)
                    </div>
                    <Select defaultValue="lucy" style={{ width: 150 }} bordered={false}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Sort by: Newest</Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                </div>
                <div className="main-table-production">
                <List
                size="large"
                header={renderHeaderTable()}
                pagination={{
                    onChange: page => {
                      console.log(page);
                    },
                    pageSize: 5,
                  }}
                dataSource={data}
                renderItem={item => <List.Item key={item.DC}>
                    <div style={{display: 'flex', fontWeight: '100', width: '100%'}}>
                        <div style={{width: '39%',}}>{item.DC}</div>
                        <div style={{width: '23%', }}>{item.Voltage}</div>
                        <div style={{width: '21%',}}>{item.Current}</div>
                        <div style={{width: '17%', display:'flex', justifyContent:'space-between'}}>{item.Power}
                        <FcBullish style={{fontSize: '20px'}}/>
                        </div>
                    </div>
                    </List.Item>}
                />
                </div>
            </div>
            <div className="table-production">
            <div className="heading-table-production">
                    <div>
                        Thông tin MPPT
                    </div>
                    <Select defaultValue="lucy" style={{ width: 150 }} bordered={false}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Sort by: Newest</Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                </div>
                <div className="main-table-production">
                <List
                size="large"
                header={renderHeaderTable()}
                pagination={{
                    onChange: page => {
                      console.log(page);
                    },
                    pageSize: 5,
                  }}
                dataSource={data}
                renderItem={item => <List.Item key={item.DC}>
                    <div style={{display: 'flex', fontWeight: '100', width: '100%'}}>
                        <div style={{width: '39%',}}>{item.DC}</div>
                        <div style={{width: '23%', }}>{item.Voltage}</div>
                        <div style={{width: '21%',}}>{item.Current}</div>
                        <div style={{width: '17%', display:'flex', justifyContent:'space-between'}}>{item.Power}
                        <FcBullish style={{fontSize: '20px'}}/>
                        </div>
                        
                    </div>
                    </List.Item>}
                />
                </div>
            </div>
        </div>
    );

    const renderDevice =()=>(
        <div className="chart-device-one">
                    <div className="header-chart"
                        style={{
                            height: '60px',
                            width: "100%",
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: "0 20px",
                            borderBottom: '1px solid #EAEAEA'
                    }}
                    >
                        <DatePicker  picker='date' />
                        <div>
                        <Select defaultValue="lucy" style={{ width: 150 }} bordered={false}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">DC Voltage PV1</Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                        <Button>CSV</Button>
                        </div>
                    </div>
                    <ResponsiveContainer width="100%" height="90%">
                        <LineChart  
                        width={500}
                        height={400}
                        data={dataOne}
                        margin={{
                            top: 30,
                            right: 70,
                            left: 10,
                            bottom: 10,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name">
                        <Label value="Time" offset={30} position='right'/>
                        </XAxis>
                        <YAxis >
                        <Label value="V" offset={20} position="top" />
                        </YAxis>
                        
                        <Tooltip />
                        <Legend verticalAlign="top" height={36}/>
                        <Line
                        type="monotone" 
                        dataKey="amt" 
                        stroke="#2dd348" 
                        >
                        </Line>
                        </LineChart  >
                    </ResponsiveContainer>
                </div>
    );

    return (
        <>
        <div className="header-container-inverter">
            <div className="inverter-information">
                <div className="name-inverter">
                    Inverter No.11
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '10px'
                }}>
                    <div className="name-plant" style={{marginRight: '20px'}}>
                        Tên trạm điện: Nguyễn Văn Linh
                    </div>
                    <div className="model-inverter">
                        Ký hiệu thiết bị: 5167755236464212
                    </div>
                </div>
                <div className="details-inverter">
                    <div className="header-details-inverter">
                        <div className="details-inverter-info">
                            <div style={{
                                display: 'flex',
                                justifyContent:'flex-start',
                                alignItems: 'center',
                                height: '30px',
                                fontWeight: 600
                            }}>
                                <FcOk style={{
                                    fontSize: '20px',
                                    marginRight: '10px'
                                }}/> Inverter No.11
                            </div>
                            <div >
                                <div style={{
                                    display: 'flex',
                                    width : '100%',
                                    marginBottom: '10px'
                                }}>
                                    <div style={{
                                    width : '45%',
                                    }}>ID:</div>  
                                    <div
                                        style={{
                                            width: '55%',
                                            display: 'block',
                                            whiteSpace: "nowrap", 
                                            overflow: "hidden",
                                            textOverflow:'ellipsis'}}
                                    >2021/07/12 16:21:12 ICT</div>   
                                </div>
                            </div>
                            <div >
                                <div style={{
                                    display: 'flex',
                                    width : '100%',
                                    marginBottom: '10px'
                                }}>
                                    <div style={{
                                    width : '45%',
                                    }}>Manufacturer:</div>  
                                    <div
                                        style={{
                                            width: '55%',
                                            display: 'block',
                                            whiteSpace: "nowrap", 
                                            overflow: "hidden",
                                            textOverflow:'ellipsis'}}
                                    >2021/07/12 16:21:12 ICT</div>    
                                </div>
                            </div>
                            <div >
                                <div style={{
                                    display: 'flex',
                                    width : '100%',
                                    marginBottom: '10px'
                                }}>
                                    <div style={{
                                    width : '45%',
                                    }}>Model:</div>  
                                    <div
                                        style={{
                                            width: '55%',
                                            display: 'block',
                                            whiteSpace: "nowrap", 
                                            overflow: "hidden",
                                            textOverflow:'ellipsis'}}
                                    >2021/07/12 16:21:12 ICT</div>    
                                </div>
                            </div>
                            <div >
                                <div style={{
                                    display: 'flex',
                                    width : '100%',
                                    marginBottom: '10px'
                                }}>
                                    <div style={{
                                    width : '45%',
                                    
                                    }}>Last Reported:</div>  
                                    <div
                                        style={{
                                            width: '55%',
                                            display: 'block',
                                            whiteSpace: "nowrap", 
                                            overflow: "hidden",
                                            textOverflow:'ellipsis'}}
                                    >2021/07/12 16:21:12 ICT</div>  
                                </div>
                            </div>
                        </div>
                        <div className="statistic-inverter">
                            <div className="header-statistic-inverter">
                                
                                <div className="header-item-plant">
                                    <div className="plant-image-header">
                                        <FcEngineering/>
                                    </div>
                                    <div className="plant-content-header">
                                        <div className="heading-item-plant">
                                            TODAY
                                        </div>
                                        <div className="value-item-plant">
                                            231.24 kWp
                                        </div>
                                    </div>
                                </div>
                                <div className="header-item-plant">
                                    <div className="plant-image-header">
                                        <FcApproval/>
                                    </div>
                                    <div className="plant-content-header">
                                        <div className="heading-item-plant">
                                            THIS MONTH
                                        </div>
                                        <div className="value-item-plant">
                                            231.24 kWp
                                        </div>
                                    </div>
                                </div>
                                <div className="header-item-plant">
                                    <div className="plant-image-header">
                                        <FcEngineering/>
                                    </div>
                                    <div className="plant-content-header">
                                        <div className="heading-item-plant">
                                            THIS YEAR
                                        </div>
                                        <div className="value-item-plant">
                                            231.24 kWp
                                        </div>
                                    </div>
                                </div>
                                <div className="header-item-plant">
                                    <div className="plant-image-header">
                                        <FcApproval/>
                                    </div>
                                    <div className="plant-content-header">
                                        <div className="heading-item-plant">
                                            LIFETIME
                                        </div>
                                        <div className="value-item-plant">
                                            231.24 kWp
                                        </div>
                                    </div>
                                </div>
                                <div className="header-item-plant">
                                    <div className="plant-image-header">
                                        <FcApproval/>
                                    </div>
                                    <div className="plant-content-header">
                                        <div className="heading-item-plant">
                                            INSTALLED TEMPERATURE
                                        </div>
                                        <div className="value-item-plant">
                                            231.24 kWp
                                        </div>
                                    </div>
                                </div>
                            </div>              
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-inverter">
                <Collapse
                    bordered={false}
                    defaultActiveKey={['1','2']}
                    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                    className="site-collapse-custom-collapse"
                >
                    <Panel header="Production" key="1" className="site-collapse-custom-panel">
                    {renderProduction()}
                    </Panel>
                    <Panel header="Device Graph" key="2" className="site-collapse-custom-panel">
                    {/* <p>{text}</p> */}
                    {renderDevice()}
                    </Panel>
                </Collapse>
            </div>
        </div>
        </>
    );
}
const mapDispatchToProps = (dispatch) =>{
    return{
      setValueNav: (par) => dispatch(setValueNavAction(par)),
    }
  }

export default connect(null,mapDispatchToProps)(Inverter);