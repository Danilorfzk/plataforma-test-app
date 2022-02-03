import React, { useState } from 'react';
import { NavLink as Link } from 'react-router-dom';
import {
  Layout,
  Table,
  Divider,
  Space,
  Button,
  Typography,
  Input,
  Tooltip,
  Row,
  Col,
} from 'antd';

import Navbar from '../components/Navbar';
import SidebarGerente from '../components/SidebarGerente';

import Highlighter from 'react-highlight-words';
import {
  DeleteOutlined,
  EditOutlined,
  DownloadOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';

import '../styles/dashboard.css';

const { Header, Content, Footer } = Layout;

const { Title } = Typography;

const { Search } = Input;

const data = [
  {
    key: '1',
    name: 'John Brown',
    email: 'johnbrown@gmail.com',
    telefone: '(66) 99955-5500',
    empresa: 'Nenhuma',
    area: 'Tecnologia da Informação',
  },
  {
    key: '2',
    name: 'Joe Black',
    email: 'joeblack@gmail.com',
    telefone: '(11) 4002-8922',
    empresa: 'UFMT',
    area: 'Ciências Econômicas, Administração',
  },
  {
    key: '3',
    name: 'Jim Green',
    email: 'jimgreen@gmail.com',
    telefone: '(11) 4002-8922',
    empresa: 'Empresa X',
    area: 'Artes e Design',
  },
  {
    key: '4',
    name: 'Jim Red',
    email: 'jimred@gmail.com',
    telefone: '(66) 99900-0099',
    empresa: 'Empresa M',
    area: 'Marketing, Administração, Comunicação',
  },
];

const columns = [
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name',
    render: text => <Link to='/dashboard/mentor'>{text}</Link>,
    //width: '30%',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    //width: '20%',
  },
  {
    title: 'Telefone',
    dataIndex: 'telefone',
    key: 'telefone',
  },
  {
    title: 'Empresa',
    dataIndex: 'empresa',
    key: 'empresa',
    //width: '20%',
  },
  {
    title: 'Área',
    dataIndex: 'area',
    key: 'area',
    //width: '20%',
  },
  {
    title: 'Ação',
    dataIndex: '',
    key: 'action',
    render: () => (
      <Space size='middle'>
        <Tooltip title='Editar dados do mentor'>
          <a>
            <EditOutlined />
          </a>
        </Tooltip>
        <Tooltip title='Excluir mentor'>
          <a>
            <DeleteOutlined />
          </a>
        </Tooltip>
      </Space>
    ),
  },
];

function DashboardGerenteMentores() {
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
          >
            <Title level={3}>Mentores Cadastradoss</Title>
            <br />
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col span={8}>
                <Button type='primary'>
                  <Link to='/dashboard/novo_mentor'>Cadastrar novo mentor</Link>
                </Button>
              </Col>
              <Col span={8} offset={8} align='right'>
                <Space>
                  <Tooltip title='Baixar lista de mentores'>
                    <Button icon={<DownloadOutlined />} size='middle' />
                  </Tooltip>
                  <Tooltip title='Visualizar a lista de todos os mentores'>
                    <Button icon={<InfoCircleOutlined />} size='middle' />
                  </Tooltip>
                </Space>
              </Col>
            </Row>

            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col span={24}>
                <div style={{ marginTop: 24 }}>
                  <Search
                    placeholder='Pesquisar por nome do mentor'
                    allowClear
                  />
                </div>
              </Col>
            </Row>

            <Divider />

            <Row gutter={{ xs: 2, sm: 4, md: 6, lg: 12 }}>
              <Col span={24}>
                <Table columns={columns} dataSource={data} size='small' />
              </Col>
            </Row>
          </div>
        </Content>

        <Footer style={{ textAlign: 'center' }}>Footer ©2021</Footer>
      </Layout>
    </Layout>
  );
}

export default DashboardGerenteMentores;
