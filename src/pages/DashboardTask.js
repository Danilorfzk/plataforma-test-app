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
  Collapse,
  Upload,
  Tooltip,
} from 'antd';

import HeaderAdmin from '../components/HeaderAdmin';
import SidebarEmpreendedor from '../components/SidebarEmpreendedor';

import { UploadOutlined } from '@ant-design/icons';

import '../styles/dashboard.css';

const { Header, Content, Footer, Sider } = Layout;

const { Title } = Typography;

const { Panel } = Collapse;

const text1 = `Levantar dados sobre os clientes para definir a persona.`;

const text2 = `Levantar dados mais aprofundados para melhorar a definição da persona do cliente.`;

const text3 = `Listar todos os custos da empresa hoje em duas listas: fixos e variáveis.`;

const data = `Entrega: 30/11/2021`;

const DashboardTask = () => {
  return (
    <Layout>
      <SidebarEmpreendedor />
      <Layout>
        <HeaderAdmin />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            className='site-layout-background'
            style={{ padding: 24, minHeight: 1080 }}
          >
            <Space direction='vertical'>
              <Collapse>
                <Panel header='Task 1' key='1' style={{ width: 305 }}>
                  <p>{text1}</p>
                  <Upload>
                    <Button icon={<UploadOutlined />}>Enviar arquivo</Button>
                  </Upload>
                  <br />
                  <p>{data}</p>
                </Panel>
              </Collapse>
              <Collapse>
                <Panel header='Task 2' style={{ width: 305 }}>
                  <p>{text2}</p>
                  <Upload>
                    <Button icon={<UploadOutlined />}>Enviar arquivo</Button>
                  </Upload>
                  <br />
                  <p>{data}</p>
                </Panel>
              </Collapse>
              <Collapse>
                <Panel header='Task 3' key='1' style={{ width: 305 }}>
                  <p>{text1}</p>
                  <Upload>
                    <Button icon={<UploadOutlined />}>Enviar arquivo</Button>
                  </Upload>
                  <br />
                  <p>{data}</p>
                </Panel>
              </Collapse>
            </Space>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardTask;
