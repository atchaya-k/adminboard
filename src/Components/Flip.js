import React from 'react'
import { Row,Col,Card } from 'antd'
import { AreaChart, Area, LineChart,Line,BarChart,Bar, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import {ContainerFilled } from '@ant-design/icons'
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
const Flip=()=>{
    return(
        <Card className='row-2' style={{padding:"5px 0px 5px 0px"}} >
        <Row gutter={24}>
            <Col className='Flip green' offset={2} xs={6} sm={6} md={6} lg={6} xl={6}>
            <div class="flip-card">
              <div class="flip-card-inner">
               <div class="flip-card-front">
            <div className='Flip-round'>
               <div className='flip-head'>Active</div>
                      <ContainerFilled className='flip-icon'/></div>
                    <div className="Flip-Chart">
                    <ResponsiveContainer className="small-chart" width="100%" height="100%">
                    <AreaChart
          width={500}
          height={400}
          data={data}
        >
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#07ec4a" fill="#07ec4a" />
        </AreaChart>
      </ResponsiveContainer>
      </div>
               </div>
              <div class="flip-card-back">
               <div className='Flip-round'>
               <div className='flip-head'>Active</div>
                      <ContainerFilled className='flip-icon'/></div>
                    <div className="Flip-Chart">
                    <div className='circle-num'>111</div>
                </div>
             </div>
            </div>
          </div>      
            </Col>
            
            <Col className='Flip blue'offset={1} xs={6} sm={6} md={6} lg={6} xl={6}>
            <div class="flip-card">
              <div class="flip-card-inner">
               <div class="flip-card-front">
            <div className='Flip-round'>
               <div className='flip-head'>Active</div>
                      <ContainerFilled className='flip-icon'/></div>
                    <div className="Flip-Chart">
                    <ResponsiveContainer className="small-chart" width="100%" height="100%">
                    <AreaChart
          width={500}
          height={400}
          data={data}
        >
          <Tooltip />
          <Area type="monotone" dataKey="pv" stroke="#07c2ec" fill="#07c2ec" />
        </AreaChart>
      </ResponsiveContainer>        
      </div>
               </div>
              <div class="flip-card-back">
               <div className='Flip-round'>
               <div className='flip-head'>Active</div>
                      <ContainerFilled className='flip-icon'/></div>
                    <div className="Flip-Chart">
                    <div className='circle-num'>111</div>
                </div>
             </div>
            </div>
          </div>    
            
            </Col>
            <Col className='Flip warn'offset={1}  xs={6} sm={6} md={6} lg={6} xl={6}>
            <div class="flip-card">
              <div class="flip-card-inner">
            <div className='Flip-round'><div className='flip-head'>Active</div>
                      <ContainerFilled className='flip-icon'/></div>
                    <div className="Flip-Chart">
                    <ResponsiveContainer className="small-chart" width="100%" height="100%">
                    <AreaChart
          width={500}
          height={400}
          data={data}
        >
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#e4d00e" fill="#e4d00e" />
        </AreaChart>
      </ResponsiveContainer>
      </div>
      <div class="flip-card-back">
               <div className='Flip-round'>
               <div className='flip-head'>Active</div>
                      <ContainerFilled className='flip-icon'/></div>
                    <div className="Flip-Chart">
                    <div className='circle-num'>111</div>
                </div>
             </div>
      </div>
      </div>
            </Col>
        </Row>
        </Card>
    )
}
export default Flip