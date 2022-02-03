import React from 'react';

import { Layout } from 'antd';

import SidebarEmpreendedor from '../components/SidebarEmpreendedor';
import HeaderAdmin from '../components/HeaderAdmin';

const { Content } = Layout;

const Empreendedor = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SidebarEmpreendedor />
      <Layout className='site-layout'>
        <HeaderAdmin />
        <Content style={{ margin: '0 16px' }}>
          <div
            className='site-layout-background'
            style={{ padding: 24, minHeight: 760 }}
          ></div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Empreendedor;
