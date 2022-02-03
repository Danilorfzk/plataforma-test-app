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
    acao: 'Atendimento 1',
    name: 'Empresa 1',
    theme: 'Marketing',
    author: 'John',
    date: '22-09-2021',
  },
  {
    key: '2',
    acao: 'Atendimento 2',
    name: 'Empresa X',
    theme: 'Marketing',
    author: 'Joe',
    date: '21-09-2021',
  },
  {
    key: '3',
    acao: 'Atendimento 3',
    name: 'Projeto 1',
    theme: 'Marketing',
    author: 'Walter',
    date: '20-09-2021',
  },
  {
    key: '4',
    acao: 'Atendimento 4',
    name: 'Projeto X',
    theme: 'Marketing',
    author: 'Jane',
    date: '18-09-2021',
  },
];

const columns = [
  {
    title: 'Ação Realizada',
    dataIndex: 'acao',
    key: 'acao',
    render: text => <Link to='/dashboard/relatorio'>{text}</Link>,
  },
  {
    title: 'Empresa/Projeto',
    dataIndex: 'name',
    key: 'name',
    //width: '30%',
  },
  {
    title: 'Tema',
    dataIndex: 'theme',
    key: 'theme',
    //width: '20%',
  },
  {
    title: 'Mentor',
    dataIndex: 'author',
    key: 'author',
    //width: '20%',
  },
  {
    title: 'Data de Criação',
    dataIndex: 'date',
    key: 'date',
    //width: '20%',
  },
  {
    title: 'Ação',
    dataIndex: '',
    key: 'action',
    render: () => (
      <Space size='middle'>
        <Tooltip title='editar relatório'>
          <a>
            <EditOutlined />
          </a>
        </Tooltip>
        <Tooltip title='baixar relatório'>
          <Link to='/dashboard/relatorio'>
            <DownloadOutlined />
          </Link>
        </Tooltip>
        <Tooltip title='excluir relatório'>
          <a>
            <DeleteOutlined />
          </a>
        </Tooltip>
      </Space>
    ),
  },
];






function DashboardRelatorios() {
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
            <Title level={3}>Relatórios</Title>
            <br />
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col span={8}>
                <Button type='primary'>
                  <Link to='/dashboard/novo_relatorio'>
                    Criar novo relatório
                  </Link>
                </Button>
              </Col>
              <Col span={8} offset={8} align='right'>
                <Space>
                  <Tooltip title='Baixar todos os relatórios'>
                    <Button icon={<DownloadOutlined />} size='middle' />
                  </Tooltip>
                  <Tooltip title='Visualizar todos os relatórios'>
                    <Button icon={<InfoCircleOutlined />} size='middle' />
                  </Tooltip>
                </Space>
              </Col>
            </Row>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col span={24}>
                <div style={{ marginTop: 24 }}>
                  <Search placeholder='Pesquisar relatório' allowClear />
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

        <Footer
          style={{
            bottom: 0,
            width: '100%',
            textAlign: 'center',
          }}
        >
          Footer ©2021
        </Footer>
      </Layout>
    </Layout>
  );
}

export default DashboardRelatorios;
