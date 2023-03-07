import React from "react";
import { Card,Statistic,Row,Col } from "antd";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {ContainerFilled } from '@ant-design/icons'
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const StatisticWidget=props=> {
  return (
    <Card className="row-1">
      <div className="CompactCard"
      >
        <div className="radialBar">
          {props.children}
        <span>Active</span>
        </div>
        <div className="detail">
          <ContainerFilled/>
            <span>66</span>
            <span>last 24 hrs</span>
        </div>
      </div>
    </Card>
  );
}

export default StatisticWidget;