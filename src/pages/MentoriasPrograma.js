import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { Layout, Menu, Descriptions, Space, Card, Table } from 'antd';

import SidebarMentor from '../components/SidebarMentor';
import HeaderAdminMentor from '../components/HeaderAdminMentor';

const { Content } = Layout;

const data = [
  {
    key: '1',
    acao: 'Atendimento 01',
    date: '22-09-2021',
    assunto: 'orientação inicial para entender o negócio',
    mentores: 'Jon Doe',
  },
  {
    key: '2',
    acao: 'Atendimento 02',
    date: '22-09-2021',
    assunto: 'orientação inicial para entender o negócio',
    mentores: 'Jon Doe',
  },
  {
    key: '3',
    acao: 'Atendimento 03',
    date: '22-09-2021',
    assunto: 'orientação inicial para entender o negócio',
    mentores: 'Jon Doe',
  },
  {
    key: '4',
    acao: 'Atendimento 04',
    date: '22-09-2021',
    assunto: 'orientação inicial para entender o negócio',
    mentores: 'Jon Doe',
  },
];

const columns = [
  {
    title: 'Atendimento',
    dataIndex: 'acao',
    key: 'acao',
    render: (text) => <Link to='/mentoria/relatorio'>{text}</Link>,
  },
  {
    title: 'Data',
    dataIndex: 'date',
    key: 'date',
    //width: '30%',
  },
  {
    title: 'Assunto',
    dataIndex: 'assunto',
    key: 'assunto',
    //width: '20%',
  },
  {
    title: 'Mentor(es)',
    dataIndex: 'mentores',
    key: 'mentores',
    //width: '20%',
  },
];

const MentoriasPrograma = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SidebarMentor />
      <Layout className='site-layout'>
        <HeaderAdminMentor />
        <Content style={{ margin: '0 16px' }}>
          <div
            className='site-layout-background'
            style={{ padding: 24, minHeight: 760 }}
          >
            <Space direction='vertical'>
              <Card>
                <Descriptions title='Qualificação do empreendimento' column={2}>
                  <Descriptions.Item label='Empresa/Projeto'>
                    VINT
                  </Descriptions.Item>
                  <Descriptions.Item label='CNPJ'>
                    35.854.176/0001-95
                  </Descriptions.Item>
                  <Descriptions.Item label='Endereço'>
                    Avenidas dos Estudantes, 5055 - Cidade Universitárias.
                    Rondonópolis - MT, 78736-900
                  </Descriptions.Item>
                  <Descriptions.Item label='Telefone'>
                    (66)999887788
                  </Descriptions.Item>
                </Descriptions>
              </Card>
              <br />
              <Table columns={columns} dataSource={data} size='small' />
            </Space>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MentoriasPrograma;
