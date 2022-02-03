import React from 'react';
import { Layout, Menu } from 'antd';
import { NavLink as Link } from 'react-router-dom';
import {
  UploadOutlined,
  UserOutlined,
  ProjectOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import { FiUsers } from 'react-icons/fi';

const { Sider } = Layout;

const SidebarCoordenador = () => {
  return (
    <Sider breakpoint='lg' collapsedWidth='0'>
      <div className='logo' />
      <Menu theme='dark' mode='inline'>
        <Menu.Item key='1' icon={<ExclamationCircleOutlined />}>
          <Link to='/dashboard/coordenador_task'>Tarefas</Link>
        </Menu.Item>
        <Menu.Item key='2' icon={<ExclamationCircleOutlined />}>
          <Link to='/dashboard/coordenador_task'>Reuniões</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SidebarCoordenador;
