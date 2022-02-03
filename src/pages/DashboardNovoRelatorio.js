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
  Select,
  DatePicker,
  TimePicker,
  Upload,
  Tooltip,
} from 'antd';

import {
  MinusCircleOutlined,
  PlusOutlined,
  UploadOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import Navbar from '../components/Navbar';
import SidebarGerente from '../components/SidebarGerente';

const { Header, Content, Footer } = Layout;

const { Option } = Select;

const { TextArea } = Input;

const { Title } = Typography;

const DashboardNovoRelatorio = () => {
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
                  <Col>
                    <Form.Item name='select' label='Projeto'>
                      <Select
                        showSearch
                        style={{ width: 400 }}
                        placeholder='Por favor selecione o projeto'
                        optionFilterProp='children'
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        <Option value='projeto 1'>Projeto 1</Option>
                        <Option value='projeto x'>Projeto X</Option>
                        <Option value='empresa x'>Empresa X</Option>
                        <Option value='empresa m'>Empresa M</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Form.Item label='Nome do Projeto/Empresa' required>
                      <Input placeholder='Nome do Projeto/Empresa' />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Form.Item label='Coordenador' required>
                      <Input placeholder='Coordenador do Projeto' />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Form.Item label='CNPJ/CPF'>
                      <Input placeholder='CNPJ ou CPF da empresa' />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Form.Item label='Endereço'>
                      <Input placeholder='Endereço da empresa' />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Form.Item label='Telefone'>
                      <Input placeholder='Telefone da empresa' />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Form.Item label='Email'>
                      <Input placeholder='Email da empresa' />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Form.Item label='Assunto da Mentoria'>
                      <Input placeholder='' />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Form.Item label='Modalidade'>
                      <Select>
                        <Option value='online'>Online</Option>
                        <Option value='presencial'>Presencial</Option>
                      </Select>
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
                                <Select
                                  showSearch
                                  style={{ width: 400 }}
                                  placeholder='Por favor selecione o mentor'
                                  optionFilterProp='children'
                                  filterOption={(input, option) =>
                                    option.children
                                      .toLowerCase()
                                      .indexOf(input.toLowerCase()) >= 0
                                  }
                                >
                                  <Option value='john'>John</Option>
                                  <Option value='joe'>Joe</Option>
                                  <Option value='walter'>Walter</Option>
                                  <Option value='jane'>Jane</Option>
                                </Select>
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
                              style={{ marginTop: '8px' }}
                            >
                              Adicionar Mentor
                            </Button>
                          </Form.Item>
                        </>
                      )}
                    </Form.List>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Form.List name='members'>
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
                                <Select
                                  placeholder='Selecione os empreendedores'
                                  showSearch
                                  style={{ width: 400 }}
                                  optionFilterProp='children'
                                  filterOption={(input, option) =>
                                    option.children
                                      .toLowerCase()
                                      .indexOf(input.toLowerCase()) >= 0
                                  }
                                >
                                  <Option value='joseph'>Joseph</Option>
                                  <Option value='maria'>Maria</Option>
                                  <Option value='kevin'>Kevin</Option>
                                </Select>
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
                              style={{ marginTop: '8px' }}
                            >
                              Adicionar empreendedor presente
                            </Button>
                          </Form.Item>
                        </>
                      )}
                    </Form.List>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Form.Item label='Data do atendimento'>
                      <DatePicker />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Form.Item label='Hora de inicio do atendimento'>
                      <TimePicker />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Form.Item label='Hora de fim do atendimento'>
                      <TimePicker />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Form.Item label='Resumo do Atendimento'>
                      <TextArea showCount maxLength={600} rows={10} />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Form.Item label='Resumo do que foi repassado ao empreendedor'>
                      <TextArea showCount maxLength={600} rows={10} />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Form.List name='tasks' style={{ width: 400 }}>
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
                                label='Título da Tarefa'
                                style={{ width: 400, marginTop: '12px' }}
                              >
                                <Input placeholder='Título da Tarefa' />
                              </Form.Item>

                              <Form.Item
                                // {...restField}
                                name={[name]}
                                fieldKey={[fieldKey]}
                                label='Descrição da Tarefa'
                              >
                                <TextArea
                                  showCount
                                  maxLength={100}
                                  rows={3}
                                  style={{ width: 400 }}
                                />
                              </Form.Item>

                              <Form.Item
                                // {...restField}
                                name={[name]}
                                fieldKey={[fieldKey]}
                                label='Data de entrega da tarefa'
                              >
                                <DatePicker style={{ width: 400 }} />
                              </Form.Item>

                              <Tooltip title='Excluir Tarefa'>
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
                              Adicionar Tarefas
                            </Button>
                          </Form.Item>
                        </>
                      )}
                    </Form.List>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Form.Item label='Observação do mentor para o gestor da incubadora '>
                      <TextArea showCount maxLength={600} rows={10} />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Item>
                      <Upload
                        name='logo'
                        action='/upload.do'
                        listType='picture'
                      >
                        <Button icon={<UploadOutlined />}>
                          Comprovante do atendimento
                        </Button>
                      </Upload>
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Item>
                      <Button type='primary' htmlType='submit'>
                        Enviar relatório
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

export default DashboardNovoRelatorio;
