import React, { useState } from 'react';
import { NavLink as Link } from 'react-router-dom';
import jsPDF from 'jspdf';
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

//Pagina de Impressao PDF do Relatorio

const columns = [
  {
    title: 'Empresa/Projeto',
    dataIndex: 'name_empresa',
    render: text => <Link to='/dashboard/projeto'>{text}</Link>,
  },
  {
    title: 'Coodenador de Projeto',
    dataIndex: 'name_coordenador',
  },
  {
    title: 'Tipo',
    dataIndex: 'tipo',
  },
  {
    title: 'Atendimento',
    dataIndex: 'atendimento',
  },
  {
    title: 'Mentor',
    dataIndex: 'mentor',
  },
  {
    title: 'Data de Criação',
    dataIndex: 'date',
  },
  {
    title: 'Ação',
    dataIndex: '',
    key: 'action',
    render: () => (
      <Space size='middle'>
        <Tooltip title='Editar projeto'>
          <a>
            <EditOutlined />
          </a>
        </Tooltip>
        <Tooltip title='Baixar dados do projeto'>
          <Link to='/dashboard/projeto'>
            <DownloadOutlined />
          </Link>
        </Tooltip>
        <Tooltip title='Excluir projeto'>
          <a>
            <DeleteOutlined />
          </a>
        </Tooltip>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name_empresa: 'Projeto 1',
    name_coordenador: 'Joe Doe',
    tipo: 'Empresa nascente',
    atendimento: 'Fluxo de pré-incubação',
    mentor: 'Alice',
    date: '20/09/2021',
  },
  {
    key: '2',
    name_empresa: 'Empresa X',
    name_coordenador: 'Walter White',
    tipo: 'Empresa tradicional',
    atendimento: 'Fluxo de incubação',
    mentor: 'Alice',
    date: '21/09/2021',
  },
  {
    key: '3',
    name_empresa: 'Projeto X',
    name_coordenador: 'Jim Green',
    tipo: 'Projeto acadêmico.',
    atendimento: 'Atendimento sob demanda',
    mentor: 'Alice',
    date: '22/09/2021',
  },
  {
    key: '4',
    name_empresa: 'Empresa M',
    name_coordenador: 'Joe Black',
    tipo: 'Empresa nascente',
    atendimento: 'Fluxo de pré-incubação',
    mentor: 'John White',
    date: '23/09/2021',
  },
];

const DashboardGerenteProjects = () => {
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
            <Title level={3}>Projetos Cadastrados</Title>
            <br />
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col span={8}>
                <Button type='primary'>
                  <Link to='/dashboard/gerente_novoprojeto'>
                    Cadastrar novo projeto
                  </Link>
                </Button>
              </Col>

              <Col span={8} offset={8} align='right'>
                <Space>
                  <Tooltip title='Baixar lista de projetos'>
                    <Button icon={<DownloadOutlined />} size='middle' />
                  </Tooltip>
                  <Tooltip title='Visualizar lista de projetos'>
                    <Button icon={<InfoCircleOutlined />} size='middle' />
                  </Tooltip>
                </Space>
              </Col>
            </Row>

            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col span={24}>
                <div style={{ marginTop: 24 }}>
                  <Search
                    placeholder='Pesquisar por nome do projeto'
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
};

export default DashboardGerenteProjects;
