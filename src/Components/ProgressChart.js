import React from "react";
import { Card,Statistic,Row,Col } from "antd";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {ContainerFilled } from '@ant-design/icons'
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];   
function ProgressChart() {
  return (
    <Card className="row-1">
      <div className="CompactCard"
      >
        <div className="radialBar">
        <CircularProgressbar value={66} text={`66%`}/>
        <span>Active</span>
        </div>
        <div className="detail">
          <ContainerFilled/>
            <span>66</span>
            <span>last 24 hrs</span>
        </div>
      </div>
      {/*<div className="chart">
        <div>
          <ContainerFilled className="info01"/>
          <div className="number">33</div>
        </div>
        <div>
        <CircularProgressbar
        className="progress"
        value={33}
        text={`${33}%`}
        styles={buildStyles({
          pathColor :"rgb(6, 182, 3)",
          trailColor: "rgb(41 96 40)",
          textColor:"rgb(6, 182, 3)"
        })}
      />
        </div>
      </div>
      <hr className="hr1"/>
    
      <div className="bottom-header">Active</div>*/}
    </Card>
  );
}

export default ProgressChart;