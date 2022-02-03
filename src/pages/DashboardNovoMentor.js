import React from 'react';
import {
  Layout,
  Typography,
  Space,
  Menu,
  Form,
  Input,
  Button,
  Card,
  Row,
  Col,
} from 'antd';

import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

import Navbar from '../components/Navbar';
import SidebarGerente from '../components/SidebarGerente';

const { Header, Content, Footer } = Layout;

const DashboardNovoMentor = () => {
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
              <Form
                layout='vertical'
                name='dynamic_form_item'
                style={{ width: 400 }}
              >
                <Row gutter={24}>
                  <Col span={12}>
                    <Form.Item label='Nome' required>
                      <Input placeholder='Nome' />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label='Sobrenome' required>
                      <Input placeholder='Sobrenome' />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Form.Item label='Email' required>
                      <Input placeholder='Email' />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Form.Item label='Telefone' required>
                      <Input placeholder='Código de área e telefone' />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Form.Item label='Empresa/Instituição'>
                      <Input placeholder='Informar a Instituição/Empresa onde trabalha' />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Form.List name='users'>
                      {(fields, { add, remove }) => (
                        <>
                          {fields.map(({ key, name, fieldKey }) => (
                            <Space
                              key={key}
                              style={{
                                display: 'flex',
                                marginBottom: 4,
                              }}
                              align='baseline'
                            >
                              <Form.Item
                                // {...restField}
                                name={[name]}
                                fieldKey={[fieldKey]}
                              >
                                <Input
                                  placeholder='Área de atuação'
                                  style={{ width: 300 }}
                                />
                              </Form.Item>
                              <MinusCircleOutlined
                                onClick={() => remove(name)}
                              />
                            </Space>
                          ))}
                          <Form.Item>
                            <Button
                              onClick={() => add()}
                              block
                              icon={<PlusOutlined />}
                            >
                              Adicionar áreas de atuação
                            </Button>
                          </Form.Item>
                        </>
                      )}
                    </Form.List>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Item>
                      <Button type='primary' htmlType='submit'>
                        Enviar
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Space>
          </div>
        </Content>

        <Footer style={{ textAlign: 'center' }}>Footer ©2021</Footer>
      </Layout>
    </Layout>
  );
};

export default DashboardNovoMentor;
