import React from 'react';
import '../../styles/admin.css';

import { Layout, Menu } from 'antd';
import { NavLink as Link } from 'react-router-dom';
import {
  ToolFilled,
  SettingFilled,
  ScheduleFilled,
  ReadFilled,
  FileOutlined,
  MenuOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;

class SidebarEmpreendedor extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Sider
        breakpoint='lg'
        collapsible
        collapsed={collapsed}
        onCollapse={this.onCollapse}
      >
        <div className='logo' />
        <Menu theme='dark' mode='inline'>
          <SubMenu key='sub1' icon={<ToolFilled />} title='Tipo'>
            <Menu.Item key='1'>
              <Link to='/'>Empreendedor</Link>
            </Menu.Item>
            <Menu.Item key='2'>
              <Link to='/mentor'>Mentor</Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key='3' icon={<SettingFilled />}>
            Programa
          </Menu.Item>
          <Menu.Item key='4' icon={<ReadFilled />}>
            Agenda
          </Menu.Item>
          <Menu.Item key='5' icon={<ScheduleFilled />}>
            Materiais
          </Menu.Item>
          <Menu.Item key='6' icon={<FileOutlined />}>
            <Link to='/dashboard/coordenador_task'>Tarefas</Link>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default SidebarEmpreendedor;
