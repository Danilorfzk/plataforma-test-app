import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { Layout, Menu, Descriptions, Space, Card, Row, Col } from 'antd';

import SidebarMentor from '../components/SidebarMentor';
import HeaderAdminMentor from '../components/HeaderAdminMentor';

const { Content } = Layout;

const MentoriasAgendadas = () => {
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
                <Descriptions
                  title={
                    <Link to='/mentorias/programa'>Programa em andamento</Link>
                  }
                  layout='vertical'
                  column={1}
                  size={'small'}
                >
                  <Descriptions.Item>
                    <b>Empreendedor: </b> Roger Resmini
                  </Descriptions.Item>
                  <Descriptions.Item>
                    <b>Negócio: </b>VINT
                  </Descriptions.Item>
                  <Descriptions.Item>
                    <b>Data: </b>01/01/2021
                  </Descriptions.Item>
                  <Descriptions.Item>
                    <b>Assunto da Mentoria: </b>orientação inicial para entender
                    o negócio.
                  </Descriptions.Item>
                </Descriptions>
              </Card>
            </Space>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MentoriasAgendadas;
