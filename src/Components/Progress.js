import React from 'react';
import {Card} from 'antd'
import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Steps } from 'antd';
const Progress = () => (
    <Card className='row-3'>
      <div className='card-heading'>Progress</div>
      <div>
        <span className='indicate'><span className='dot1'></span><span className='dot1s'>Completed</span></span>
        <span className='indicate'><span className='dot2'></span><span className='dot2s'>Inprogress</span></span>
        <span className='indicate'><span className='dot3'></span><span className='dot3s'>Not Yet</span></span>
      </div>
  <Steps
   direction="vertical"
    items={[
      {
        title: 'Login',
        status: 'finish',
        icon: <UserOutlined />,
      },
      {
        title: 'Verification',
        status: 'finish',
        icon: <SolutionOutlined />,
      },
      {
        title: 'Pay',
        status: 'process',
        icon: <LoadingOutlined />,
      },
      {
        title: 'Done',
        status: 'wait',
        icon: <SmileOutlined />,
      },
    ]}
  />
  </Card>
);
export default Progress;