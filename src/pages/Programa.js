import React from 'react';

import { Layout, Descriptions, Space, Card } from 'antd';

import SidebarMentor from '../components/SidebarMentor';
import HeaderAdminMentor from '../components/HeaderAdminMentor';

const { Content } = Layout;

const Programa = () => {
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
                  title={<a href='#'>Pré-incubação para startups</a>}
                  layout='vertical'
                  column={1}
                  size={'small'}
                >
                  <Descriptions.Item>10 Inscritos</Descriptions.Item>
                  <Descriptions.Item>4 de 6 semanas</Descriptions.Item>
                  <Descriptions.Item>Descrição</Descriptions.Item>
                </Descriptions>
              </Card>

              <Card>
                <Descriptions
                  title={<a href='#'>Pré-incubação para labs</a>}
                  layout='vertical'
                  column={1}
                  size={'small'}
                >
                  <Descriptions.Item>4 Inscritos</Descriptions.Item>
                  <Descriptions.Item>1 de 10 semanas</Descriptions.Item>
                  <Descriptions.Item>Descrição</Descriptions.Item>
                </Descriptions>
              </Card>
            </Space>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Programa;
