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
  Image,
} from 'antd';

import Navbar from '../components/Navbar';
import SidebarGerente from '../components/SidebarGerente';

const { Header, Content, Footer } = Layout;

const DashboardGerenteRelatorio = () => {
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
              <Card>
                <Row>
                  <Col>
                    <PageHeader title='Ações Realizadas - Atendimento 01'>
                      <Descriptions size='small' column={4} bordered>
                        <Descriptions.Item label='Data'>
                          24/12/2021
                        </Descriptions.Item>
                        <Descriptions.Item label='Inicio'>
                          13h:30
                        </Descriptions.Item>
                        <Descriptions.Item label='Fim'>
                          15h:00
                        </Descriptions.Item>
                        <Descriptions.Item label='Modalidade'>
                          Online
                        </Descriptions.Item>
                      </Descriptions>
                      <Descriptions size='small' column={1} bordered>
                        <Descriptions.Item label='Assunto da Mentoria'>
                          Diagnóstico empresarial
                        </Descriptions.Item>
                        <Descriptions.Item label='Mentores'>
                          Walter White <br />
                          Jessie Pinkman <br />
                          Hank Schrader <br />
                        </Descriptions.Item>
                        <Descriptions.Item label='Resumo do Atendimento'>
                          O empreendedor iniciou a agenda apresentando a
                          modelagem do seu negócio utilizando o lean canvas. Ele
                          mencionou ter dúvidas no campo de “segmento de
                          clientes” e no campo “estrutura de custos”.
                        </Descriptions.Item>
                        <Descriptions.Item label='Resumo do que foi repassado ao empreendedor'>
                          Orientei sobre os campos que tinha dúvida sugerindo
                          traçar a persona do cliente com base nos registros de
                          vendas online. Ele consegue levantar a idade, sexo,
                          gênero e algumas outras informações como frequência de
                          compras, valor das compras e categoria de itens
                          comprados, mas estas outras informações vão tomar mais
                          tempo para levantar. Sobre a estrutura de custos
                          orientei que ele pense sobre custos fixos e custos
                          variáveis.
                        </Descriptions.Item>
                        <Descriptions.Item label='Tarefas'>
                          - Levantar dados sobre os clientes para definir a
                          persona; <br />
                          - Levantar dados mais aprofundados para melhorar a
                          definição da persona do cliente; <br />
                          - Listar todos os custos da empresa hoje em duas
                          listas: fixos e variáveis. <br />
                        </Descriptions.Item>
                        <Descriptions.Item label='Entrega das Tarefas'>
                          25/12/2021
                        </Descriptions.Item>
                        <Descriptions.Item label='Observação do Mentor'>
                          Esse é Um campo de Feedback sobre a reunião com o
                          empreedendor.
                        </Descriptions.Item>
                      </Descriptions>
                    </PageHeader>
                  </Col>
                </Row>
              </Card>
              <Card>
                <Row>
                  <Col>
                    <PageHeader title='Evidência do Atendimento 01'>
                      <Descriptions size='small' column={1} bordered>
                        <Descriptions.Item>
                          <Image width={600} src='https://picsum.photos/600' />
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

export default DashboardGerenteRelatorio;
