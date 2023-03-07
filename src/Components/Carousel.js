import React from 'react';
import { CircularProgressbar,CircularProgressbarWithChildren,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Carousel,Card,Row,Col } from 'antd';
import {ContainerFilled } from '@ant-design/icons'
import { LineChart,Line,ResponsiveContainer,Tooltip } from 'recharts';
const contentStyle = {
  height: '170px',
  color: '#fff',
  lineHeight: '170px',
  textAlign: 'center',
  background: '#374d79',
};
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
const CarouselCard = () => (
    <Card className='row-2'>
  <Carousel autoplay>
    <div>  <Row gutter={24}>
          <Col offset={1} xs={7} sm={7} md={7} lg={7} xl={7}>
          <div className="radialBar radialBarcarousel second-carousel">
          <CircularProgressbar value={66} text={`66%`}/>
       <span className='carousel-name'>Active</span>
        </div>
          </Col>
          <Col  xs={7} sm={7} md={7} lg={7} xl={7}>
          <div className="radialBar radialBarcarousel second-carousel">
        <CircularProgressbar value={66} text={`66%`}/>
        <span className='carousel-name'>Active</span>
        </div>
          </Col>
          <Col xs={7} sm={7} md={7} lg={7} xl={7}>
          <div className="radialBar radialBarcarousel second-carousel">
        <CircularProgressbar value={66} text={`66%`}/>
        <span className='carousel-name'>Active</span>
        </div>
          </Col>
        </Row>  
     
    </div>
    <div>
    <Row gutter={24}>
          <Col offset={1} xs={7} sm={7} md={7} lg={7} xl={7}>
          <div className='circle completedc'>
              <div className='circle-head'>Active</div>
              <div className='circle-num'>111</div>
             </div>
          </Col>
          <Col  xs={7} sm={7} md={7} lg={7} xl={7}>
          <div className='circle progressc'>
              <div className='circle-head'>Active</div>
              <div className='circle-num'>111</div>
             </div>
          </Col>
          <Col xs={7} sm={7} md={7} lg={7} xl={7}>
            <div className='circle notyetc'>
              <div className='circle-head'>Active</div>
              <div className='circle-num'>111</div>
             </div>
          </Col>
        </Row>
    </div>
    <div>
      <Row gutter={24}>
      <Col className='Carousel'  offset={1} xs={7} sm={7} md={7} lg={7} xl={7}>
        <ResponsiveContainer className="small-chart"width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}

        >
          <Tooltip />
          <Line type="line" dataKey="pv" stroke="#82ca9d" strokeWidth={2}  activeDot={{r : 12}} />
        </LineChart>
      </ResponsiveContainer>
      <span className='carousel-name-1'>Active</span>
        </Col>
        <Col className='Carousel'   xs={7} sm={7} md={7} lg={7} xl={7}>
        <ResponsiveContainer className="small-chart" width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}

        >
          <Tooltip />
          <Line type="linear" dataKey="pv" stroke="#07c2ec" strokeWidth={2} activeDot={{r : 12}} />
        </LineChart>
      </ResponsiveContainer>
      <span className='carousel-name-1'>Active</span>
          </Col>
          <Col className='Carousel'  xs={7} sm={7} md={7} lg={7} xl={7}>
          <ResponsiveContainer className="small-chart" width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}

        >
          <Tooltip />
          <Line type="linear" dataKey="pv" stroke="#07c2ec" strokeWidth={2} activeDot={{r : 12}} />
          <Line type="line" dataKey="uv" stroke="#82ca9d" strokeWidth={2}  activeDot={{r : 12}} />
        </LineChart>
      </ResponsiveContainer>
      <span className='carousel-name-1'>Active</span>
            </Col>
      </Row>
    </div>
  </Carousel>
  </Card>
);
export default CarouselCard;