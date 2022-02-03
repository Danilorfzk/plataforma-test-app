import React from 'react'
import {
  Layout,
  Form,
  Input,
  Button,
  Select,
  Row,
  Col,
  Space,
  Tooltip,
} from 'antd';

import {
  MinusCircleOutlined,
  PlusOutlined,
  DeleteOutlined,
} from '@ant-design/icons';

import Navbar from '../components/Navbar';
import SidebarGerente from '../components/SidebarGerente';

const { Header, Content, Footer } = Layout;

const NewProject = () => {
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
                <Row>
                  <Col span={24}>
                    <Form.Item label='Nome do Projeto: ' required>
                      <Input placeholder='Nome do projeto' />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={24}>
                  <Col span={12}>
                    <Form.Item label='Coordenador do Projeto: ' required>
                      <Input placeholder='Coordenador do Projeto' />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label='Cargo/Função: ' required>
                      <Input placeholder='Função do coordenador' />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Form.List name='member' style={{ width: 400 }}>
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
                              direction='vertical'
                            >
                              <Form.Item
                                // {...restField}
                                name={[name]}
                                fieldKey={[fieldKey]}
                                label='Nome'
                                style={{ width: 400, marginTop: '12px' }}
                              >
                                <Input placeholder='Nome do membro do projeto' />
                              </Form.Item>
                              <Form.Item
                                // {...restField}
                                name={[name]}
                                fieldKey={[fieldKey]}
                                label='CPF'
                                style={{ width: 400 }}
                              >
                                <Input placeholder='CPF do membro do projeto' />
                              </Form.Item>
                              <Form.Item
                                // {...restField}
                                name={[name]}
                                fieldKey={[fieldKey]}
                                label='E-mail'
                                style={{ width: 400 }}
                              >
                                <Input placeholder='E-mail do membro do projeto' />
                              </Form.Item>

                              <Form.Item
                                // {...restField}
                                name={[name]}
                                fieldKey={[fieldKey]}
                                label='Telefone'
                                style={{ width: 400 }}
                              >
                                <Input placeholder='Telefone do membro do projeto' />
                              </Form.Item>

                              <Form.Item
                                // {...restField}
                                name={[name]}
                                fieldKey={[fieldKey]}
                                label='Cargo/Função'
                                style={{ width: 400 }}
                              >
                                <Input placeholder='Cargo/Função que o membro exerce na empresa' />
                              </Form.Item>

                              <Tooltip title='Excluir Membro'>
                                <DeleteOutlined onClick={() => remove(name)} />
                              </Tooltip>
                            </Space>
                          ))}
                          <Form.Item>
                            <Button
                              onClick={() => add()}
                              block
                              icon={<PlusOutlined />}
                              style={{ marginTop: '12px' }}
                            >
                              Adicionar membro do projeto
                            </Button>
                          </Form.Item>
                        </>
                      )}
                    </Form.List>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Form.Item label='CNPJ/CPF: ' required>
                      <Input placeholder='CNPJ/CPF do responsável pelo projeto' />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Form.Item label='Endereço: ' required>
                      <Input placeholder='Endereço' />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Form.Item label='Telefone: ' required>
                      <Input placeholder='Telefone para contato' />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Form.Item label='Email: ' required>
                      <Input placeholder='Email' />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Form.Item label='Demanda: ' required>
                      <Input placeholder='Informar o tipo de demanda' />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Form.Item label='Tipo de Empresa'>
                      <Select>
                        <Select.Option value='tipo1'>
                          Empresa nascente
                        </Select.Option>
                        <Select.Option value='tipo2'>
                          Empresa tradicional
                        </Select.Option>
                        <Select.Option value='tipo3'>
                          Projeto acadêmico
                        </Select.Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Form.Item label='Tipo de Atendimento'>
                      <Select>
                        <Select.Option value='tipo1'>
                          Fluxo de pré-incubação (6 semanas)
                        </Select.Option>
                        <Select.Option value='tipo2'>
                          Fluxo de incubação (12 meses)
                        </Select.Option>
                        <Select.Option value='tipo3'>
                          Atendimento sob demanda
                        </Select.Option>
                      </Select>
                    </Form.Item>
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

export default NewProject;
