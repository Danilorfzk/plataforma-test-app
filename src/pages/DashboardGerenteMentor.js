import React from 'react';
import {
  Layout,
  Form,
  Input,
  Button,
  Card,
  Select,
  Row,
  Col,
  Space,
  Typography,
  PageHeader,
  Descriptions,
  Divider,
} from 'antd';

import Navbar from '../components/Navbar';
import SidebarGerente from '../components/SidebarGerente';

const { Header, Content, Footer } = Layout;

const { Title } = Typography;

const { Search } = Input;

const DashboardGerenteMentor = () => {
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
            <Space direction='vertical'>
              <Card>
                <Row>
                  <Col>
                    <PageHeader title='Mentor'>
                      <Descriptions size='middle' column={1} bordered>
                        <Descriptions.Item label='Nome'>
                          Walter White
                        </Descriptions.Item>
                        <Descriptions.Item label='CPF'>
                          012.345.678.90
                        </Descriptions.Item>
                        <Descriptions.Item label='E-mail'>
                          walterwhite@gmail.com
                        </Descriptions.Item>
                        <Descriptions.Item label='Telefone'>
                          (66) 9-9980-8888
                        </Descriptions.Item>
                        <Descriptions.Item label='Empresa/Instituição'>
                          UFR
                        </Descriptions.Item>
                        <Descriptions.Item label='Areas de atuação'>
                          Professor de Quimica <br /> Marketing
                        </Descriptions.Item>
                      </Descriptions>
                    </PageHeader>
                  </Col>
                </Row>
              </Card>
            </Space>
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
};

export default DashboardGerenteMentor;
