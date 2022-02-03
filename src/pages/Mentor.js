import React, { useState } from 'react';

import { Layout, Menu, Breadcrumb } from 'antd';

import SidebarMentor from '../components/SidebarMentor';
import HeaderAdminMentor from '../components/HeaderAdminMentor';

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Mentor = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SidebarMentor />
      <Layout className='site-layout'>
        <HeaderAdminMentor />
        <Content style={{ margin: '0 16px' }}>
          <div
            className='site-layout-background'
            style={{ padding: 24, minHeight: 760 }}
          ></div>
        </Content>
      </Layout>
    </Layout>
  )
};

export default Mentor;
