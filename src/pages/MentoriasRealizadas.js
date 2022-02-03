import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { Layout, Menu, Descriptions, Space, Card, Row, Col } from 'antd';

import SidebarMentor from '../components/SidebarMentor';
import HeaderAdminMentor from '../components/HeaderAdminMentor';

const { Content } = Layout;

const MentoriasRealizadas = () => {
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
                  title={<Link to='/mentoria/relatorio'>Programa 1</Link>}
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
                    <b>Data: </b>16/12/2021
                  </Descriptions.Item>
                  <Descriptions.Item>
                    <b>Assunto da Mentoria: </b>orientação inicial para entender
                    o negócio.
                  </Descriptions.Item>
                </Descriptions>
              </Card>

              <Card>
                <Descriptions
                  title={<Link to='/mentoria/relatorio'>Programa 2</Link>}
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
                    <b>Data: </b>16/12/2021
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

export default MentoriasRealizadas;
