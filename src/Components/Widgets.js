import React ,{useState}from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Widgets from '../Components/Widgets'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
const { Header, Content, Footer ,Sider} = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const w3_open=()=> {
    document.getElementById("mySidebar").style.display = "block";
  }
  
  const w3_close=()=> {
    document.getElementById("mySidebar").style.display = "none";
  }
  return (
    <Layout className="layout">
       <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
           <span className="logo" style={{marginLeft:"1em"}}>AdminBoard</span>
        </Header>
      <Layout>
      <Content
      >
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
          <Widgets/>
        </div>
      </Content>
      </Layout>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default App;
