import React ,{useEffect, useState} from 'react';
import {
    ComposedChart,
    Bar,
    AreaChart, 
    Legend, 
    Label , 
    Area,
    Line ,
    XAxis, 
    YAxis, 
    CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FcApproval, FcEngineering } from "react-icons/fc";
import { DatePicker, Radio  } from 'antd';
import { connect } from 'react-redux';
import {
  setValueNavAction,

} from '../../../redux/actions'
import './style.css'
function Plant(props) {
    const {match, setValueNav}=props;

    const [isPickerOne, setIsPickerOne] = useState('date');
    const [isPickerTwo, setIsPickerTwo] = useState('week')
    useEffect(() => {
        setValueNav(1);
        console.log("🚀 ~ file: index.jsx ~ line 5 ~ Plant ~ match", match)
    }, [])

    const data = [
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

    const  handlePickerChangeOne = e => {
        setIsPickerOne(e.target.value);
    };

    const  handlePickerChangeTwo = e => {
        setIsPickerTwo(e.target.value);
    };

    return (
        <>
            <div className="header-plant">
                <div className="header-item-plant">
                    <div className="plant-image-header">
                        <FcApproval/>
                    </div>
                    <div className="plant-content-header">
                        <div className="heading-item-plant">
                            INSTALLED CAPACITY
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
            </div>
            <div className="main-plant-one">
                <div className="chart-plant-one">
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
                        <DatePicker  picker={isPickerOne} />
                            {/* <Radio.Group 
                            // value={size} 
                            onChange={handlePickerChangeOne}>
                            <Radio.Button value="day">Day</Radio.Button>
                            <Radio.Button value="month">Month</Radio.Button>
                            <Radio.Button value="year">Year</Radio.Button>
                            <Radio.Button disabled value="year">Total</Radio.Button>
                            </Radio.Group> */}
                    </div>
                    <h4 style={{
                        marginTop: '5px',
                        textAlign: 'center'
                    }}>Generated Energy: 1.92 Mvh</h4>
                    <ResponsiveContainer width="100%" height="80%">
                        
                        <AreaChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 30,
                            right: 90,
                            left: 10,
                            bottom: 0,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name">
                        <Label value="Thoi gian" offset={20} position="right" />
                        </XAxis>
                        <YAxis>
                        <Label value="cong xuat" offset={20} position="top" />
                        </YAxis>

                        <Tooltip />
                        <Legend verticalAlign="top" height={36}/>
                        <Area 
                        type="monotone" 
                        dataKey="uv" 
                        stroke="#07f783" 
                        fill="#01ff2c"
                        >
                        </Area >
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
                <div className="report-plant-one">
                    <div className="revenue-statistics">
                        <div className="title-revenue-statistics">
                            Thống kê doanh thu
                        </div>
                        <div className="content-revenue-statistics">
                            <div className="title-item-statistics">
                                Lợi nhuận hôm nay
                            </div>
                            <div className="value-item-statistics-one">
                                1.634.122 VND
                            </div>
                        </div>
                        <div className="content-revenue-statistics">
                            <div className="title-item-statistics">
                                Doanh thu tháng này
                            </div>
                            <div className="value-item-statistics-two">
                                1.634.122 VND
                            </div>
                        </div> 
                        <div className="content-revenue-statistics">
                            <div className="title-item-statistics">
                                Doanh thu năm này
                            </div>
                            <div className="value-item-statistics-three">
                                1.634.122 VND
                            </div>
                        </div> 
                        <div className="content-revenue-statistics">
                            <div className="title-item-statistics">
                                Tổng doanh thu
                            </div>
                            <div className="value-item-statistics-four">
                                1.634.122 VND
                            </div>
                        </div>     
                    </div> 
                    <div className="environmental">
                        <div className="title-environmental">
                            Environmental & Economic Benefits
                        </div>
                        <div className="item-environmental">
                            <div className="icon-item-environmental">
                                <FcApproval/>
                            </div>
                            <div className="content-item-environmental">
                                <div className="title-item-environmental">
                                    Giảm xả thải khí CO2
                                </div>
                                <div className="value-item-environmental item-environmental-one">
                                    301.541 Kg
                                </div>
                            </div>
                            
                        </div>
                        <div className="item-environmental">
                            <div className="icon-item-environmental">
                                <FcApproval/>
                            </div>
                            <div className="content-item-environmental">
                                <div className="title-item-environmental">
                                    Thanh tiêu chuẩn tiết kiệm
                                </div>
                                <div className="value-item-environmental">
                                    301.541 Kg
                                </div>
                            </div>
                            
                        </div>
                        <div className="item-environmental">
                            <div className="icon-item-environmental">
                                <FcApproval/>
                            </div>
                            <div className="content-item-environmental">
                                <div className="title-item-environmental">
                                    Cây tương đương
                                </div>
                                <div className="value-item-environmental item-environmental-two">
                                    301.541 Kg
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="main-plant-one" style={{marginTop: '30px'}}>
                <div className="chart-plant-one">
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
                        <DatePicker  picker={isPickerTwo} />
                            <Radio.Group 
                            onChange={handlePickerChangeTwo}>
                            <Radio.Button value="week">Week</Radio.Button>
                            <Radio.Button value="month">Month</Radio.Button>
                            <Radio.Button value="year">Year</Radio.Button>
                            <Radio.Button disabled value="year">Total</Radio.Button>
                            </Radio.Group>
                    </div>
                    <ResponsiveContainer width="100%" height="80%">
                        <ComposedChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 30,
                            right: 30,
                            left: 10,
                            bottom: 0,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name">
                        </XAxis>
                        <YAxis >
                        <Label value="Sản lượng" offset={20} position="top" />
                        </YAxis>
                        <YAxis
                            yAxisId="right"
                            type="number"
                            dataKey="amt"
                            name="weight"
                            unit="%"
                            orientation="right"
                            stroke="#82ca9d"
                        />
                        <Tooltip />
                        <Legend verticalAlign="top" height={36}/>
                        <Line
                        type="monotone" 
                        dataKey="amt" 
                        stroke="#367bf5"
                        yAxisId="right" 
                        >
                        </Line>
                        <Bar dataKey="pv" fill="#2dd348" />
                        <Bar dataKey="uv" fill="#ff7900" />
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>
                <div className="report-plant-one">
                    <div className="plant-performance">
                        <div className="title-plant-performance">
                            <p>Plant Performance
                                <br />
                                <br />
                            Total</p>
                        </div>
                        <div className="item-environmental">
                            <div className="icon-item-environmental">
                                <FcApproval/>
                            </div>
                            <div className="content-item-environmental">
                                <div className="title-item-environmental">
                                    Giảm xả thải khí CO2
                                </div>
                                <div className="value-item-environmental item-environmental-one">
                                    301.541 Kg
                                </div>
                            </div>
                            
                        </div>
                        <div className="item-environmental">
                            <div className="icon-item-environmental">
                                <FcApproval/>
                            </div>
                            <div className="content-item-environmental">
                                <div className="title-item-environmental">
                                    Thanh tiêu chuẩn tiết kiệm
                                </div>
                                <div className="value-item-environmental">
                                    301.541 Kg
                                </div>
                            </div>
                            
                        </div>
                        <div className="item-environmental">
                            <div className="icon-item-environmental">
                                <FcApproval/>
                            </div>
                            <div className="content-item-environmental">
                                <div className="title-item-environmental">
                                    Cây tương đương
                                </div>
                                <div className="value-item-environmental item-environmental-two">
                                    301.541 Kg
                                </div>
                            </div>
                            
                        </div>
                    </div>
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

export default connect(null,mapDispatchToProps)(Plant);

