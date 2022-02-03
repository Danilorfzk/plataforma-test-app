import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import Navbar from '../components/Navbar';
import SidebarGerente from '../components/SidebarGerente';

import '../styles/home.css';

const { Header, Content, Footer, Sider } = Layout;

const DashboardGerente = () => {
  return (
    <Layout>
      <Navbar />
      <SidebarGerente />
      <Layout>
        <Header
          className='site-layout-sub-header-background'
          style={{ padding: 0 }}
        />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            className='site-layout-background'
            style={{ padding: 24, minHeight: 1080 }}
          ></div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Footer ©2021</Footer>
      </Layout>
    </Layout>
  );
};

export default DashboardGerente;
