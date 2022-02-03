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

const DashboardProject = () => {
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
                    <PageHeader title='Qualificação do Empreendimento'>
                      <Descriptions size='small' column={1} bordered>
                        <Descriptions.Item label='Empresa/Projeto'>
                          VINT
                        </Descriptions.Item>
                        <Descriptions.Item label='CNPJ'>
                          35.854.176/0001-95
                        </Descriptions.Item>
                        <Descriptions.Item label='Endereço'>
                          Avenida dos Estudantes, 5055 - Cidade Universitária.
                          Rondonópolis - MT, 78736-900
                        </Descriptions.Item>
                        <Descriptions.Item label='Telefone'>
                          (66) 9-9980-8888
                        </Descriptions.Item>
                        <Descriptions.Item label='Demanda'>
                          Reposicionamento da empresa no mercado
                        </Descriptions.Item>
                      </Descriptions>
                    </PageHeader>
                  </Col>
                </Row>
              </Card>
              <Card>
                <Row>
                  <Col>
                    <PageHeader title='Qualificação do Empreendedor'>
                      <Descriptions size='small' column={1} bordered>
                        <Descriptions.Item label='Responsável'>
                          John Doe
                        </Descriptions.Item>
                        <Descriptions.Item label='CPF'>
                          012.345.678-90
                        </Descriptions.Item>
                        <Descriptions.Item label='E-mail'>
                          johndoe@gmail.com
                        </Descriptions.Item>
                        <Descriptions.Item label='Telefone'>
                          (66) 9-99988-8877
                        </Descriptions.Item>
                        <Descriptions.Item label='Cargo'>
                          Gerente
                        </Descriptions.Item>
                      </Descriptions>
                    </PageHeader>
                  </Col>
                </Row>
              </Card>
              <Card>
                <Row>
                  <Col>
                    <PageHeader title='Qualificação do Empreendedor'>
                      <Descriptions size='small' column={1} bordered>
                        <Descriptions.Item label='Responsável'>
                          Jane Doe
                        </Descriptions.Item>
                        <Descriptions.Item label='CPF'>
                          033.111.222.50
                        </Descriptions.Item>
                        <Descriptions.Item label='E-mail'>
                          janedoe@gmail.com
                        </Descriptions.Item>
                        <Descriptions.Item label='Telefone'>
                          (66) 4002-8922
                        </Descriptions.Item>
                        <Descriptions.Item label='Cargo'>
                          Diretor de Marketing
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

export default DashboardProject;
