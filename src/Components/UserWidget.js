import React from "react";
import {ContainerFilled,CommentOutlined,BellOutlined ,MailOutlined} from '@ant-design/icons'
import { Card, Row,Col,Divider,List,Progress } from "antd";
import { AreaChart, Area, LineChart,Line,BarChart,Bar, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const dataone = [
    {data: 'Pending Tasks',icon:ContainerFilled},
    {data : 'Unread Message.',icon:CommentOutlined  },
    {data : 'New notification.',icon:BellOutlined  },
    {data : 'New mails.',icon:MailOutlined },
  ];
  const data = [
    {
      name: 'Page A',
      uv: 100,
      pv: 140,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 300,
      pv: 139,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 200,
      pv: 280,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 380,
      pv: 108,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 189,
      pv: 480,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 239,
      pv: 380,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 349,
      pv: 430,
      amt: 2100,
    },
  ];      
const UserWidget=()=>{
    return(
        <Card className='row-2'>
            <Row>
                <Col xs={24} sm={24} md={12} lg={5} xl={5}>
                <div className='card-heading'>Progress</div>
  <List
      size="small"
      dataSource={dataone}
      renderItem={(item) => <List.Item><item.icon className="user-icon"/>{item.data}</List.Item>}
    />
                </Col>
                <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                <div className='card-heading'>On Going</div>
                <ResponsiveContainer className="long-chart" width="100%" height="100%">
        <AreaChart
          width={200}
          height={200}
          data={data}
        >
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#07c2ec" fill="#07c2ec" />
        </AreaChart>
      </ResponsiveContainer>
                </Col>
                <Col  xs={24} sm={24} md={12} lg={5} xl={5}>
                <div className='card-heading'>Others</div>
                <div
    style={{
      width: 170,
      margin: "2em 0em 0em 2em"
    }}
  >
    <Progress percent={30} size="small" />
    <Progress percent={50} size="small" status="active" />
    <Progress percent={70} size="small" status="exception" />
    <Progress percent={100} size="small" />
  </div>
                </Col>
            </Row>
        </Card>
    )
}
export default UserWidget;