import React from 'react';
import { Layout, Menu } from 'antd';
import { NavLink as Link } from 'react-router-dom';
import {
  UploadOutlined,
  UserOutlined,
  ProjectOutlined,
} from '@ant-design/icons';
import { FiUsers } from 'react-icons/fi';

import '../../styles/home.css';

const { Sider } = Layout;

const SidebarGerente = () => {
  return (
    <Sider breakpoint='lg' collapsedWidth='0'>
      <div className='logo' />
      <Menu theme='dark' mode='inline'>
        <Menu.Item key='1' icon={<ProjectOutlined />}>
          <Link to='/dashboard/gerente_projetos'>Projetos</Link>
        </Menu.Item>
        <Menu.Item key='2' icon={<FiUsers />}>
          <Link to='/dashboard/gerente_mentores'>Mentores</Link>
        </Menu.Item>
        <Menu.Item key='3' icon={<UploadOutlined />}>
          <Link to='/dashboard/relatorios'></Link>Relatórios
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SidebarGerente;
