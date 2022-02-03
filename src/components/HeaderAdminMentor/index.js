import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import '../../styles/header.css';

import {
  Layout,
  Menu,
  Avatar,
  Row,
  Col,
  Button,
  Space,
  Typography,
  List,
  Popover,
  Divider,
  Dropdown,
} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { MdNotifications } from 'react-icons/md';
import { IoNotifications, IoSearch } from 'react-icons/io5';

const { Header } = Layout;
const { SubMenu } = Menu;
const { Text } = Typography;

const menu = (
  <Menu>
    <Menu.Item>
      <List size='small'>
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar icon={<UserOutlined />} />}
            title={'Jack Black'}
            description='Mentor'
          />
        </List.Item>
      </List>
    </Menu.Item>
    <Menu.Item>
      <List size='small'>
        <List.Item>
          <List.Item.Meta title={'Perfil'} />
        </List.Item>
      </List>
    </Menu.Item>
    <Menu.Item>
      <List size='small'>
        <List.Item>
          <List.Item.Meta title={'Configurações'} />
        </List.Item>
      </List>
    </Menu.Item>
    <Menu.Item>
      <List size='small'>
        <List.Item>
          <List.Item.Meta title={<Link to='/'>Sair</Link>} />
        </List.Item>
      </List>
    </Menu.Item>
  </Menu>
);

class HeaderAdminMentor extends React.Component {
  render() {
    return (
      <Header
        style={{
          padding: 0,
          background: '#fff',
          boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
          marginBottom: '6px',
        }}
      >
        <div className='iconsPos'>
          <Space size='small'>
            <Button type='text' size='large' icon={<IoSearch />}></Button>
            <Button
              type='text'
              size='large'
              icon={<IoNotifications />}
            ></Button>
            <Dropdown
              overlay={menu}
              placement='bottomLeft'
              overlayStyle={{
                width: 200,
                float: 'left',
              }}
            >
              <Avatar size='large' icon={<UserOutlined />} />
            </Dropdown>
          </Space>
        </div>
      </Header>
    );
  }
}

export default HeaderAdminMentor;

//box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
//boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)'
